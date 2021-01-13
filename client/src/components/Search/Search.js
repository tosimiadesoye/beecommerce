import { useState } from "react";
import { findMakeup} from "../../services/product";
import PropTypes from "prop-types";
const Search = ({ searchProduct }) => {
 
  const [keyword, setKeyword] = useState("");

  const findMakeupItems = async (value) => {
    const result = await findMakeup(value).then((res) => {
      if (res) {
        return searchProduct(res.data.product);
      }
    });
    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    findMakeupItems(keyword);
  };
  return (
    <div className="container ">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Search…"
            className="placeholder-gray rounded-full border shadow-sm border-transparent h-10 w-40 p-3 border"
            value={keyword}
            type="text"
            aria-label="text"
            aria-required="true"
            onChange={(e) => setKeyword(e.target.value)}
          />

          <input
            className="rounded p-2 shadow-sm text-white bg-pink-900"
            type="submit"
            value="submit"
          />
        </div>
      </form>
    </div>
  );
};

Search.propTypes = {
  searchProduct: PropTypes.func.isRequired,
};
export default Search;
