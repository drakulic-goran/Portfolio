import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    progress: {
        height: '20px',
        width: '100%',
        position: 'fixed',
        zIndex: 200,
    },
    progressBar: {
        // height: '20px',
        width: 0,
        background: '#A80202',
        height: '5px',
        boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
    },
}));


const Progress = () => {

    const [completed, setCompleted] = useState(0);
    // const [windowHeight, setWindowHeight] = useState(0);
    const [domHeight, setDomHeight] = useState(0);

    const classes = useStyles();

    useEffect(() => {
        setHeights();
        window.addEventListener('scroll', handleScroll.bind(this));
        return function cleanup() {
            window.removeEventListener('scroll', handleScroll.bind(this));
        };
    });

    const setHeights = () => {
        setDomHeight($('body').height());
        // setWindowHeight($(window).height());
    };

    const handleScroll = () => {
        const scrollTop = $('body').scrollTop();
        let position = Math.round((scrollTop / domHeight) * 100);
        if (position > 98) position = 100;
        setCompleted(prevState => prevState + '%');
    }


    return (
        <div className={classes.progress}>
            <div
                className={classes.progressBar}
                style={{ "width": completed }}>
            </div>
        </div>
    );
}

export default Progress;