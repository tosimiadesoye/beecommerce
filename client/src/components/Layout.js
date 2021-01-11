import React from 'react'
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { newCart } from "./LayoutArrays";

import { Block } from "./card/CardContainer";
import {ShopAllCardContainer}from './shop-container'



const Layout = ({ layoutProduct, product, bronzer,layoutProductForBronzer }) => {
 
  
  return (
    <div>
       <div className="grid grid-rows-2 grid-flow-col gap-3 gap-x-0">
        <div className=" ml-20 row-span-3 ">
          <img className="h-80 w-5/6 " src="/images/blush.jpg" alt="display" />
        </div>
        <div className="mr-20 col-span-1">
          <img className="h-40 " src="/images/eyebrow.jpg" alt="Third slide" />
        </div>
        <div className="mr-20 col-span-2 ">
          <img className="h-40 " src="/images/eyebrow.jpg" alt="Third slide" />
        </div>
      </div> 

       

      <div className="flex flex-col md:flex-row px-16 py-20 items-center uppercase ">
        <div className="w-1/3">
          <img src="//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/847/original/open-uri20171224-4-1se9mcb?1514074989" alt="eyeshadow" />
        </div>

        <div
          className="px-16 py-20 text-center box-border border-white bg-gradient-to-l
         md:bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
        >
          <h2 className="text-5xl font-normal leading-normal mt-0 mb-2 text-pink-800">
            new!
          </h2>
          <h5 className="text-4xl font-normal leading-normal mt-0 mb-2 text-red-800">
            eyeshadow
          </h5>
          <h5 className="inline-block break-words">
            LUSCIOUS COLOR, EXPLOSIVE SHINE. NOURISHED, FULLER-LOOKING LIPS.
          </h5>
          <button
            className="bg-black text-white active:bg-black font-bold uppercase text-base px-8 py-3
           shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            style={{ transition: "all .15s ease" }}
          >
            <Link
              to="/type/eyeshadow"
              className="text-white uppercase font-normal
             block  whitespace-no-wrap bg-transparent "
            >
              shop our eyeshadow
            </Link>
          </button>
        </div>
      </div>

      <div
        className="mb-5"
      >
        <h3 className=" uppercase mb-5 text-center">Upcoming Collection</h3>
        <div className="mb-6">
           {/* <CardContainer info={product}/>  */}
          <ShopAllCardContainer product={product} makeupProduct={ layoutProduct}/>
        </div>
        <button
          className="bg-black text-white active:bg-black font-bold uppercase text-base px-8 py-3
           shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          type="button"
          style={{ transition: "all .15s ease" }}
        >
          <Link
            to="/shop"
            className=" text-white uppercase font-normal
             block  whitespace-no-wrap bg-transparent "
          >
            shop all items
          </Link>
        </button>
      </div>
      <div></div>

      <div className="flex flex-col md:flex-row px-16 py-20 items-center uppercase ">
        <div className="w-1/3">
          <img src="/images/lipStick.jpg" alt="eyeshadow" />
        </div>
        <div
          className="px-16 py-20 text-center box-border border-white bg-gradient-to-l
         md:bg-gradient-to-r from-yellow-500 via-red-300 to-yellow-900"
        >
          <h2 className="text-5xl font-normal leading-normal mt-0 mb-2 text-pink-800">
            new!
          </h2>
          <h5 className="text-4xl font-normal leading-normal mt-0 mb-2 text-red-800">
            lipstick
          </h5>
          <h5 className="inline-block break-words">
            LUSCIOUS COLOR, EXPLOSIVE SHINE. NOURISHED, FULLER-LOOKING LIPS.
          </h5>
          <button
            className="bg-black text-white active:bg-black font-bold uppercase text-base px-8 py-3
           shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            style={{ transition: "all .15s ease" }}
          >
            <Link
              to="/type/lipstick"
              className="text-white uppercase font-normal
             block  whitespace-no-wrap bg-transparent "
            >
              shop our lipstick
            </Link>
          </button>
        </div>
      </div>

      <div className="mb-5">
        <h3 className="text-center uppercase mb-5">Latest</h3>
        <div className="mb-6">
          {/* <CardContainer info={bronzer} /> */}
          <ShopAllCardContainer product={bronzer} makeupProduct={ layoutProductForBronzer}/>
        </div>
        <button
          className="bg-black text-white active:bg-black font-bold uppercase text-base px-8 py-3
           shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          type="button"
          style={{ transition: "all .15s ease" }}
        >
          <Link
            to="/type/bronzer"
            className="text-white uppercase font-normal
             block  whitespace-no-wrap bg-transparent "
          >
            shop our bronzer
          </Link>
        </button>
      </div>
      <div className="flex flex-col md:flex-row px-16 py-20 items-center uppercase ">
        <div className="w-1/3">
          <img src="//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/153/original/open-uri20171223-4-snvley?1514062270" alt="eyeshadow" />
        </div>
        <div
          className="px-16 py-20 text-center box-border border-white bg-gradient-to-l
         md:bg-gradient-to-r from-yellow-400 via-red-200 to-blue-500"
        >
          <h2 className="text-5xl font-normal leading-normal mt-0 mb-2 text-pink-800">
            new
          </h2>
          <h5 className="text-4xl font-normal leading-normal mt-0 mb-2 text-red-800">
            lipstick
          </h5>
          <h5 className="inline-block break-words">
            LUSCIOUS COLOR, EXPLOSIVE SHINE. NOURISHED, FULLER-LOOKING LIPS.
          </h5>
          <button
            className="bg-black text-white active:bg-black font-bold uppercase text-base px-8 py-3
           shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            style={{ transition: "all .15s ease" }}
          >
            <Link
              to="/type/nail_polish"
              className="text-white uppercase font-normal
             block  whitespace-no-wrap bg-transparent "
            >
              shop our nail polish
            </Link>
          </button>
        </div>
      </div>
      <div>
        <Block info={newCart} />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;