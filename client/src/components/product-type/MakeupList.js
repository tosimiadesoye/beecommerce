import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import IndividualItem from "./IndividualItem";
import {
  BrowserRouter,
  Route,
  Switch,
  useRouteMatch,
  Link,
} from "react-router-dom";

const MakeupList = (props) => {
  const { type, params, addToCart, makeup_type, productType } = props;
  let { path, url } = useRouteMatch();
  console.log(props)
  useEffect(() => {
    productType(type);
  }, [type]);
  return (
    <BrowserRouter>
      {makeup_type && (
        <div className="grid grid-cols-3 gap-4">
          {makeup_type.map((type) => {
            if (params.slug === type.product_type) {
              return (
                <div
                  key={type._id}
                  className="py-8 place-content-center flex flex-row mx-5 my-5 border-0 shadow border-white rounded"
                >
                  <div>
                    <img
                      className="pb-2"
                      alt={type.name}
                      style={{ width: "5rem" }}
                      src={type.api_featured_image}
                    />
                    <Link
                      to={{
                        pathname: `${url}/${type._id}`,
                        state: { itemData: type },
                      }}
                    >
                      <button className="bg-gray-400 rounded-lg truncate">
                        View item
                      </button>
                    </Link>
                  </div>
                  <div className="text-black text-gray-900 px-2 py-1 truncate ">
                    <p className="truncate">{type.name}</p>
                    <p>{`£ ${type.price}`}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      )}
      <>
        <>
          <Route
            exact
            path={`${path}/:_id`}
            render={({ match }) => (
              <IndividualItem {...match} type={type} addToCart={addToCart} />
            )}
          />
        </>
      </>
    </BrowserRouter>
  );
};
export default MakeupList;
