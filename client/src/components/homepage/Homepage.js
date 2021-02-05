import React from "react";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { ShopAllCardContainer, Advert } from "..";
import Img from "react-cool-img";
import { advert } from "./advertData";
const Homepage = (props) => {
  const {
    layoutProduct,
    product,
    bronzer,
    layoutProductForBronzer,
    layoutProductForMascara,
    mascara,
  } = props;
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-stretch justify-center  m-2 xl:m-auto">
        <Img
          className=" md:max-h-42 lg:max-h-96 "
          src="//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/000/original/open-uri20171227-4-14arcgf?1514342096"
          alt="skincare"
          sizes={[400]}
        />
        <Img
          className=" md:max-h-42 lg:max-h-96 "
          src="//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/001/original/open-uri20171227-4-1das33x?1514342770"
          alt="bronzer"
          sizes={[400]}
        />
        <div
          className=" md:max-h-42 lg:max-h-96 text-center uppercase box-border border-white bg-gradient-to-l
         md:bg-gradient-to-r from-yellow-900 via-yellow-600 to-yellow-500"
        >
          <h2 className="text-5xl font-normal leading-normal mt-3 mb-0 text-black">
            new!
          </h2>
          <h4 className="text-3xl font-normal leading-normal mt-3 mb-0 text-red-800">
            Exicting
          </h4>
          <h6 className="text-2xl  font-normal leading-normal mt-0 mb-0 inline-block break-words m-5">
            Luxious color, elegant makeup that would leave you wanting more and
            turning eyes.
          </h6>
          <Link
            to="/shop"
            className="bg-pink-800 text-white shadow  bg-black shadow border border-solid border-white 
            hover:bg-pink hover:text-black active:bg-white-600 font-bold uppercase
             text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 "
            type="button"
            style={{ transition: "all .15s ease" }}
          >
            shop now
          </Link>
        </div>
      </div>

      <div className=" my-20 ">
        <h3
          className="text-4xl font-normal 
        leading-normal mt-0 mb-2  uppercase text-center"
        >
          Our uniquely made nail polish
        </h3>
        <div className="mb-6">
          <ShopAllCardContainer
            product={product}
            makeupProduct={layoutProduct}
          />
        </div>
        <div className="flex flex-col items-center mb-20">
          <Link
            to="/type/nail_polish"
            className="text-white shadow  bg-black shadow border border-solid border-white 
            hover:bg-pink hover:text-black active:bg-white-600 font-bold uppercase
             text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 "
            type="button"
            style={{ transition: "all .15s ease" }}
          >
            Shop Nail polish
          </Link>
        </div>
      </div>
      <Advert advert={advert[0]} />

      <div className="mt-20">
        <h3
          className="text-4xl font-normal
         leading-normal mt-0 mb-2 uppercase text-center"
        >
          Newly arrived mascara
        </h3>
        <div className="mb-6">
          <ShopAllCardContainer
            product={mascara}
            makeupProduct={layoutProductForMascara}
          />
        </div>
        <div className="flex flex-col items-center mb-20 ">
          <Link
            to="/type/mascara"
            className="text-white shadow  bg-black shadow border border-solid border-white 
              hover:bg-pink hover:text-black active:bg-white-600 font-bold uppercase
               text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 "
            type="button"
            style={{ transition: "all .15s ease" }}
          >
            shop our mascara
          </Link>
        </div>
      </div>

      <Advert advert={advert[1]} />

      <div className="mt-20">
        <h3
          className="text-4xl font-normal leading-normal
         mt-0 mb-2 text-center uppercase"
        >
          {" "}
          our Latest lusious bronzer
        </h3>
        <div className="mb-6">
          <ShopAllCardContainer
            product={bronzer}
            makeupProduct={layoutProductForBronzer}
          />
        </div>
        <div className="flex flex-col items-center mb-20">
          <Link
            to="/type/bronzer"
            className="text-white shadow  bg-black shadow border border-solid border-white 
            hover:bg-pink hover:text-black active:bg-white-600 font-bold uppercase
             text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 "
            type="button"
            style={{ transition: "all .15s ease" }}
          >
            shop our bronzer
          </Link>
        </div>
      </div>
      <Advert advert={advert[2]} />

      <Footer />
    </div>
  );
};

export default Homepage;
