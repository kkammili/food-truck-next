const calculateOrderAmount = (items) => {
  return items.reduce((total, item) => {
    return total + parseFloat(item.price) * item.count;
  }, 0);
};

export default async function handler(req, res) {
  console.log("🔁 Incoming request to /api/create-payment-intent");

  if (!process.env.STRIPE_SECRET_KEY) {
    console.error("❌ STRIPE_SECRET_KEY is missing!");
    return res.status(500).send({ error: "Server misconfiguration" });
  }

  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  const { items } = req.body;

  if (!items || !Array.isArray(items)) {
    console.error("❌ Invalid items array:", items);
    return res.status(400).send({ error: "Invalid items array" });
  }

  try {
    const orderAmount = calculateOrderAmount(items) * 100;
    console.log("💰 Calculated Order Amount:", orderAmount);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: orderAmount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    console.log("✅ PaymentIntent created:", paymentIntent.id);
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("❌ Error from Stripe:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
}

