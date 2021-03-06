import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Img from 'react-cool-img'
const ProductCard = ({ info }) => {
 
  return (
    <>
      
      <div
        className=" py-6 md:py-8 
      place-content-center
       flex flex-row items-center mx-5 my-5 border-0 border-white bg-gray-300 h-4/6 "
      >
        <div>
          <Img
            alt={info.name}
            src={info.api_featured_image}
            className="shadow w-24 object-scale-down"
            sizes={[400]}
          />
        </div>
        <div className="text-black text-gray-900 space-x-4 px-2 py-1">
          <p className="break-words">{info.name}</p>

          <p>{`${info.price_sign} ${info.price}`}</p>
          <Link
            to={{
              pathname: `/:slug/${info._id}`,
              state: { itemData: info },
            }}
          >
            <button
              className="bg-yellow-50 text-black active:bg-yellow-60 font-bold uppercase
                 text-sm px-6 py-3 rounded shadow-sm hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              style={{ transition: "all .15s ease" }}
            >
              View item
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

ProductCard.propTypes = {
  info: PropTypes.exact({
    api_featured_image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string,
    _id: PropTypes.string.isRequired,
    product_colors: PropTypes.array.isRequired,
    category: PropTypes.string,
    brand: PropTypes.string,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    product_type: PropTypes.string,
    image_link: PropTypes.string,
    item_available: PropTypes.number,
    price_sign: PropTypes.string,
    currency:PropTypes.string
  }),
};
export default ProductCard;
