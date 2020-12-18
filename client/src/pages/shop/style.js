import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(8),
      textAlign: "center",
      color: theme.palette.text.secondary,
      marginLeft: theme.spacing(7),
      MarginRight: theme.spacing(0),
      borderRadius: '10px',
      // maxWidth: 300,
      
    },
  width: {
      maxWidth: 200,
      
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