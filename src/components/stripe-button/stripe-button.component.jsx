import React from "react";

import StripeCheckout from "react-stripe-checkout";

export const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // in cents
  const purchasableKey =
    "pk_test_51HOznBFklKNiCp0sAcWG12TiIAjMhatsGkMgAzdHh3c03W0he91X5hT9isUI2UqKsS34SovhjXzMtyfBYHI4mpuG00L9vNd1Db";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successfull!!");
  };

  return (
    <StripeCheckout
      token={onToken}
      stripeKey={purchasableKey}
      name="CRWN CLOTHING LTD."
      description={`Your Total Price: ${price}`}
      image="https://sendeyo.com/up/d/f3eb2117da"
      label="Pay Now"
      amount={priceForStripe}
      currency="USD"
      panelLabel="Amount:"
      shippingAddress
      billingAddress
    />
  );
};

export default StripeCheckoutButton;
