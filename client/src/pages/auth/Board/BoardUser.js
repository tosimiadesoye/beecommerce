import UserService from '../../../services/auth';


const BoardUser = () => {
    const [content, setContent] = useState("");
    useEffect(() => {
        UserService.getUserBoard().then(
          (response) => {
            setContent(response.data);
          },
          (error) => {
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
           <header className="jumbotron">
        <h3>{content}</h3>
      </header> 
        </div>
    )
}

export default BoardUser
