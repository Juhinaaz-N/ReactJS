import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {link} from "react-router-dom";
import axios from axios;

export function Employee(){
    const handlesubmit=(j)=>{
        j.preventDefault();
        var datastring = new FormData(j.target);
        var config = {Headers:{"encrypt":"multi-part/form-data"}};
        var FirstName = document.getElementById('FirstName').value;
        var LastName = document.getElementById('LastName').value;
        var Email = document.getElementById('Email').value;
        var Password = document.getElementById('Password').value;

        if(FirstName === '' || FirstName === null){
            alert('Enter The FirstName');
            document.getElementById('FirstName').focus();
        }
else{
    axios.post('http://localhost:3004/Employee',datastring,config)
    .then(function(response){
        if(response.data.status === 'CREATED'){
            alert('INSERTED');
            window.location.href="/";
        }
        else if(response.data.status === 'error'){
            alert('Contact Admin');
            window.location.reload();
        }
        else{
            alert('ERROR');
            window.location.href="/";
        }
    })
}
    }}