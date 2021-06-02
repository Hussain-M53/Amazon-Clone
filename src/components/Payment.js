import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useHistory, useLocation } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import CheckOutProduct from "./CheckOutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "./axios";
import {db} from './firebase';

function Payment(props) {
  const location = useLocation();
  const address = location.state?.add;
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("THE SECRET IS >>>", clientSecret);
  console.log("👱", user);

  const handleSubmit = async (event) => {
    // do all the fancy stripe stuff...
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/order");
      });
  };

  const handleChange = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className="payment">
      <h1>CheckOut ( {basket?.length} items )</h1>
      <div className="payment_section">
        <div className="payment_title">
          <h3>Delivery Address</h3>
        </div>
        <div className="payment_address">
          <p>{user?.email}</p>
          <p>{address}</p>
          <p>Karachi, Pakistan</p>
        </div>
      </div>
      <div className="payment_section">
        <div className="payment_title">
          <h3>Review items and delivery</h3>
        </div>
        <div className="payment_items">
          {basket?.map((item) => (
            <CheckOutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="payment_section">
        <div className="payment_title">
          <h3>Payment Method</h3>
        </div>
        <div className="payment_details">
          <form onSubmit={handleSubmit}>
            <CardElement className="card"onChange={handleChange} />
            <div className="payment_price">
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <h3>Total Amount : {value}</h3>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                thousandSeparator={true}
                displayType={"text"}
                prefix={"$"}
              />
              <button className="payment_btn" disabled={disabled || succeeded || processing}>
                <span>{processing ? <p>Processing....</p> : "Pay Now"}</span>
              </button>
            </div>
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
