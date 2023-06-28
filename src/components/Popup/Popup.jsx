import React from "react";
import "./Popup.css";

const Popup = ({cliked}) => {


    let isVisible = cliked ? 'block' : 'none';
    return (
        <div className="popup bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" style={{display:isVisible}}>
            <h1>adad</h1>
        </div>
    );
};

export default Popup;