import React from "react";
import './tech.css';
import 'bootstrap/dist/css/bootstrap.css'
function Technologies()
{
    return(
        <>
        <div className="mainDiv">
        <div className="div1">
        <h1>Learn 4.0 Technologies</h1>
        <p>Get trained by alumni of IIT's and Top companies like Amazon,Microsoft,Intel,Nividia etc..Learn directly from professionals involved in product development.</p><br/>
        </div>

        <div className="container-fluid row justify-content-center">
            <div className="card col-12 col-lg-5 col-xl-5 m-2 p-3 card1">
                <h2>DATA-SCIENTISTS</h2>
                <p>Data Scientists gather and analyze large set of structured and unstructured datas.</p>
                <img src="https://cdn-icons-png.flaticon.com/512/5145/5145822.png" className="images"/>
            </div>

            <div className="card col-12 col-lg-5 col-xl-5 m-2 p-3 card2">
                <h2>IOT DEVELOPERS</h2>
                <p>IOT developers are professionals, who can develop, manage, and maintain IOT devices.</p>
                    <img src ="https://www.dreamsoft4u.com/wp-content/uploads/2022/03/iot-1.webp" className="images"/>
            </div>
        </div>
        <div className="container-fluid row justify-content-center">
<div className="card col-12 col-lg-5 col-xl-5 m-2 p-3 card3">
<h2>VR DEVELOPERS</h2>
<p>VR developers create a completely new digital environments that people can see.</p>
    <img src="https://mlpksimzlqx4.i.optimole.com/w:auto/h:auto/q:mauto/https://digitalfren.com/wp-content/uploads/2022/12/vr-solutions-for-business-service.jpg" className="images"/></div>

<div className="card col-12 col-lg-5 col-xl-5 m-2 p-3 card4">
<h2>ML ENGINEERS</h2>
<p>ML Engineers feed data into mobiles defined by data scientists.</p>
<img src="https://static.vecteezy.com/system/resources/thumbnails/004/655/703/small/trendy-design-icon-of-machine-learning-vector.jpg" className="images"/></div>

        </div></div>
        </>
    );
}
export default Technologies;