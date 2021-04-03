import React, { useState, useEffect } from 'react';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import './Header.css';

const scrollToFnc = require('scroll-to');


const Header = (props) => {

    const [height, setHeight] = useState(props.height);
    const [scrollTo, setScrollTo] = useState(props.height);

    const updateDimensions = () => {
        setHeight(window.innerHeight - 60 + 'px');
        setScrollTo(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        updateDimensions();
        return function cleanup() {
            window.removeEventListener("resize", updateDimensions);
        };
    });


    const onScrollToIntro = () => {
        scrollToFnc(0, scrollTo, {
            ease: 'out-bounce',
            duration: 2000
        });
    }

    return (
        <div className="section header-section">
            <div className="section-container header-component">
                <div className="header-wrapper" style={{ "height": height }}>
                    <div className="header">
                        <h3>Goran Drakulić</h3>
                        <h6>Software developer</h6>
                    </div>
                    <div className="scroll-down-btn">
                        <Fab mini={true} backgroundColor="#A80202" onClick={onScrollToIntro}>
                            <KeyboardArrowDownIcon />
                        </Fab>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;