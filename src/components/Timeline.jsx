import React, { useState } from 'react';
import { Card, CardHeader, CardContent, Chip, Collapse, IconButton } from '@material-ui/core';
import ExpandMore from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
        background: "#354051",
    },
    timeline: {
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        maxWidth: '800px',
        padding: "40px 20px 20px 20px",
    },
    timelineEntry: {
        marginTop: '10px',
        '&:lastOfType': {
            marginBottom: '0px',
        },
        display: 'block',
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


const Timeline = (props) => {

    const [expanded, setExpanded] = useState(false);
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);
    const [expanded4, setExpanded4] = useState(false);

    const classes = useStyles();


    const handleExpandChange = (exp) => {
        setExpanded(exp);
        if (exp === true) {
            setExpanded1(false);
            setExpanded2(false);
            setExpanded3(false);
            setExpanded4(false);
        };
    };

    const handleExpandChange1 = (exp) => {
        setExpanded1(exp);
        if (exp === true) {
            setExpanded(false);
            setExpanded2(false);
            setExpanded3(false);
            setExpanded4(false);
        };
    };

    const handleExpandChange2 = (exp) => {
        setExpanded2(exp);
        if (exp === true) {
            setExpanded1(false);
            setExpanded(false);
            setExpanded3(false);
            setExpanded4(false);
        };
    };

    const handleExpandChange3 = (exp) => {
        setExpanded3(exp);
        if (exp === true) {
            setExpanded1(false);
            setExpanded2(false);
            setExpanded(false);
            setExpanded4(false);
        };
    };

    const handleExpandChange4 = (exp) => {
        setExpanded4(exp);
        if (exp === true) {
            setExpanded1(false);
            setExpanded2(false);
            setExpanded3(false);
            setExpanded(false);
        };
    };


    return (
        <div className={classes.root}>
            <div className={classes.timeline}>
                <div className={classes.timelineEntry}>
                    <Card>
                        <CardHeader
                            title="Head of Processing and Transport Department / Head of Postal Network Unit / Senior Associate Manager"
                            subheader="Public Enterprise - Post of Serbia"
                            titleTypographyProps={{ variant: 'h6' }}
                            action={
                                <IconButton aria-label="settings" onClick={() => handleExpandChange(!expanded)}>
                                    <ExpandMore />
                                </IconButton>
                            }
                        />
                        <Collapse in={expanded}>
                            <CardContent expandable={true}>
                                <p>Apr 2011 – Present</p>
                                <p>
                                    Selected responsibilities:
                                <ul>
                                        <li>
                                            Management of postal and logistics flows and services;
                                </li>
                                        <li>
                                            Organizing and managing the work process in over 120 post offices with over 800 employees and in the Regional Postal Logistics Center with over 150 employees;
                                </li>
                                        <li>
                                            Organizing and managing a fleet of about 100 vehicles;
                                </li>
                                        <li>
                                            Finding and overcoming problems caused by the introduction of the PostTIS application in the work processes;
                                </li>
                                        <li>
                                            Introduction of delivery control application – coordinator and initial trainer;
                                </li>
                                        <li>
                                            Monitoring and coordinating the use of vacations, sick leave and absence on other grounds through my own Microsoft Access application.
                                </li>
                                    </ul>
                                Jobs timeline:
                               <ul>
                                        <li>
                                            Associate Manager: 04.2011-5.2013.
                                </li>
                                        <li>
                                            Independent Associate Manager: 06.2013-11.2014.
                                    </li>
                                        <li>
                                            Head of the Shipments Processing and Transport Department: 12.2014-09.2015.
                                    </li>
                                        <li>
                                            Head of the Postal Network Unit: 10.2015-03.2018.
                                    </li>
                                        <li>
                                            Senior Associate Manager: 03.2018-Present.
                                    </li>
                                    </ul>
                                </p>
                                <br /><br />
                                <div className={classes.timelineEntries}>
                                    <div className={classes.timelineEntryChip}>
                                        <Chip label="Management" />
                                    </div>
                                    <div className={classes.timelineEntryChip}>
                                        <Chip label="Organization" />
                                    </div>
                                    <div className={classes.timelineEntryChip}>
                                        <Chip label="Monitoring" />
                                    </div>
                                    <div className={classes.timelineEntryChip}>
                                        <Chip label="Coordination" />
                                    </div>
                                    <div className={classes.timelineEntryChip}>
                                        <Chip label="IT in postal services" />
                                    </div>
                                </div>
                            </CardContent>
                        </Collapse>
                    </Card>
                </div>
                <div className={classes.timelineEntry}>
                    <Card>
                        <CardHeader
                            title="Founder & Software Developer"
                            subheader="3ClickJobs"
                            titleTypographyProps={{ variant: 'h6' }}
                            action={
                                <IconButton aria-label="settings" onClick={() => handleExpandChange1(!expanded1)}>
                                    <ExpandMore />
                                </IconButton>
                            }
                        />
                        <Collapse in={expanded1}>
                            <CardContent expandable={true}>
                                <p>Sep 2019 – Present</p>
                                <p>
                                    Knowledge of OOP in Java, SQL technologies, JavaScript and HTML/CSS technologies. Capable for Web applications development in React framework and server support development using Spring/Hibernate.
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
                                        <Chip label="Mterial-UI" />
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
                            title="Consultant"
                            subheader="ABS Holdings"
                            titleTypographyProps={{ variant: 'h6' }}
                            action={
                                <IconButton aria-label="settings" onClick={() => handleExpandChange2(!expanded2)}>
                                    <ExpandMore />
                                </IconButton>
                            }
                        />
                        <Collapse in={expanded2}>
                            <CardContent expandable={true}>
                                <p>Apr 2010 – Aug 2010</p>
                                <p>
                                    Research work on projects and participation in making “Development Program of Serbia 2010-2015”, organization of events (largest was promotion of that program at the Sava Center in Belgrade, 05.2010), activity logging and business correspondence with members of large dislocated team.
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
                            title="Research Assistant"
                            subheader="Faculty of Technical Sciences, University of Novi Sad"
                            titleTypographyProps={{ variant: 'h6' }}
                            action={
                                <IconButton aria-label="settings" onClick={() => handleExpandChange3(!expanded3)}>
                                    <ExpandMore />
                                </IconButton>
                            }
                        />
                        <Collapse in={expanded3}>
                            <CardContent expandable={true}>
                                <p>Feb 2006 – Dec 2008</p>
                                <p>
                                    Research work in teams on projects:
                                <ul>
                                        <li>
                                            Project and development of optimal logistic technologies for management, control and realization of energy flows;
                               </li>
                                        <li>
                                            Development and application of optimization methods in forming supply chains in our (Serbian) automobile industry.
                                </li>
                                    </ul>
                                Verbal and visual presentation of achieved results, participation in numerous symposiums and publication of a large number of professional papers and one monograph (“Information-Communication Infrastructure in Transport”). Realization of teaching activities (lectures, consultations and exams) and preparation of literature.
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
                <div className={classes.timelineEntry}>
                    <Card>
                        <CardHeader
                            title="System Administrator"
                            subheader="Internet caffe “Grand”"
                            titleTypographyProps={{ variant: 'h6' }}
                            action={
                                <IconButton aria-label="settings" onClick={() => handleExpandChange4(!expanded4)}>
                                    <ExpandMore />
                                </IconButton>
                            }
                        />
                        <Collapse in={expanded4}>
                            <CardContent expandable={true}>
                                <p>May	2003	-	Oct	2008</p>
                                <p>
                                    Design, organize, modify and support the organization’s computer systems. Upgrade and manage the software and hardware. Handle any issues related to Local Area Networks (LAN), Wide Area Networks, and Network segments. Maintain operating systems, business applications, security tools, web-servers, email, laptop, and desktop PCs.
                            </p>
                                <br /><br />
                                <div className={classes.timelineEntries}>
                                    <div className={classes.timelineEntryChip}>
                                        <Chip label="Windows Server" />
                                    </div>
                                    <div className={classes.timelineEntryChip}>
                                        <Chip label="Windows" />
                                    </div>
                                    <div className={classes.timelineEntryChip}>
                                        <Chip label="LAN" />
                                    </div>
                                    <div className={classes.timelineEntryChip}>
                                        <Chip label="WLAN" />
                                    </div>
                                </div>
                            </CardContent>
                        </Collapse>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Timeline;