import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ user, basket }] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <nav className="header_top">
        {/* logo n the left*/}
        <Link to="/">
          <img
            className="header_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon logo"
          />
        </Link>

        {/* search box*/}
        <div className="header_search">
          <input type="text" className="header_searchBar" />
          <SearchIcon className="header_searchIcon" />
        </div>

        {/* toggle buttons/3 links*/}

        <div className="header_nav">
          {/*1st links*/}
          <Link to={!user && "/login"} className="header_link">
            <div className="header_options" onClick={login}>
              <span className="header_option1">Hello {user?.email}</span>
              <span className="header_option2">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          {/*2nd links*/}
          <Link to="/order" className="header_link">
            <div className="header_options">
              <span className="header_option1">Returns</span>
              <span className="header_option2">& Orders</span>
            </div>
          </Link>
          {/*3rd links*/}
          <Link to="/" className="header_link">
            <div className="header_options">
              <span className="header_option1">Your</span>
              <span className="header_option2">Prime</span>
            </div>
          </Link>
        </div>
        {/* basket icons with number*/}
        <Link to="/checkout" className="header_link">
          <div className="headerOptions_basket">
            <ShoppingCartIcon />
            <span className="header_option2 header_basketCount">
              {user && basket?.length}
            </span>
          </div>
        </Link>
      </nav>

      {/* Header bottom */}

      <div className="header_bottom">
        <Link className="header_link">
          <div className="headerBottom_link">
            <MenuIcon style={{ fill: "white", marginLeft: "10px" }} />
            <span className="headerBottom_Links_span1">All</span>
            <span className="headerBottom_Links_spans">Today's Deals</span>
            <span className="headerBottom_Links_spans">Customer Service</span>
            <span className="headerBottom_Links_spans">Gift Cards</span>
            <span className="headerBottom_Links_spans">Registry</span>
            <span className="headerBottom_Links_spans">Sell</span>
          </div>
        </Link>
        <Link className="header_link">
          <span className="headerBottom_Links_spans">
            Amazon's response to COVID-19
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
