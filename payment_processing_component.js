import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export const PaymentProcessingComponent = ({ totalAmount, onPaymentSuccess }) => {
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else {
      const paymentResult = await fetch('/api/charge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ payment_method_id: paymentMethod.id, amount: totalAmount })
      });

      if (paymentResult.ok) {
        onPaymentSuccess();
      } else {
        setError('Payment failed.');
      }

      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='payment-form'>
      <CardElement />
      <button type='submit' disabled={!stripe || processing}>Pay {totalAmount}</button>
      {error && <p className='error-message'>{error}</p>}
    </form>
  );
};