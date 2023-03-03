import React from "react";
import './notific.css';
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';


function NotificationApplications()
{
    return(
        <>
        <h1>NOTIFICATIONS</h1>
        <div className="comdiv">
       <div className="bg-primary p-3 m-5"><p><FontAwesomeIcon icon={faCircleCheck}/>Information Message</p></div>
       <div className="bg-success p-3 m-5"><p><FontAwesomeIcon icon={faCircleCheck}/>Success Message</p></div>
       <div className="bg-warning p-3 m-5"><p><FontAwesomeIcon icon={faBell}/>Warning Message</p></div>
       <div className="bg-danger p-3 m-5"><p><FontAwesomeIcon icon={faCircleExclamation}/>Error Message</p></div>
       </div>
        </>
        );
    }
    export default NotificationApplications;