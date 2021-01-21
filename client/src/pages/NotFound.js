import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex flex-col container text-center my-20 items-center justify-center">
      <h1>Page Not Found</h1>
      <p>We're sorry, we couldn't find the page you requested.</p>
      <Link
        to="/home"
        className="bg-black text-white active:bg-black font-bold uppercase text-base px-8 py-3
           shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
      >
        Go to home
      </Link>
    </div>
  );
};

export default NotFound;
