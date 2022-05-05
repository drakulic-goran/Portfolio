import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import reactNative from "../images/react-native.jpg";
import react from "../images/react.jpg";
import spring from "../images/spring.jpeg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#354051",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const goTo = (e) => {
  var link = document.createElement('a');
  link.href = e;
  document.body.appendChild(link);
  link.click();
  return null;
};

const projects = [
  {
    name: "Elections Tracker Android App",
    description: `Elections Tracker android app is made to make your life easier with \
    monitoring election turnout and election results.\n
    Allows creating election processes, adding members who are in charge of updating \
    data at certain polling stations or only can see results if the elections were \
    created as private.\n
    It also allows sharing the collected results with all users of the app, \
    if the elections were created as public, and so on.\n
    Methodologies: Agile.\n
    Languages: JavaScript.\n
    Frameworks: React Native.\n
    DB: Firebase.\n
    Source control: GitHub.\n
    Issue tracking: Trello.`,
    image: reactNative,
    gitHub: "https://github.com/drakulic-goran/ElectionsTracker",
    liveDemo: "https://play.google.com/store/apps/details?id=rs.znasnekog.electionsTracker",
  },
  {
    name: "Delivery Assistant (POD) Android App",
    description: `Delivery Assistant (POD - Proof Of Delivery) android app is an app that \
    allows you to load parcels data from csv file (must be called "deliveryList.csv") located \
    on the device (works completely offline), as well as filling in the delivery data in that \
    file (collected signature file name, date and time of parcel processing, note and delivery \
    status code), while saving the signature image files in the same directory on the device \
    where the initial file with parcels data is located.\n
    It is recommended that you place the "deliveryList.csv" file in the folder you created \
    on the device for this purpose only, as the application will store the signature images \
    in the same folder in addition to adding the necessary data to the "deliveryList.csv" file.\n
    For the folder where the "deliveryList.csv" file is located, before using the application, \
    you must allow the application to use that folder and all content in it.\n
    Methodologies: Agile.\n
    Languages: JavaScript.\n
    Frameworks: React Native.\n
    Source control: GitHub.\n
    Issue tracking: Trello.`,
    image: reactNative,
    gitHub: "https://github.com/drakulic-goran/Deliverer",
    liveDemo: "https://play.google.com/store/apps/details?id=rs.znasnekog.deliverer",
  },
  {
    name: "Stickers Albums Android App",
    description: `Stickers Albums android app is made to make your life easier with \
    creating Stickers albums, tracking collected stickers and duplicates at one place.\n
    Methodologies: Agile.\n
    Languages: JavaScript.\n
    Frameworks: React Native.\n
    Source control: GitHub.\n
    Issue tracking: Trello.`,
    image: reactNative,
    gitHub: "https://github.com/drakulic-goran/StickersAlbums",
    liveDemo: "https://play.google.com/store/apps/details?id=rs.znasnekog.stickersAlbums",
  },
  {
    name: "Racing Pigeons Android App",
    description: `Racing Pigeons android app is made to make your life easier with calculation \
    of average pigeon flight speed, tracking pigeons results and getting Weather forecast.\n
    Unregistered users can calculate the average flight speed for two pigeons at the same time and \
    follow the hourly and daily weather forecast for several days in advance, as well as to have an \
    insight into the best average flight speed entered into the Racing Pigeons app by any user.\n
    In addition to the above-mentioned functionalities, registered users can also keep records of \
    their pigeons and their average flight speeds with the distances and the flying times.\n
    Methodologies: Agile.\n
    Languages: JavaScript.\n
    Frameworks: React Native.\n
    DB: Firebase.\n
    Source control: GitHub.\n
    Issue tracking: Trello.`,
    image: reactNative,
    gitHub: "https://github.com/drakulic-goran/Pigeonster",
    liveDemo: "https://play.google.com/store/apps/details?id=rs.znasnekog.pigeonster",
  },
  {
    name: "Waitron Android App",
    description: `Waitron android app is made to make your life easier with ordering in a \
    restaurant, cafe, bar, pub, etc.\n
    You can order food and/or drinks, quickly and easy, without waiting for the waiter to \
    pick up your order. Simply scan the QR code on the table of the restaurant, cafe, bar, \
    pub, etc., and send the order immediately.\n
    If You are the owner or manager of a restaurant, cafe, bar, pub, etc., create that business \
    in the Waitron app, place printed QR codes on the tables and wait for \
    guests to send a new orders to all active waiters.\n
    Methodologies: Agile.\n
    Languages: JavaScript.\n
    Frameworks: React Native.\n
    DB: Firebase.\n
    Source control: GitHub.\n
    Issue tracking: Trello.`,
    image: reactNative,
    gitHub: "https://github.com/drakulic-goran/Waitron",
    liveDemo: "https://play.google.com/store/apps/details?id=rs.znasnekog.waitron",
  },
  {
    name: "WhatsDone Android App",
    description: `Every day you have to ask household/family members and/or colleagues what needs\
     to be done or what is being done at home and/or at work, or what to buy on the way home and/or to work?\n
    Yeah, What’s Done android app is made to make your life easier with these things.\n
    Create or review To Do tasks in What’s Done android app every day, so it will never happen\
     that some To Do tasks are not done because others thought someone else would do it, or that\
      you come home without something from the store and have to go back to the store.\n
    Methodologies: Agile.\n
    Languages: JavaScript.\n
    Frameworks: React Native.\n
    DB: Firebase.\n
    Source control: GitHub.\n
    Issue tracking: Trello.`,
    image: reactNative,
    gitHub: "https://github.com/drakulic-goran/WhatsDone",
    liveDemo: "https://play.google.com/store/apps/details?id=rs.znasnekog.whats_done",
  },
  {
    name: "Jobster Web App",
    description: `Web-App for searching and offering part-time and full-time jobs.\n
    Adding and browsing job offers and job seeks by exact date period, exact days in a \
    week for selected date period and exact hours period in every selected day.\n
    Live demo is very basic FE version of the application without backend, in a raw stage, \
    without functionalities.\n
    Methodologies: Agile.\n
    Languages: Java, JavaScript.\n
    Frameworks: Spring, React.\n
    DB: MySQL.\n
    Source control: GitHub.\n
    Issue tracking: Trello, Slack.`,
    image: spring,
    gitHub: "https://github.com/3click-jobs/jobster",
    liveDemo: "https://znasnekog.netlify.app/",
  },
  {
    name: "Portfolio Web site",
    description: `Portfolio Web site (FE) for self promotion and contact with clients.\n
    It is created in React, data can change over time without reloading the \
    page and it have responsive layout.\n
    Methodologies: Agile.\n
    Languages: JavaScript.\n
    Frameworks: React.\n
    Toolkits: Material-UI, React Router, Emailjs.\n
    Source control: GitHub.`,
    image: react,
    gitHub: "https://github.com/drakulic-goran/portfolio",
    liveDemo: "https://portfoliogd.netlify.app/",
  },
  {
    name: "Bookkeeping-Accounting-Audit Web site",
    description: `Web site (FE) for bookkeepers, accountants and auditors, \
    for promoting their services and contact with clients.\n
    It is created in React, data can change over time without reloading the \
    page and it have responsive layout.\n
    Methodologies: Agile.\n
    Languages: JavaScript.\n
    Frameworks: React.\n
    Toolkits: Bootstrap, React Bootstrap, React Router, Emailjs.\n
    Source control: GitHub.`,
    image: react,
    gitHub: "https://github.com/drakulic-goran/Bookkeeping-Accounting-Audit",
    liveDemo: "https://bookkeeping-accounting-audit.netlify.app/",
  },
  {
    name: "SandwichBuilder Web site",
    description: `Ordering sandwich for promotional meetings in Serbia.\n
    Methodologies: Agile.\n
    Languages: JavaScript.\n
    Frameworks: React.\n
    DB: Firebase.\n
    Toolkits: React Router.\n
    Source control: GitHub.`,
    image: react,
    gitHub: "https://github.com/drakulic-goran/SandwichBuilder",
    liveDemo: "https://sandwichBuilder.netlify.app/",
  },
  {
    name: "e-SchoolRegister Web App",
    description: `Web application (BE and FE) for Teachers, Parents, Students and Grades managenemt, \
    with all operations which are necessary in any school.\n
    Backend is created in Spring/Hibernate, with basic security, joined table inheritance strategy, \
    validation, corse, logging, download log file and automaticaly sending e-mails to parents. Using MySQL database.\n
    Frontend is created in React, data can change over time without reloading the page and it have responsive layout.\n
    Live demo is very basic FE version of the application without backend, in a raw stage, without functionalities.\n
    Languages: Java, JavaScript.\n
    Frameworks: Spring, React.\n
    DB: MySQL.\n
    Source control: GitHub.`,
    image: spring,
    gitHub: "https://github.com/drakulic-goran/e-SchoolRegister",
    liveDemo: "https://e-school-register.netlify.app/",
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Grid container justify="center">
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={project.name}
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" align="justify" color="textSecondary">
                    {project.description.split("\n").map((i, key) => {
                      return <p key={key}>{i}</p>;
                    })}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={() => goTo(project.gitHub)} >
                  GitHub
                </Button>
                <Button size="small" color="primary" onClick={() => goTo(project.liveDemo)} >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Portfolio;
