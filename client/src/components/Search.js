import { useState, useEffect } from "react";
import AuthService from "../services/product";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const Search = ({ setProduct }) => {
  const [keyword, setKeyword] = useState("");

  const findMakeupItems = async (value) => {
    const result = await AuthService.findMakeup(value).then((res) => {
      if (!res.error) {
        console.log(res.data.product);
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
      <Form onSubmit={handleSubmit} inline>
        <Form.Group controlId="searchKeyword">
          <Form.Label>Enter Search</Form.Label>
          <Form.Control
            type="keyword"
            placeholder="Enter keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          submit
        </Button>
      </Form>
    </div>
  );
};

export default Search;
