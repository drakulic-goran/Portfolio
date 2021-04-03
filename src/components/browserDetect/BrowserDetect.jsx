import React, { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    browserDetect: {
        width: '100%',
    }
}));


const BrowserDetect = () => {

    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        // Internet Explorer 6-11
        const isIE = /*@cc_on!@*/false || !!document.documentMode;
        // Edge 20+
        const isEdge = !isIE && !!window.StyleMedia;
        if (isIE || isEdge) handleOpen();
    });

    const actions = [
        <Button
            label="Close"
            primary={true}
            onTouchTap={handleClose}
        />
    ];

    return (
        <div className={classes.browserDetect}>
            <Dialog
                title="Browser is not supported."
                actions={actions}
                modal={true}
                open={open}
            >
                Internet Explorer, Edge and Safari are not supported.
              </Dialog>
        </div>
    );
}

export default BrowserDetect;