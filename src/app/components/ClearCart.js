'use client'
import React from 'react';
import { purgePersistedStore } from '../../store/purgeStore';

const ClearCart = () => {
  const handleClearCart = () => {
    purgePersistedStore();
    alert('Persisted state has been cleared!');
  };

  return (
    <button onClick={handleClearCart}>Clear Cart</button>
  );
};

export default ClearCart;
