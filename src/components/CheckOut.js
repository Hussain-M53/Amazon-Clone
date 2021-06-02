import React from "react";
import { useStateValue } from "./StateProvider";
import "./CheckOut.css";
import CheckOutProduct from "./CheckOutProduct";
import SubTotal from "./SubTotal";
function CheckOut() {
  const [{ user, basket }] = useStateValue();

  return (
    <div className="checkOut">
      <div className="checkOutLeft">
        <img
          className="checkOut_ad"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlyYJJVnEx7AltyBUaR1eI94_LH4YVODBcxA&usqp=CAU"
          alt="ad image"
          width="100%"
          height="200px"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Cart is empty</h2>
            <p>
              You have no items in your cart. To buy one, click on the{" "}
              <strong>Add To Cart </strong>button right next to the item
            </p>
          </div>
        ) : (
          <div>
            <h2 className="CheckOut_title">Your Shopping Cart</h2>
            {user && basket?.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="checkOut_right">
          <SubTotal />
        </div>
      )}
    </div>
  );
}
export default CheckOut;
