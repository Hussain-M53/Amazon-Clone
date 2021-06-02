import React from "react";
import "./Home.css";
import Product from "./Product";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="home">
      {/* banner for home page */}
      <Carousel
        id="amazon-image"
        className="home_image"
        autoPlay={true}
        transitionTime={500}
        showStatus={false}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        <div>
          <img
            className="banner_image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          />
        </div>
        <div>
          <img
            className="banner_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          />
        </div>
        <div>
          <img
            className="banner_image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
          />
        </div>
        <div>
          <img
            className="banner_image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
          />
        </div>
        <div>
          <img
            className="banner_image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
          />
        </div>
        <div>
          <img
            className="banner_image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
          />
        </div>
        <div>
          <img
            className="banner_image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/CurrencyConverter/2020/AMZ_Associates_ACC_Banner_Evergreen_1500x600_v2._CB415565312_.jpg"
          />
        </div>
      </Carousel>
      {/*Product id,title,price,rating,image */}
      <div className="row">
        <Product
          id={1}
          title="Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor, Black"
          price={129.99}
          rating={5}
          image="https://static.acer.com/up/Resource/Acer/Monitors/ED5/Images/20181228/Acer-monitor-ED5-series-ED245Q-ED245QA-preview.png"
        />
        <Product
          id={2}
          title="Hanes Women's Jersey Full Zip Hoodie"
          price={11.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81bO1PWtEUL._AC_UX342_.jpg"
        />
      </div>
      <div className="row">
        <Product
          id={6}
          title="Laura Ashley Home - Charlotte Collection - Luxury Ultra Soft Comforter, All Season Premium Bedding Set, Stylish Delicate Design for Home Décor, King, China Blue"
          price={329.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/A1kFVCaVUOL._AC_SY450_.jpg"
        />

        <Product
          id={4}
          title="GearLight LED Tactical Flashlight S1000 [2 Pack] - High Lumen, Zoomable, 5 Modes, Water Resistant Light - Camping Accessories, Outdoor Gear, Emergency Flashlights"
          price={60.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71T8xKEDuuL._AC_SY355_PIbundle-2,TopRight,0,0_SH20_.jpg"
        />
        <Product
          id={5}
          title="Crayola Colored Pencil Set, School Supplies, Assorted Colors, 36 Count, Long"
          price={5.97}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81rXy5rY3wL._AC_SY450_.jpg"
        />
      </div>
      <div className="row">
        <Product
          id={3}
          title="Hisense 40-Inch Class H4 Series LED Roku Smart TV with Alexa Compatibility (40H4F, 2020 Model)"
          price={239.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71gzlKauNQL._AC_SY355_.jpg"
        />
      </div>
      <div className="footer">
        <div className="top">
          <Link to="/">
            <div className="backToTop" onClick={scrollToTop}>
              <img src="./down-arrow.svg"/>
              <p>Back To Top</p>
            </div>
          </Link>
          <div className="middle">
            <div className="one">
              <strong>
                <span>Get to Know Us</span>
              </strong>
              <span>Careers</span>
              <span>Blog</span>
              <span>About Amazon</span>
              <span>Investor Relations</span>
              <span>Amazon Devices</span>
              <span>Amazon Tours</span>
            </div>
            <div className="two">
              <strong>
                <span>Make Money with Us</span>
              </strong>
              <span>Sell products on Amazon</span>
              <span>Sell on Amazon Business</span>
              <span>Sell apps on Amazon</span>
              <span>Become an Affiliate</span>
              <span>Advertise Your Products</span>
              <span>Self-Publish with Us</span>
              <span> Host an Amazon Hub </span>
              <span>›See More Make Money with Us</span>
            </div>
            <div className="three">
              <strong>
                <span>Amazon Payment Products</span>
              </strong>
              <span>Amazon Business Card</span>
              <span>Shop with Points</span>
              <span>Reload Your Balance</span>
              <span>Amazon Currency Converter</span>
            </div>
            <div className="four">
              <strong>
                <span>Let Us Help You</span>
              </strong>
              <span>Amazon and COVID-19</span>
              <span>Your Accounts</span>
              <span>Your Orders</span>
              <span>Shipping Rates & Policies</span>
              <span>Returns & Replacements</span>
              <span>Manage Your Content and Devices</span>
              <span> Amazon Assistant </span>
              <span>Help</span>
            </div>
          </div>
          <hr />
          <div className="footer_logo">
            <img
              className="footer_logo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </div>
        </div>
        <div className="bottom">
          <div className="col">
            <div>
              <strong>
                <span>Amazon Music</span>
              </strong>
              <span>Stream millions of songs</span>
            </div>
            <div>
              <strong>
                <span>Sell on Amazon</span>
              </strong>
              <span>Start a Selling Account</span>
            </div>
            <div>
              <strong>
                <span>Book Depository</span>
              </strong>

              <span>Books With Free Delivery Worldwide</span>
            </div>
            <div>
              <strong>
                <span>IMDb</span>
              </strong>
              <span>Movies, TV & Celebrities</span>
            </div>
            <div>
              <strong>
                <span>Ring</span>
              </strong>
              <span>Smart Home Security Systems </span>
            </div>
          </div>
          <div className="col">
            <div>
              <strong>
                <span> Amazon Advertising</span>
              </strong>
              <span>Find, attract, and engage customers</span>
            </div>
            <div>
              <strong>
                <span>Amazon Business</span>
              </strong>
              <span>Everything For Your Business</span>
            </div>
            <div>
              <strong>
                <span>Box Office Mojo</span>
              </strong>
              <span> Find Movie Box Office Data</span>
            </div>
            <div>
              <strong>
                <span> IMDbPro</span>
              </strong>
              <span>Get Info Entertainment Professionals Need</span>
            </div>
            <div>
              <strong>
                <span> eero WiFi</span>
              </strong>
              <span>Stream 4K Video in Every Room</span>
            </div>
          </div>

          <div className="col">
            <div>
              <strong>
                <span> Amazon Drive</span>
              </strong>
              <span>Cloud storage from Amazon</span>
            </div>
            <div>
              <strong>
                <span> AmazonGlobal</span>
              </strong>
              <span>Ship Orders Internationally</span>
            </div>
            <div>
              <strong>
                <span> ComiXology</span>
              </strong>
              <span>Thousands of Digital Comics</span>
            </div>
            <div>
              <strong>
                <span> Kindle Direct Publishing</span>
              </strong>
              <span>Indie Digital & Print Publishing Made Easy</span>
            </div>
            <div>
              <strong>
                <span> Blink</span>
              </strong>
              <span> Smart Security for Every Home</span>
            </div>
          </div>
          <div className="col">
            <div>
              <strong>
                <span> 6pm</span>
              </strong>
              <span> Score deals on fashion brands</span>
            </div>
            <div>
              <strong>
                <span> Home Services </span>
              </strong>
              <span>Experienced Pros Happiness Guarantee</span>
            </div>
            <div>
              <strong>
                <span> DPReview</span>
              </strong>
              <span> Digital Photography</span>
            </div>
            <div>
              <strong>
                <span> Prime Video Direct</span>
              </strong>
              <span> Video Distribution Made Easy</span>
            </div>
            <div>
              <strong>
                <span> Neighbors App</span>
              </strong>
              <span> Real-Time Crime & Safety Alerts</span>
            </div>
          </div>
          <div className="col">
            <div>
              <strong>
                <span> AbeBooks </span>
              </strong>
              <span> Books, art & collectibles</span>
            </div>
            <div>
              <strong>
                <span> Amazon Ignite</span>
              </strong>
              <span> Sell your original Digital Educational Resources</span>
            </div>
            <div>
              <strong>
                <span> East Dane</span>
              </strong>
              <span> Designer Men's Fashion</span>
            </div>
            <div>
              <strong>
                <span> Shopbop</span>
              </strong>
              <span> Designer Fashion Brands</span>
            </div>
            <div>
              <strong>
                <span> Amazon Subscription Boxes</span>
              </strong>
              <span>Top subscription boxes – right to your door</span>
            </div>
          </div>
          <div className="col">
            <div>
              <strong>
                <span>ACX</span>
              </strong>
              <span> Audiobook Publishing Made Easy</span>
            </div>
            <div>
              <strong>
                <span> Amazon Web Services</span>
              </strong>
              <span> Scalable Cloud Computing Services</span>
            </div>
            <div>
              <strong>
                <span> Fabric</span>
              </strong>
              <span> Sewing, Quilting & Knitting</span>
            </div>
            <div>
              <strong>
                <span> Woot!</span>
              </strong>
              <span> Deals and Shenanigans</span>
            </div>
            <div>
              <strong>
                <span> PillPack</span>
              </strong>
              <span> Pharmacy Simplified </span>
            </div>
          </div>
        </div>
        <div className="copyright">
          <strong>
            <span> Conditions of Use</span>
          </strong>
          <strong>
            <span> Privacy Notice</span>
          </strong>
          <strong>
            <span> Interest-Based Ads</span>
          </strong>
          <strong>
            <span> © 1996-2021, Amazon.com, Inc. or its affiliates</span>
          </strong>
        </div>
      </div>
    </div>
  );
}

export default Home;
// another banner image
{
  /*https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg*/
  /*https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg */
}
