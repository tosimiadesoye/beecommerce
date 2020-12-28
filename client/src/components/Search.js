import { useState, useEffect } from "react";
import AuthService from "../services/product";




const Search = ({ setProduct }) => {
  const [keyword, setKeyword] = useState("");
  
  const findMakeupItems = async (value) => {
    const result = await AuthService.findMakeup(value).then((res) => {
      if (res) {
        return setProduct(res.data.product);
      }
    });
    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    findMakeupItems(keyword);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} inline>
      <div>
           
            <input
            placeholder="Search…"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}

            />
        </div>
        <button type="submit">
          submit
        </button> 
      </form>
    </div>
  );
};

export default Search;
