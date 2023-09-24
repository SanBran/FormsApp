import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { sendForm } from "../../services/Services"
import swal from 'sweetalert';
import Interface from "../Interface/Interface";

function Form({jsonForm}) {
 const inputs = jsonForm.items.reverse()
 
    const respuestas = []

    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
      }
    };
  
  return (
    <form onKeyPress={handleKeyPress} className=" border shadow-md w-screen h-screen rounded-lg flex flex-col  p-10 "  >
        {inputs?.map((i,index) => {
           
            return (
                <Interface input={i} respuestas={respuestas}/>
            )
           
           
        })}
       
    </form>
  )
}


export default Form