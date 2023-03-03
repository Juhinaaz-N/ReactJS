import React from "react";
import './reuse.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
function ReUsableBanners()
{
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    
      <Link to='/'>
      <li class="nav-item active">
      <a class="nav-link" href="#">HelloWorld</a>
      </li></Link>

      <Link to='/LoginDesign'>
      <li class="nav-item">
      <a class="nav-link" href="#">LoginDesign</a>
      </li></Link>

      <Link to='/NotificationsApplication'>
      <li class="nav-item dropdown">
      <a class="nav-link" href="#">NotificationsApplication</a>
      </li></Link>

      <Link to='/SocialButtons'>
      <li class="nav-item">
      <a class="nav-link">SocialButtons</a>
      </li></Link>

      <Link to='/SuperOverLeague'>
      <li class="nav-item">
      <a class="nav-link">SuperOverLeague</a>
      </li></Link>

      <Link to='/Technologies'>
      <li class="nav-item">
      <a class="nav-link">Technologies</a>
      </li></Link>

      <Link to='/CongratsCard'>
      <li class="nav-item">
      <a class="nav-link">CongratsCard</a>
      </li></Link>

      <Link to='/Hooks'>
      <li class="nav-item">
      <a class="nav-link">Hooks</a>
      </li></Link>

      <Link to='/FruitsCounter'>
      <li class="nav-item">
      <a class="nav-link">FruitsCounter</a>
      </li></Link>

    </ul></div></nav>
    </>
    );
    }
export default ReUsableBanners;