import React from "react";
import './social.css';
import 'bootstrap/dist/css/bootstrap.css'

function SocialButtons()
{
    return(
        <>
        <div className="js">
            <h1 className="heading">Social Buttons</h1>
            <button className="btn btn-warning m-3 buttons">Like</button>
            <button className="btn btn-light m-3 buttons">Comment</button>
            <button className="btn btn-primary m-3 buttons">Share</button>
        </div>
        </>
    );
}
export default SocialButtons;