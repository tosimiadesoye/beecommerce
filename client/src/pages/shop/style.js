import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  sizes: {
    width: '50%',
  '@media (min-width: 780px)' : {
     width: '20%',
    height: '1%',
    margin: '15px',
    // 
  }
   },
  root: {
    flexGrow: 1,
    
    },
   container: {
      // border: '1px solid black',
       textAlign: "center",
       color: theme.palette.text.secondary,
     width: '100%',
     height: '100%',
      boxShadow: "0 0 10px 0",
      // borderRadius: "1px",
 
     },

  rating: {
    marginLeft: '100px',
    marginRight: '50px'
    }
  
  }));
export default useStyles  