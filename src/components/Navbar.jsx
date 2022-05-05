import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
// import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
// import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import PolicyIcon from '@material-ui/icons/Policy';
import ShieldIcon from '@material-ui/icons/Policy';
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";

import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    background: "#354051",
    margin: 0,
  },
  menu: {
    color: "white",
    // fontSize: "large",
  },
  title: {
    color: "white",
  },
  menuSliderContainer: {
    width: 250,
    background: "#354051",
    height: "100%",
  },
  avatar: {
    background: "white",
    border: "0.1rem solid white",
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "white",
  },
}));

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <AssignmentInd />, listText: "Jobs", listPath: "/resume" },
  { listIcon: <Apps />, listText: "Projects", listPath: "/portfolio" },
  { listIcon: <CastForEducationIcon />, listText: "Education", listPath: "/education" },
  { listIcon: <PolicyIcon />, listText: "Privacy policy", listPath: "/privacy" },
  { listIcon: <ShieldIcon />, listText: "Terms & Condittions", listPath: "/terms" },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];

export const Navbar = () => {

  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const sideList = () => (
    <div className={classes.menuSliderContainer} component="div">
      <Avatar className={classes.avatar} src={avatar} alt="Goran Drakulić" />
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const goTo = (e) => {
    var link = document.createElement('a');
    link.href = e;
    document.body.appendChild(link);
    link.click();
    return null;
  };


  return (
    <React.Fragment>
      <div className={classes.root}>
        {/* <Box component="nav"> */}
        <AppBar className={classes.appbar} position="sticky" >
          <Toolbar>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon className={classes.menu} fontSize="large" />
            </IconButton>
            {/* <Typography variant="h5" className={classes.title}>
              Portfolio
            </Typography> */}
          </Toolbar>
        </AppBar>
        {/* </Box> */}
      </div>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        {sideList()}
        <Footer openHandler={setOpen} to={goTo} />
      </Drawer>
    </React.Fragment>
  );
};

export default withRouter(Navbar);
