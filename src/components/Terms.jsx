import React, { useState } from 'react';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from "@material-ui/core/styles";


const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#3d6bb3',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#3d6bb3',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: '#00e5ff',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#3d6bb3',
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  contact: {
    width: "100%",
    height: "100%",
    background: "#354051",
  },
  contactContainer: {
    color: "white",
    // background: "#354051",
    // height: "100vh",
    position: "relative",
    padding: "1em 2em 40em 2em",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    // padding: "10px",
  },
  heading: {
    color: "white",
    textAlign: "center",
    // textTransform: "uppercase",
    marginBottom: "1rem",
  },
  textField: {
    width: "100%",
    marginTop: "20px",
    floatingLabelFocusStyle: {
      color: "white"
    },
  },
}));


const Terms = () => {

  const classes = useStyles();

  return (
    <div className={classes.contact}>
      <Box component="div" className={classes.contactContainer}>
        <Grid container justify="center">
          <Box component="form" className={classes.form}>
            <Typography variant="h5" className={classes.heading}>
              Write me a message:
            </Typography>
            
          </Box>
        </Grid>
      </Box>
    </div >
  );
}

export default Terms;
