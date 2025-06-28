// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return items.reduce((total, item) => {
    return total + parseFloat(item.price) * item.count;
  }, 0);
};

export default async function handler(req, res) {
  console.log("🟡 Incoming request to /api/create-payment-intent");
  console.log("▶️ Request Method:", req.method);
  console.log("▶️ Stripe Secret Key loaded:", !!process.env.STRIPE_SECRET_KEY);
  console.log("▶️ Stripe Public Key loaded:", !!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  console.log("▶️ Request Body:", JSON.stringify(req.body));

  const { items } = req.body;

  if (!items || !Array.isArray(items)) {
    console.error("Invalid items array:", items);
    return res.status(400).send({ error: "Invalid items array" });
  }

  try {
    // Create a PaymentIntent with the order amount and currency
    const orderAmount = calculateOrderAmount(items) * 100;
    console.log("💰 Calculated Order Amount (cents):", orderAmount);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: orderAmount,
      currency: "usd",
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: true,
      },
    });

    console.log("PaymentIntent created:", paymentIntent.id)

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
}
