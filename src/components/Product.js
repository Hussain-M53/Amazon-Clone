import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Product({ id, title, price, rating, image }) {
  const [{ user }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "Add_To_Cart",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <StarIcon style={{ fill: "#FF9529", width: "17px" }} />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <Link to={!user && "/login"}>
        <button onClick={addToBasket} className="btn"> Add to Cart</button>
      </Link>
    </div>
  );
}

export default Product;
