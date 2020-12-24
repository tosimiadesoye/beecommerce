import { Link, useRouteMatch } from "react-router-dom";

const MakeupCard = ({ info }) => {
  let { path, url } = useRouteMatch();

  return (
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
          <button className="bg-gray-400 rounded-lg truncate">View item</button>
        </Link>
      </div>
      <div className="text-black text-gray-900 px-2 py-1 truncate ">
        <p className="truncate">{info.name}</p>
        <p>{`£ ${info.price}`}</p>
      </div>
    </div>
  );
};

export default MakeupCard;
