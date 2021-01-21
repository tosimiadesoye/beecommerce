import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex flex-col gap-4 text-center md:flex-row bg-black mt-10 text-gray-500 items-center md:space-x-20 uppercase">
      <div className='mr-10'>
        <p>Developer/Author: Tosimi Adesoye</p>
        <p>
          contact me:
          <a className="text-gray-500  hover:black" href="mailto:tosimiadesoye111@gmail.com" target="_blank" rel="noreferrer">
            {" "}
            tosimiadesoye111@gmail.com
          </a>
        </p>
        <p>&copy; tosimi</p>
      </div>
      <div>
        <Link className="text-gray-500 mr-10 hover:black" to="/contact">
          Contact customer support
        </Link>
        <Link className="text-gray-500 mr-10  hover:black" to="/shop">
          shop
        </Link>
        <p>portfolio link</p>
      </div>

      <div>
        {" "}
        <p>
          <a className="text-gray-500" href="https://github.com/tosimiadesoye" target="_blank" rel="noreferrer">
            github
          </a>
        </p>
        <p>
          <a className="text-gray-500" href="https://twitter.com/tosimiadesoye" target="_blank" rel="noreferrer">
            twitter
          </a>
        </p>
        <p>
          <a
            className="text-gray-500"
            href="https://www.linkedin.com/in/tosimi-adesoye/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
