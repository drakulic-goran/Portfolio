import React, { useState } from 'react';
import emailjs from 'emailjs-com';
// import Modal from '@material-ui/core/Modal';
// import Backdrop from '@material-ui/core/Backdrop';
// import Fade from '@material-ui/core/Fade';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import isEmail from 'validator/lib/isEmail';
import LinearProgress from '@material-ui/core/LinearProgress';
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
  cssLabel: {
    color: "white",
    "&.Mui-focused": {
      color: "#3d6bb3"
    },
  },
  input: {
    color: "white"
  },
  contactBtn: {
    display: 'flex',
    marginBottom: '20px',
    marginTop: '20px',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  errorMessage: {
    borderLeft: '10px solid #A80202',
    background: '#EBEBEB80',
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  successMessage: {
    borderLeft: '10px solid #558B2F',
    background: '#EBEBEB80',
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  // modal: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // paper: {
  //   backgroundColor: theme.palette.background.paper,
  //   width: "80%",
  //   maxWidth: "800px",
  //   border: '2px solid #000',
  //   boxShadow: theme.shadows[5],
  //   padding: theme.spacing(2, 4, 3),
  // },
}));


const Contact = () => {

  const [data, setData] = useState({
    name: '',
    message: '',
    email: '',
    errorMessage: null,
    successMessage: null,
    messageAlreadySent: false,
    loading: false
  });
  // const [modalShow, setModalShow] = useState(false);

  const classes = useStyles();

  const validateString = (str) => {
    if (!str || str < 1)
      return false;
    return true;
  };

  const validateForm = () => {
    if (!validateString(data.name))
      throw new Error('Please enter your name.');
    if (!isEmail(data.email))
      throw new Error('Please enter a valid e-mail address.');
    if (!validateString(data.message))
      throw new Error('Please enter a message.');
  }

  const onSubmit = async () => {
    setData(prevState => ({
      ...prevState,
      successMessage: null,
      errorMessage: null
    }));
    displayLoadingBar();
    try {
      if (data.messageAlreadySent)
        throw new Error('Your message has been already sent.');
      validateForm();
      await submitData();
      setData(prevState => ({
        ...prevState,
        successMessage: 'Your message has been sent.',
        messageAlreadySent: true
      }));
    } catch (err) {
      setData(prevState => ({
        ...prevState,
        errorMessage: err.toString(),
        successMessage: null
      }));
    }
    displayLoadingBar(false);
  }

  const submitData = async () => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        message: data.message
      };
      await emailjs.send(
        'service_accounting',
        'template_portfolio',
        templateParams,
        'user_ZMnT7Tuz3vqiIbTqY3MIs'
      );
      setData({
        name: '',
        message: '',
        email: '',
        errorMessage: null,
        successMessage: null,
        messageAlreadySent: false,
        loading: false
      });
      // setModalShow(true);
    } catch (e) {
      console.log(e);
      setData(prevState => ({
        ...prevState,
        errorMessage: e.toString(),
        loading: false
      }));
    }
  };

  const onUpdateField = (field, event) => {
    setData(prevState => ({
      ...prevState,
      [field]: event.target.value
    }));
  }

  const displayLoadingBar = (to = true) => {
    setData(prevState => ({
      ...prevState,
      loading: to
    }));
  }

  return (
    <div className={classes.contact}>
      <Box component="div" className={classes.contactContainer}>
        <Grid container justify="center">
          <Box component="form" className={classes.form}>
            <Typography variant="h5" className={classes.heading}>
              Write me a message:
            </Typography>
            <CssTextField
              required
              id="custom-css-outlined"
              label="Name"
              className={classes.textField}
              InputProps={{
                className: classes.input,
              }}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }
              }}
              onChange={e => onUpdateField('name', e)}
              variant="outlined"
            />
            <CssTextField
              required
              id="custom-css-outlined"
              label="E-mail"
              // value={data.email}
              className={classes.textField}
              InputProps={{
                className: classes.input,
              }}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }
              }}
              onChange={e => onUpdateField('email', e)}
              variant="outlined"
            />
            <CssTextField
              required
              id="custom-css-outlined-multiline-static"
              label="Your message"
              multiline
              rows={4}
              // value={data.message}
              className={classes.textField}
              InputProps={{
                className: classes.input,
              }}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }
              }}
              onChange={e => onUpdateField('message', e)}
              variant="outlined"
            />
            {
              data.errorMessage != null && <p className={classes.errorMessage} > {data.errorMessage}</p >
            }
            {
              data.successMessage != null && <p className={classes.successMessage} > {data.successMessage}</p >
            }
            {
              data.loading &&
              <LinearProgress mode="indeterminate" color="#A80202" />
            }
            <div className={classes.contactBtn} >
              <Button variant="contained" onClick={onSubmit} color="primary" >Send message</Button>
            </div >
          </Box>
        </Grid>
      </Box>
      {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modalShow}
        onClose={() => setModalShow(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalShow}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Hvala Vam za interesovanje</h2>
            <p id="transition-modal-description">Vaše poruka će biti razmotrena u najkraćem mogućem vremenskom roku i odgovor na istu će Vam biti prosleđen.</p>
          </div>
        </Fade>
      </Modal> */}
    </div >
  );
}

export default Contact;