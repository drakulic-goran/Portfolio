import React from 'react';
import Avatar from "@material-ui/core/Avatar";

import avatar from "../../avatar.png";

import './Introduction.css';


const Introduction = () => {

    return (
        <div className="section colored">
            <div className="section-container">
                <div className="introduction">
                    <Avatar src={avatar} size={550} />
                    <p className="introduction-text">
                        Experienced Consultant with a demonstrated history of working in the transportation/postal industry.
                        Skilled in Negotiation, Business Planning, Educational Technology, Postal Optimization and Transportation.
                        Software Developer with some experience in creating responsive dynamic web applications based on specified requirements.
                        Strong consulting professional focused in Logistics, Management and IT.
            </p>
                </div>
            </div>
        </div>
    );
}

export default Introduction;