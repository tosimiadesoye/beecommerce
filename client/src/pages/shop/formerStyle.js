import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root: {
    flexGrow: 1,
    
    },
  container: {
       border: '1px solid black',
      textAlign: "center",
      // color: theme.palette.text.secondary,
    width: '100%',
    height: '70%',
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(20),
     maxWidth: 100,
      
    },
  width: {
      maxWidth: 100,
      
      // backgroundColor: "#f3e5f5"
    },
    media: {
      height: 100,
      paddingTop: "100%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    text: {
      boxShadow: "0 0 10px 0",
      borderRadius: "1px",
    },
  }));
export default useStyles  