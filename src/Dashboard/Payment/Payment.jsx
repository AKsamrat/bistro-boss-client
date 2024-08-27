import React from 'react';
import SectionTitle from './../../Component/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CHeckoutForm from './CHeckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PaymentGateway_PK);
const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading={'Payment'}
        subHeading={'Please pay to eat'}
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CHeckoutForm></CHeckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
