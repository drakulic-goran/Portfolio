import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "white",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "#354051",
      "&:hover": {
        fill: "red",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = (props) => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer} showLabels >
      <BottomNavigationAction icon={<Facebook />} className={classes.root} label='Facebook' onClick={() => { props.openHandler(false); props.to('https://www.facebook.com/drakulic82/'); }} />
      <BottomNavigationAction icon={<LinkedIn />} className={classes.root} label='LinkedIn' onClick={() => { props.openHandler(false); props.to('https://linkedin.com/in/goran-drakulic-742ab438/'); }} />
      <BottomNavigationAction icon={<GitHub />} className={classes.root} label='GitHub' onClick={() => { props.openHandler(false); props.to('https://github.com/drakulic-goran'); }} />
    </BottomNavigation>
  );
};
export default Footer;