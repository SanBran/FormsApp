import { useEffect, useState } from "react"
import { sendForm } from "../../services/Services";
import { useNavigate } from "react-router-dom";

function Interface({input,respuestas}) {
    const [close, setClose] = useState(true)
    const [next, setNext] = useState(false)
    
    const navigate = useNavigate()

    
   
    const handleNext = () => {
                respuestas.push(input)
        setClose(false)
    }

    const handleChange = (event) => {
        if (event.target.type === "checkbox") {
            input.value = event.target.checked
        setNext(true)
        }
        input.value = event.target.value
        setNext(true)
        
      }
    const handleChangeCheckBox = (event) => {
        if (input.value === "" ||input.value === false ) {
            input.value = true
        setNext(true)
        } else {
            input.value = false
        setNext(true)
        }
        
      }

      const handleSubmit = async (e) => {
        e.preventDefault()
        
            const form ={
                form: respuestas
            }
            const resp = await sendForm(form)
            if (resp.form) {
                swal("Form Crated!",`With this ID, you can access again to your form answer's and update them if you want, so it's important that you save it. ID: ${resp.form._id} `,"success");
                  navigate(`/update/${resp.form._id}`);    
            } else{
                swal("Error","Something went wrong, try again","error");
            }
      }

      
      

  return close ? (
    <div className='absolute flex gap-10 justify-center inset-0 lg:mx-auto top-28 lg:w-3/5 lg:h-5/6 mx-10 mb-5 items-center rounded-3xl text-2xl text-white left-0 bg-indigo-500 p-10'>
        <div className="flex flex-col ">
            {input.type === "submit" ? 
            <label className=" " htmlFor={input.label}>Thanks for fill this form</label>
            :
            <label className=" " htmlFor={input.label}>{input.label}</label> 
        }
        {input.options?  <select
                    className="bg-transparent border-b-[1px]"
                    type={input.type}
                    name={input.name}
                    onChange={handleChange}
                    required={input.required}
                    >
                        {input.options.map((option, index) => {
                            return (<option className="bg-transparent  border-b-[1px]" value={option.value} key={index}>{option.label}</option>)
                        })}
                    </select>
                    : input.type === "checkbox" ?
                  <input
                  className="border"
                  placeholder={input.label}
                  type={input.type}
                  label={input.label}
                  value={false}
                  onChange={handleChangeCheckBox}
                  required={input.required}
                   />
                  : input.type === "submit" ?
                  <button onClick={handleSubmit}  className='py-2 px-5 mt-5 bg-lime-400 text-cyan-50 rounded-md font-semibold'>Send</button>
                  :
                    <input onChange={handleChange} className=" bg-transparent  border-b-[1px]" type={input.type} />
        }
        </div>
        { !input.type || next && input.type !== "submit" ? <button onClick={handleNext} type="button">➜</button>
        :
        null}
        
    </div>
  ) : null
}

export default Interface