import React from "react";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";
import "./CheckOutProduct.css";

function CheckOutProduct({ id, title, price, rating, image, hideButton }) {
  const [state, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "Remove_From_Cart",
      item: {
        id: id,
      },
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkOutProduct_image" src={image} alt="product image" />
      <div className="checkOutProduct_info">
        <p className="checkOutProduct_title">{title}</p>
        <p className="checkOutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkOutProduct_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <StarIcon style={{ fill: "#FF9529", width: "17px" }} />
              </p>
            ))}
        </div>
        {!hideButton && 
          <button onClick={removeFromCart}>Remove From Cart</button>
        }
      </div>
    </div>
  );
}

export default CheckOutProduct;
