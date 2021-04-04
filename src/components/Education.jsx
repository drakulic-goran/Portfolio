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
    education: {
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        maxWidth: '800px',
        padding: "40px 20px 20px 20px",
    },
    educationEntry: {
        marginBottom: '20px',
        '&:lastOfType': {
            marginBottom: '0px',
        },
    },
    educationEntryChip: {
        float: 'left',
        marginRight: '5px',
        marginBottom: '5px',
        display: 'inline-block',
    },
    educationEntries: {
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
        <div className={classes.root}>
            <div className={classes.education}>
                <div className={classes.educationEntry}>
                    <Card>
                        <CardHeader
                            title="Computer Programming"
                            subheader="IT Retraining Program by the Government of the Republic of Serbia"
                            titleTypographyProps={{ variant: 'h6' }}
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
                                <div className={classes.educationEntries}>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="Java" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="JavaScript" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="HTML" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="CSS" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="React" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="React Native" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="React Redux" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="React Router" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="React Bootstrap" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="Material-UI" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="Firebase" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="Spring" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="Maven" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="Hibernate" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="MySQL" />
                                    </div>
                                </div>
                            </CardContent>
                        </Collapse>
                    </Card>
                </div>
                <div className={classes.educationEntry}>
                    <Card>
                        <CardHeader
                            title="Master of Science - Logistics, Materials, and Supply Chain Management"
                            subheader="Faculty of Technical Sciences, University of Novi Sad"
                            titleTypographyProps={{ variant: 'h6' }}
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
                                    Among other things, acquired detailed knowledge from the logistics sector, especially in terms of interactions and communication in the supply chains, conducted research work to a significant extent, prepared and published research papers in various business and scientific journals, scientific conferences and symposia, presented research results, realized teaching through three years of experience at the faculty in interaction with students and colleagues.
                            </p>
                                <br /><br />
                                <div className={classes.educationEntries}>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="Logistic" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="Supply chains" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="Interactions and communication in the supply chains" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="Research" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="Publishing research papers and books" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="Presenting research results" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="Teaching" />
                                    </div>
                                </div>
                            </CardContent>
                        </Collapse>
                    </Card>
                </div>
                <div className={classes.educationEntry}>
                    <Card>
                        <CardHeader
                            title="Master of Engineering - Postal and Telecommunications Engineering"
                            subheader="Faculty of Technical Sciences, University of Novi Sad"
                            titleTypographyProps={{ variant: 'h6' }}
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
                                    Among other things, acquired broad knowledge for independent reasoning and creating business solutions, for the implementation of modern business strategies in the postal transport and telecommunications sector, Web site design, creating optimal transport solutions, using an algorithmic approach to problem solving and transport documentation administration.
                            </p>
                                <br /><br />
                                <div className={classes.educationEntries}>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="Transport documentation administration" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="Web site design" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="Matlab" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="C++" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="Postal transport and services" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="Telecommunications" />
                                    </div>
                                </div>
                            </CardContent>
                        </Collapse>
                    </Card>
                </div>
                <div className={classes.educationEntry}>
                    <Card>
                        <CardHeader
                            title="Electro-technician of computers"
                            subheader="Technical high school Sombor"
                            titleTypographyProps={{ variant: 'h6' }}
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
                                    Among others, acquired skills for computer hardware maintenance, OS and computer network administration, Pascal and C programming, Graduation work in 3D Studio Max, and electrical installation design.                            </p>
                                <br /><br />
                                <div className={classes.educationEntries}>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="Pascal" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="C" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="3D Studio Max" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="Electrical installation design" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="OS and computer network administration" />
                                    </div>
                                    <div className={classes.educationEntryChip}>
                                        <Chip label="Hardware maintenance" />
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

export default Education;