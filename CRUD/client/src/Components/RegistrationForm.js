import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
function RegistrationForm() {
    return(
<>
<div>
<form>
    <label>FIRST NAME:</label> <input type='text' name='FisrtName' placeholder='Enter Your FirstName' id=''/><br/><br/>
    <label>LAST NAME: </label> <input type='text' name='LastName' placeholder='Enter Your LastName' id=''/><br/><br/>
    <label>EMAIL: </label> <input type='text' name='Email' placeholder='Enter Your Email' id=''/><br/><br/>
    <label>PASSWORD: </label> <input type='text' name='Password' placeholder='Enter Your Password' id=''/><br/><br/>
    <button>SUBMIT</button>
</form>
</div>
</>
);
}
export default RegistrationForm;