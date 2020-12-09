import { useEffect, useState } from 'react';
import UserService from '../../services/user';


const BoardUser = () => {
    const [content, setContent] = useState("");
 
  useEffect(() => {
        UserService.getUserBoard().then(
          (response) => {
            console.log(response)
            // setContent(response.data);
          },
          (error) => {
            console.log(error.response)
            const _content =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
    
            setContent(_content);
          }
        );
      }, []);
    
    return (
        <div>
           {/* <header className="jumbotron">
        <h3>{content}</h3>
      </header>  */}
        </div>
    )
}

export default BoardUser
