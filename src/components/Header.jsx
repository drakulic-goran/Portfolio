import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";

const useStyles = makeStyles((theme) => ({
  avatar: {
    background: "white",
    border: "0.1rem solid grey",
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    // background: "white",
    // border: "0.1rem solid grey",
    color: "white",
    width: theme.spacing(40),
    margin: theme.spacing(1),
  },
  subtitle: {
    // background: "white",
    // border: "0.1rem solid grey",
    color: "tan",
    textTransform: "uppercase",
    width: theme.spacing(40),
    margin: theme.spacing(1),
  },
  typedContainer: {
    // background: "grey",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    // minWidth: "350px",
    // borderRadius: "5%",
    textAlign: "center",
    // alignItems: 'center',
    // flex: 1,
    // justifyContent: 'center',
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Goran Drakulić" />
      </Grid>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography className={classes.title} variant="h4">
          <Typed strings={["Goran Drakulić"]} typeSpeed={40} />
        </Typography>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography className={classes.subtitle} variant="h5">
          <Typed
            strings={[
              "Full Stack Developer",
              "Native App Developer",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </Typography>
      </div>
    </Box>
  );
};

export default Header;