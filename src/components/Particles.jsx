import React from "react";
import { Particles as ReactParticles } from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";

import reactLogo from "../images/react-svg.png";
import reactNativeLogo from "../images/react-native-svg.png";
import hibernateLogo from "../images/hibernate-svg.png";
import springLogo from "../images/spring-svg.png";
import bootstrapLogo from "../images/bootstrap-svg.png";
import cssLogo from "../images/css-svg.png";
import htmlLogo from "../images/html-svg.png";
import javaLogo from "../images/java-svg.png";
import javascriptLogo from "../images/javascript-svg.png";
import materialuiLogo from "../images/materialui-svg.png";
import mavenLogo from "../images/maven-svg.png";
import reactRouterLogo from "../images/react-router-svg.png";
import reduxLogo from "../images/redux-svg.png";


const useStyles = makeStyles((theme) => ({
  particlesCanvas: {
    position: "fixed",
    opacity: "0.3"
  },
}));

const Particles = () => {
  const classes = useStyles();

  return (
    // <ReactParticles
    //   canvasClassName={classes.particlesCanvas}
    //   params={{
    //     particles: {
    //       number: {
    //         value: 45,
    //         density: {
    //           enable: true,
    //           value_area: 800,
    //         },
    //       },
    //       shape: {
    //         type: "circle",
    //         stroke: {
    //           width: 1,
    //           color: "tomato",
    //         },
    //       },
    //       size: {
    //         value: 8,
    //         random: true,
    //         anim: {
    //           enable: false,
    //           speed: 6,
    //           size_min: 0,
    //           sync: true,
    //         },
    //       },
    //       opacity: {
    //         value: 0.5,
    //         random: true,
    //         anim: {
    //           enable: true,
    //           speed: 1,
    //           opacity_min: 0.1,
    //           sync: false,
    //         },
    //       },
    //     },
    //   }}
    // />
    <ReactParticles
      canvasClassName={classes.particlesCanvas}
      params={{
        "particles": {
          "number": {
            "value": 8,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "line_linked": {
            "enable": false
          },
          "move": {
            "speed": 1,
            "out_mode": "out"
          },
          "shape": {
            "type": [
              "image",
              // "circle"
            ],
            "image": [
              {
                "src": reactLogo,
                "height": 20,
                "width": 23
              },
              {
                "src": reactNativeLogo,
                "height": 20,
                "width": 20
              },
              {
                "src": hibernateLogo,
                "height": 20,
                "width": 20
              },
              {
                "src": springLogo,
                "height": 20,
                "width": 20
              },
              {
                "src": bootstrapLogo,
                "height": 20,
                "width": 20
              },
              {
                "src": cssLogo,
                "height": 20,
                "width": 20
              },
              {
                "src": htmlLogo,
                "height": 20,
                "width": 20
              },
              {
                "src": javaLogo,
                "height": 20,
                "width": 20
              },
              {
                "src": javascriptLogo,
                "height": 20,
                "width": 20
              },
              {
                "src": materialuiLogo,
                "height": 20,
                "width": 20
              },
              {
                "src": mavenLogo,
                "height": 20,
                "width": 20
              },
              {
                "src": reactRouterLogo,
                "height": 20,
                "width": 20
              },
              {
                "src": reduxLogo,
                "height": 20,
                "width": 20
              }
            ]
          },
          "color": {
            "value": "#CCC"
          },
          "size": {
            "value": 30,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 4,
              "size_min": 10,
              "sync": false
            }
          }
        },
        "retina_detect": false
      }} />

  );
};

export default Particles;