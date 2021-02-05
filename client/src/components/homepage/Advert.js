import React from "react";
import Img from "react-cool-img";
import { Link } from "react-router-dom";
const AdvertContainer = ({ advert }) => {
  return (
    <div className="flex flex-col text-center md:flex-row items-stretch px-12 uppercase justify-center">
      <div key={advert.text2}>
        <Img
          className="md:max-h-42 lg:max-h-96"
          src={advert.image}
          alt={advert.text2}
          sizes={[400]}
        />
      </div>
      <div className={"md:px-16 text-center" + advert.gradient}>
        <h2 className="text-5xl font-normal leading-normal mt-0 mb-2 text-pink-800">
          {advert.text1}
        </h2>
        <h4
          className={
            "text-3xl font-normal leading-normal mt-0 mb-2" +
            advert.secondHeadingColor
          }
        >
          {advert.text2}
        </h4>
        <h5 className="text-2xl font-normal leading-normal inline-block break-words">
          {advert.text3}
        </h5>
        <Link
          to={advert.linkTo}
          className="bg-black text-white active:bg-black font-bold uppercase text-base px-8 py-3
           shadow-md hover:shadow-lg outline-none focus:outline-none mt-3 mb-3"
          type="button"
          style={{ transition: "all .15s ease" }}
        >
          {advert.linkText}
        </Link>
      </div>
    </div>
  );
};

export default AdvertContainer;
