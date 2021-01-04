import { Link } from "react-router-dom";

const ProductCard = ({ info }) => {
  return (
    <>
      <div
        className=" py-6 md:py-8 
       place-content-center
       flex flex-row mx-5 my-5 border-0 border-white bg-gray-300 rounded truncate"
      >
        <div>
          <img
            alt={info.name}
            style={{ width: "6rem" }}
            src={info.api_featured_image}
            className="shadow"
          />
        </div>
        <div className="text-black text-gray-900 space-x-4 px-2 py-1 inline-block break-words">
          <p className="truncate">{info.name}</p>
          <p>{`£ ${info.price}`}</p>
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
              style={{ transition: "all .15s ease"}}
            >
              View item
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

// ProductCard.propTypes = {
//   info: PropTypes.exact({
//     name:PropTypes.string.isRequired,
//     price:PropTypes.string.isRequired,
//     _id:PropTypes.object.isRequired,
//     api_featured_image:PropTypes.string.isRequired,
//   })
// }
export default ProductCard;
