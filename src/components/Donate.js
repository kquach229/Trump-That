import React from "react";
import "./Donate.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51HodCpHVsIH8w2Oybz4uFHECIssGmOi4eNZxLrSDXzWiKJF3k2cIMQzxIxb7zQeJuDjTb83V6jxdzSNudZd0hrdx00ZaD2dAO5"
);

const Donate = () => {
  return (
    <div className="donate">
      <h1 className="donate__sectionHeader">Donate Now</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Donate;
