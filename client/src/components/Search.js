import { useState, useEffect } from "react";
import AuthService from "../services/product";
import { fade, makeStyles } from '@material-ui/core/styles';
// import Form from "react-bootstrap/Form";
 import Button from "@material-ui/core/Button";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


const useStyles = makeStyles((theme) => ({
 
 

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  
}));



const Search = ({ setProduct }) => {
  const [keyword, setKeyword] = useState("");
  const classes = useStyles();
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
      <form onSubmit={handleSubmit} inline>
      <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
            placeholder="Search…"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
        </div>
        <Button variant="primary" type="submit">
          submit
        </Button> 
      </form>
    </div>
  );
};

export default Search;
