import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import "./SubTotal.css";
import { getBasketTotal } from "./reducer";
import { Link } from "react-router-dom";

function SubTotal() {
  const [{ user, basket }] = useStateValue();
  const [address, setAddress] = useState("");

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal ({basket.length} items ) : <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        thousandSeparator={true}
        displayType={"text"}
        prefix={"$"}
      />
      <input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="address"
        type="address"
        placeholder="Shipping Address"
      />
      <Link
        to={{
          pathname: "/payment",
          state: { add: address },
        }}
      >
        <button className="checkout_btn">Proceed To Checkout</button>
      </Link>
    </div>
  );
}

export default SubTotal;
