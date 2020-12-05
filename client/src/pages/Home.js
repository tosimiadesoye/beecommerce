import { useState, useEffect } from 'react';
import UserServices from "../services/user";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    
    UserServices.getPublicContent().then(
      (response) => {
        console.log(response)
         console.log(response.data)
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
        <h2>{ content}</h2> 
      </div>
    );
  };
  
  export default Home;