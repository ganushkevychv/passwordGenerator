import React from "react"
import {
  Button,
  Input
} from "reactstrap"

const InputComponent = (props) => {
const getPassword = () => {
    let symbols = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789";
    let passwordLength = 8;
    let password = "";
    
    for (let i=0; i<passwordLength; i++){
        let randomSymbol = Math.floor(Math.random() * symbols.length);
        password += symbols.substring(randomSymbol,randomSymbol + 1);
}
document.querySelector("#password").value = password;
} 
let boxBtn = {
display:"flex",
justifyContent:"center",
alignItems:"center",
}
let styleBtn = {
    color: "black",
    backgroundColor: "white",
    // borderColor: "#17a2b8",
    borderRadius:"8px",
    border:"2px solid #008CBA",
}
  return (
    <div className="box" >
    <Input type="text" id="password" readOnly="" placeholder="password" />
    <div style={boxBtn}> 
      <Button style={styleBtn}  onClick={getPassword} >Generate</Button>
      </div>
    </div>
  )
}
export default InputComponent
