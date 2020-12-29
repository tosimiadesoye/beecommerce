import { Link } from "react-router-dom";

const ProductCard = ({ info }) => {
  return (
    <>
      <div className=" py-8 place-content-center flex flex-row mx-5 my-5 border-0 shadow border-white rounded truncate">
        <div>
          <img
            alt={info.name}
            style={{ width: "5rem" }}
            src={info.api_featured_image}
            className="pb-2"
          />
          <Link
            to={{
              pathname: `/:slug/${info._id}`,
              state: { itemData: info },
            }}
            className="text-black"
          >
            <div>
              <button
                className="shadow-sm p-2 rounded-sm bg-blue-300 truncate border border-transparent 
                "
              >
                View item
              </button>
            </div>
          </Link>
        </div>
        <div className="text-black text-gray-900 space-x-4 px-2 py-1 truncate">
          <p className="truncate">{info.name}</p>
          <p>{`£ ${info.price}`}</p>
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
