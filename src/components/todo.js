import React from "react"
import {
  Button,
  Input
} from "reactstrap"

const Todo = (props) => {
    const form = document.querySelector("form");
    const ul = document.querySelector("ul");
    const btn = document.querySelector("Button");
    const input = document.querySelector("#todoInput");

const liCreator = (text) => {
const li = document.createElement("li")
li.textContent = text
ul.appendChild(li)
}

form.addEventListener('submit', function (e) {
    e.preventDefault()
  
    liMaker(input.value)
    input.value = ''
  })

    let boxBtn = {
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        }
        let styleBtn = {
            color: "black",
            backgroundColor: "white",
            borderRadius:"8px",
            border:"2px solid #008CBA",
            justifyContent:"space-around",
        }
    return (
        <div className="boxTodo" >
        <form>
        <Input type="text" id="todoInput" readOnly="" placeholder="save your passsword here" />
        </form>
        <h2>Saved passwords</h2>
        <ul></ul>
        <div style={boxBtn}> 
      
          <Button style={styleBtn}>Clear All</Button>
          </div>
        </div>
    )
}
export default Todo;