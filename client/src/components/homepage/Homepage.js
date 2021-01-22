import React from "react";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { ShopAllCardContainer } from "..";

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
      <div className="flex flex-col items-stretch lg:flex-row m-2 xl:m-auto">
        <img
          className=" md:max-h-42 lg:max-h-96 "
          src="//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/000/original/open-uri20171227-4-14arcgf?1514342096"
          alt="skincare"
        />
        <img
          className=" md:max-h-42 lg:max-h-96 "
          src="//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/001/original/open-uri20171227-4-1das33x?1514342770"
          alt="bronzer"
        />
        <div
          className=" md:max-h-42 lg:max-h-96 text-center uppercase box-border border-white bg-gradient-to-l
         md:bg-gradient-to-r from-yellow-900 via-yellow-600 to-yellow-500"
        >
          <h2 className="text-5xl font-normal leading-normal mt-3 mb-3 text-black">
            new!
          </h2>
          <h5 className="text-4xl font-normal leading-normal mt-3 mb-3 text-red-800">
            Exicting
          </h5>
          <h5 className="inline-block break-words m-5">
            Luxious color, elegant makeup that would leave you wanting more and
            turning eyes.
          </h5>
          <Link
            to="/shop"
            className="bg-pink-800 text-white active:bg-black  font-bold uppercase text-base px-8 py-3
           shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            style={{ transition: "all .15s ease" }}
          >
            shop now
          </Link>
        </div>
      </div>

      <div className=" my-20 ">
        <h3 className=" uppercase mt-5 text-center">
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
            className="bg-black text-white active:bg-black font-bold uppercase text-base px-8 py-3
           shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            style={{ transition: "all .15s ease" }}
          >
            Shop Nail polish
          </Link>
        </div>
      </div>

      <div
        // style={{ alignItems: 'stretch' }}
        className="flex flex-col md:flex-row items-stretch px-12 items-center uppercase "
      >
        <div>
          <img
            className="md:max-h-42 lg:max-h-96"
            src="//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/847/original/open-uri20171224-4-1se9mcb?1514074989"
            alt="eyeshadow"
          />
        </div>

        <div
          className=" md:px-16 text-center box-border border-white bg-gradient-to-l
         md:bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
        >
          <h2 className="text-5xl font-normal leading-normal my-3 text-pink-800">
            new!
          </h2>
          <h5 className="text-2xl md:text-4xl font-normal leading-normal my-3 md:text-red-800">
            concealer
          </h5>
          <h5 className="inline-block break-words">
            beautiful concealer that would leave you looking stunning
          </h5>
          <Link
            to="/type/concealer"
            className="bg-black text-white active:bg-black font-bold uppercase text-base px-8 py-3
           shadow-md hover:shadow-lg outline-none focus:outline-none mt-3 mb-3"
            type="button"
            style={{ transition: "all .15s ease" }}
          >
            shop concealer
          </Link>
        </div>
      </div>

      <div className="mt-20">
        <h3 className=" uppercase mb-5 text-center">Newly arrived mascara</h3>
        <div className="mb-6">
          <ShopAllCardContainer
            product={mascara}
            makeupProduct={layoutProductForMascara}
          />
        </div>
        <div className="flex flex-col items-center mb-20 ">
          <Link
            to="/type/mascara"
            className="bg-black text-white active:bg-black font-bold uppercase text-base px-8 py-3
           shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            style={{ transition: "all .15s ease" }}
          >
            shop our mascara
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row px-12 items-stretch  items-center uppercase ">
        <div>
          <img
            className="md:max-h-42 lg:max-h-96"
            src="//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/999/original/open-uri20171227-4-2ul0s6?1514341420"
            alt="eyeshadow"
          />
        </div>
        <div
          className="px-16 md:px-32  text-center box-border border-white bg-gradient-to-l
         md:bg-gradient-to-r from-yellow-500 via-red-300 to-yellow-900"
        >
          <h2 className="text-5xl font-normal leading-normal mt-3 mb-3 text-pink-800">
            new!
          </h2>
          <h5 className="md:text-4xl font-normal leading-normal mt-3 mb-3 text-red-800">
            all things glossier
          </h5>
          <h5 className="inline-block break-words mb-3">
            elegant new items from glossier.
          </h5>
          <Link
            to="/type/glossier"
            className="bg-black text-white active:bg-black font-bold uppercase text-base px-4 py-3
           shadow-md hover:shadow-lg outline-none focus:outline-none mr-3 mb-3"
            type="button"
            style={{ transition: "all .15s ease" }}
          >
            shop items from glossier
          </Link>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-center uppercase"> our Latest lusious bronzer</h3>
        <div className="mb-6">
          <ShopAllCardContainer
            product={bronzer}
            makeupProduct={layoutProductForBronzer}
          />
        </div>
        <div className="flex flex-col items-center mb-20">
          <Link
            to="/type/bronzer"
            className="bg-black text-white active:bg-black font-bold uppercase text-base px-8 py-3
           shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            style={{ transition: "all .15s ease" }}
          >
            shop our bronzer
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row px-12 items-stretch  items-center uppercase ">
       
        <div>
          <img
            className="md:max-h-42 lg:max-h-96"
            src="//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/674/original/open-uri20171223-4-1wtdzyq?1514062744"
            alt="eyeshadow"
          />
        </div>
        <div
          className="text-center px-16 text-center box-border border-white bg-gradient-to-l
         md:bg-gradient-to-r from-yellow-400 via-red-200 to-blue-500"
        >
          <h2 className="text-5xl font-normal leading-normal my-3 text-pink-800">
            new
          </h2>
          <h5 className="text-2xl md:text-4xl font-normal leading-normal my-3 text-red-800">
            butter london
          </h5>
          <h5 className="inline-block break-words">
            butter london products that would leave you coming back for more
          </h5>
          <div className="">
            <Link
              to="/type/butter%20london"
              className="bg-black  text-white active:bg-black font-bold uppercase text-base px-4 py-3
           shadow-md hover:shadow-lg outline-none focus:outline-none mr-3 mb-3"
              type="button"
              style={{ transition: "all .15s ease" }}
            >
              shop butter london
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
