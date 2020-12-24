import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthService from "../../../services/auth";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import MoreIcon from "@material-ui/icons/MoreVert";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import useStyles from "../style.js";
import SvgIcon from "@material-ui/core/SvgIcon";
import makeupService from "../../../services/product";

const Navigation = ({ makeupType, setProduct }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const classes = useStyles();

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const findMakeupItems = async (value) => {
    const result = await makeupService.findMakeup(value).then((res) => {
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

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const ITEM_HEIGHT = 48;

  const logOut = () => {
    AuthService.logout();
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileIconMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  function HomeIcon(props) {
    return (
      <>
        <SvgIcon {...props}>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
      </>
    );
  }
  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <Link color="inherit">shop</Link>
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          <Link to="/shop">Shop all</Link>
          {makeupType.map((type, idx) => (
            <MenuItem
              key={idx}
              selected={type === "Pyxis"}
              onClick={handleClose}
            >
              <Link to={`/type/${type}`}>{type}</Link>
            </MenuItem>
          ))}
        </Menu>
        <Link to="/home">
          <HomeIcon />
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/cart">
          <AddShoppingCartIcon />
        </Link>
      </MenuItem>

      <MenuItem>
        {/* if you can access user.username - nav should logout else it should be login or sign up */}
        {currentUser ? (
          <div>
            <div>
              <Link to={"/profile"} className="nav-link">
                <AccountCircle />
                {currentUser.username}
              </Link>
            </div>
            <div>
              <a href="/login" className="nav-link" onClick={logOut}>
                Logout
              </a>
            </div>
          </div>
        ) : (
          <div className="Navigation-nav ml-auto">
            <div>
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </div>

            <div>
              <Link to={"/signup"} className="nav-link">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </MenuItem>
    </Menu>
  );
  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>

          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/">Logo</Link>
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
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
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
              <Button variant="primary" type="submit">
                submit
              </Button>
            </form>

            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <Link color="inherit">shop</Link>
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              <Link to="/shop">Shop all</Link>
              {makeupType.map((type, idx) => (
                <MenuItem
                  key={idx}
                  selected={type === "Pyxis"}
                  onClick={handleClose}
                >
                  <Link to={`/type/${type}`}>{type}</Link>
                </MenuItem>
              ))}
            </Menu>
            <IconButton color="inherit">
              <Link to="/home">Home</Link>
            </IconButton>
            <IconButton color="inherit">
              <Link to="/cart">
                <AddShoppingCartIcon />
              </Link>
            </IconButton>

            <IconButton>
              {/* if you can access user.username - nav should logout else it should be login or sign up */}
              {currentUser ? (
                <div>
                  <div>
                    <Link to={"/profile"}>
                      <AccountCircle />
                      {currentUser.username}
                    </Link>
                  </div>
                  <div>
                    <a href="/login" onClick={logOut}>
                      Logout
                    </a>
                  </div>
                </div>
              ) : (
                <div>
                  <Link to={"/login"}>Login</Link>
                  <Link to={"/signup"}>Sign Up</Link>
                </div>
              )}
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};

export default Navigation;
