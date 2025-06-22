// app/page.js
'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Hero from './components/Hero';
import { Features } from './components/Features';
import MenuDescription from './components/MenuDescription';
import Menu from './components/Menu';
import { Reviews } from './components/Reviews';
import Faq from './components/Faq';
import Subscribe from './components/Subscribe';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// 👉 Load client-only component (no SSR)
const PaymentHandler = dynamic(() => import('./components/PaymentHandler'), {
  ssr: false,
});
export default function Home() {
  return (
    <>
      <PaymentHandler />
      <Hero />
      <Features />
      <MenuDescription />
      <Menu />
      <Reviews />
      <Faq />
      <Subscribe />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

