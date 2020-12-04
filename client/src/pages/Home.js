import { useState, useEffect } from 'react';
import UserServices from "../services/user";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserServices.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);
    return (
      <div>
        <h1>{ content}</h1>
      </div>
    );
  };
  
  export default Home;