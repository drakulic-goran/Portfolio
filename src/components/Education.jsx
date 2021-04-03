import React, { useState } from 'react';
import { Card, CardHeader, CardContent, Chip, Collapse, IconButton } from '@material-ui/core';
import ExpandMore from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    timeline: {
        // flex: 1,
        // display: 'block',
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
        // margin: "1.5rem",
        justifyContent: 'center',
        alignItems: 'center',
        // maxWidth: '600px',
    },
    timelineEntry: {
        marginBottom: '10px',
        '&:lastOfType': {
            marginBottom: '0px',
        }
    },
    timelineEntryChip: {
        float: 'left',
        marginRight: '5px',
        marginBottom: '5px',
        display: 'inline-block',
    },
    timelineEntries: {
        display: 'inline-block',
        marginTop: '20px',
    },
}));


const Education = (props) => {

    const [expanded, setExpanded] = useState(false);
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);

    const classes = useStyles();


    const handleExpandChange = (exp) => {
        setExpanded(exp);
        if (exp === true) {
            setExpanded1(false);
            setExpanded2(false);
            setExpanded3(false);
        };
    };

    const handleExpandChange1 = (exp) => {
        setExpanded1(exp);
        if (exp === true) {
            setExpanded(false);
            setExpanded2(false);
            setExpanded3(false);
        };
    };

    const handleExpandChange2 = (exp) => {
        setExpanded2(exp);
        if (exp === true) {
            setExpanded1(false);
            setExpanded(false);
            setExpanded3(false);
        };
    };

    const handleExpandChange3 = (exp) => {
        setExpanded3(exp);
        if (exp === true) {
            setExpanded1(false);
            setExpanded2(false);
            setExpanded(false);
        };
    };


    return (
        <div className={classes.timeline}>
            <div className={classes.timelineEntry}>
                <Card>
                    <CardHeader
                        title="Electro-technician of computers"
                        subheader="Technical high school Sombor"
                        action={
                            <IconButton aria-label="settings" onClick={() => handleExpandChange(!expanded)}>
                                <ExpandMore />
                            </IconButton>
                        }
                    />
                    <Collapse in={expanded}>
                        <CardContent expandable={true}>
                            <p>1996 – 2000</p>
                            <p>
                                Maintaining of computer hardware; Administrating OS and computer networks; Programming in Pascal and C; Graduation work in 3D Studio Max; Electrical home installation design.
                            </p>
                            <br /><br />
                            <div className={classes.timelineEntries}>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="Pascal" />
                                </div>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="C" />
                                </div>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="3D Studio" />
                                </div>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="Electrical circuits" />
                                </div>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="PC Hardware" />
                                </div>
                            </div>
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
            <div className={classes.timelineEntry}>
                <Card>
                    <CardHeader
                        title="Master of Engineering - Postal and Telecommunications Engineering"
                        subheader="Faculty of Technical Sciences, University of Novi Sad"
                        action={
                            <IconButton aria-label="settings" onClick={() => handleExpandChange1(!expanded1)}>
                                <ExpandMore />
                            </IconButton>
                        }
                    />
                    <Collapse in={expanded1}>
                        <CardContent expandable={true}>
                            <p>200-205</p>
                            <p>

                            </p>
                            <br /><br />
                            <div className={classes.timelineEntries}>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="React" />
                                </div>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="React Native" />
                                </div>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="Javascript" />
                                </div>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="HTML" />
                                </div>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="CSS" />
                                </div>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="Spring" />
                                </div>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="Hibernate" />
                                </div>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="Java" />
                                </div>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="GIT" />
                                </div>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="Trello" />
                                </div>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="Slack" />
                                </div>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="Netlify" />
                                </div>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="Bootstrap" />
                                </div>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="MAterial-UI" />
                                </div>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="Firebase" />
                                </div>
                            </div>
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
            <div className={classes.timelineEntry}>
                <Card>
                    <CardHeader
                        title="Master of Science - Logistics, Materials, and Supply Chain Management"
                        subheader="Faculty of Technical Sciences, University of Novi Sad"
                        action={
                            <IconButton aria-label="settings" onClick={() => handleExpandChange2(!expanded2)}>
                                <ExpandMore />
                            </IconButton>
                        }
                    />
                    <Collapse in={expanded2}>
                        <CardContent expandable={true}>
                            <p>2005 – 2008</p>
                            <p>

                            </p>
                            <br /><br />
                            <div className={classes.timelineEntries}>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="Research" />
                                </div>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="Event organization" />
                                </div>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="Publishing" />
                                </div>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="Business correspondence" />
                                </div>
                            </div>
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
            <div className={classes.timelineEntry}>
                <Card>
                    <CardHeader
                        title="Computer Programming"
                        subheader="IT Retraining Program by the Government of the Republic of Serbia"
                        action={
                            <IconButton aria-label="settings" onClick={() => handleExpandChange3(!expanded3)}>
                                <ExpandMore />
                            </IconButton>
                        }
                    />
                    <Collapse in={expanded3}>
                        <CardContent expandable={true}>
                            <p>2019-2019</p>
                            <p>
                                Knowledge of OOP in Java, SQL technologies, JavaScript and HTML/CSS technologies. Capable for Web applications development in React framework and server support development using Spring/Hibernate.
                            </p>
                            <br /><br />
                            <div className={classes.timelineEntries}>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="Research" />
                                </div>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="Publishing" />
                                </div>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="Traffic" />
                                </div>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="Logistic" />
                                </div>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="Management" />
                                </div>
                                <div className={classes.timelineEntryChip}>
                                    <Chip label="IT in traffic" />
                                </div>
                            </div>
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        </div>
    );
}

export default Education;