import {
  BrowserRouter,
  Route,
  useRouteMatch,
  Switch,
  Link,
} from "react-router-dom";
import PropTypes from "prop-types";
import IndividualItem from "./IndividualItem";
const ProductCard = ({ info, addToCart }) => {
  let { url,path, } = useRouteMatch();
  console.log(url);

  return (
    <BrowserRouter>
    
      <div className="py-8 place-content-center flex flex-row mx-5 my-5 border-0 shadow border-white rounded">
        <div>
          <img
            alt={info.name}
            style={{ width: "5rem" }}
            src={info.api_featured_image}
            className="pb-2"
          />
          <Link
            to={{
              pathname: `${url}/${info._id}`,
              state: { itemData: info },
            }}
          >
            <button className="bg-gray-400 rounded-lg truncate">
              View item
            </button>
          </Link>
        </div>
        <div className="text-black text-gray-900 px-2 py-1 truncate ">
          <p className="truncate">{info.name}</p>
          <p>{`£ ${info.price}`}</p>
        </div>
      </div>
     

      <Switch>
        <Route
          exact
          path={`${path}/:_id`}
          render={({ match }) => (
            <IndividualItem {...match} addToCart={addToCart} />
          )}
        />
      </Switch>
    </BrowserRouter>
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
