import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bhimavaram Birayni's",
  description: "Serving flaming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Food Truck</title>
    </Head>
    <body className={inter.class}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </body>
  </html>
  );
}
