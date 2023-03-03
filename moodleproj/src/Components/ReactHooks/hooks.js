import React,{useState} from "react";
import './hooks.css'
import 'bootstrap/dist/css/bootstrap.css'
function Hooks(){
    const [Number,setNumber]=useState(0);
    return(
        <>
        <div className="hookbg text-center container-fluid row p-5">
            <div className="col-lg-12 col-md-12">
            <h1 className="hookheading">This page will do an increment operation</h1>
            <h1 className="hooknum">{Number}</h1>
            <button className="hookbutt col-lg-6 col-md-6" onClick={()=>setNumber(Number+1)}>Click Here ToGet An Increment</button>
            <button className="hookbutt col-lg-6 col-md-6" onClick={()=>setNumber(Number*0)}>Reset</button>
        </div>
        </div>
        </>
        );
        }
export default Hooks;