import React from "react"
import {
  Button,
  Input
} from "reactstrap"


const InputComponent = (props) => {

const getPassword = () => {
    let symbols = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789";
    let passwordLength = 10;
    let password = "";
    
    for (let i=0; i<passwordLength; i++){
        let randomSymbol = Math.floor(Math.random() * symbols.length);
        password += symbols.substring(randomSymbol,randomSymbol + 1);
}
document.querySelector("#password").value = password;
} 
const getPasswordOne = () => {
  let symbols = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789";
  let passwordLength = 12;
  let password = "";
  
  for (let i=0; i<passwordLength; i++){
      let randomSymbol = Math.floor(Math.random() * symbols.length);
      password += symbols.substring(randomSymbol,randomSymbol + 1);
}
document.querySelector("#password").value = password;
} 
const getPasswordTwo = () => {
  let symbols = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789";
  let passwordLength = 16;
  let password = "";
  
  for (let i=0; i<passwordLength; i++){
      let randomSymbol = Math.floor(Math.random() * symbols.length);
      password += symbols.substring(randomSymbol,randomSymbol + 1);
}
document.querySelector("#password").value = password;
} 
let boxBtn = {
display:"flex",
justifyContent:"space-around",
alignItems:"center",
}
let styleBtn = {
  width:"50px",
  heigh:"20px",
    color: "black",
    backgroundColor: "white",
    borderRadius:"8px",
    border:"2px solid #008CBA",
    justifyContent:"space-around",
}
  return (
    <div className="boxPass" >
    <h2>Passwords Generator</h2>
    <Input type="text" id="password" readOnly="" placeholder="password" />
    <div style={boxBtn}> 
  
      <Button style={styleBtn}  onClick={getPassword} >10</Button>
      <Button style={styleBtn} onClick={getPasswordOne} >12</Button>
      <Button style={styleBtn} onClick={getPasswordTwo} >16</Button>

      </div>
    </div>
  )
}
export default InputComponent
