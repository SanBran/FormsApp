import {  useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFilledFormbyID, putForm } from "../../services/Services";

function UpdateForm() {

    const {_id} = useParams()
    const [id,setId] = useState(_id)
    const [jsonForm,setjsonForm] = useState([])
    const [formValues, setFormValues] = useState([]);
    const [prueba, setPrueba] = useState("");

        const navigate = useNavigate()
    

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await getFilledFormbyID(id);
            setjsonForm(response)
            setFormValues(response.form)
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
    
        fetchData();
      }, [_id]);

      

      const handleChange = (e, inputName, index) => {
       
        setPrueba(e.target.value)
        console.log('change');
      };

      const handleChangeCheckBox = (e,index) => {
        console.log(formValues[index].value);
        if (formValues[index].value === "" ||formValues[index].value === false ) {
          formValues[index].value = true
        
        } else {
          formValues[index].value = false
        
        }
        console.log(formValues[index].value);
      }

      const handleSave = (e, input, index) => {
        
        formValues[index].value = prueba
        
      };

      const handleSubmit = async (e) => {
        e.preventDefault()
        
            const form ={
                _id: _id,
                form: formValues
            }
            const resp = await putForm(form)
            
                swal("Form Updated!","","success");
                  navigate(`/`);    
            
      }

      const handleCancel = () => {
        navigate(`/`);  
      }
    
  return (
    <form className=" relative border shadow-md rounded-lg flex flex-col lg:mx-56 mx-14 p-10 top-40 "  >
        <h1 className=" text-center text-4xl font-semibold mb-10">Update your form</h1>
        {!jsonForm  ? <h1 className=" text-center text-3xl">Loading...</h1> : formValues?.map((i,index) => {
           if (i.options) {
            return (
                <div className="flex flex-col mb-3 ">
                    <label htmlFor={i.name}>{i.label}</label>
                    <select
                    className="border rounded-md p-1"                   
                    placeholder={i.value}
                    onChange={(e) => handleChange(e, i, index)}
                    key={index}>
                        {i.options.map((option,index) => {
                            
                            return (<option value={option.value} key={index}>{option.label}</option>)
                        })}
                    </select>
                    <button type="button" onClick={(e) => handleSave(e, i, index)} className="lg:py-2 w-1/12  mx-auto mt-3 py-2 px-5 bg-slate-700 text-cyan-50 rounded-md lg:text-md font-semibold">Done</button>
                </div>
            )
           } else if(i.type !== "submit" && i.type !== "checkbox"){
            return (
              <div className="flex flex-col mb-3">
                
                  <label htmlFor={i.name}>{i.label}</label>
                  <input
                  className="border rounded-md p-2"
                  placeholder={i.value}
                  type={i.type}
                  label={i.label}
                  name={i.name}
                  required={i.required}
                  onChange={(e) => handleChange(e, i, index)}
                  key={index} />
                  <button type="button" onClick={(e) => handleSave(e, i, index)} className="lg:py-2 w-1/12  mx-auto mt-3 py-2 px-5 bg-slate-700 text-cyan-50 rounded-md lg:text-md font-semibold">Done</button>
              </div>
                )
           } else if(i.type === "checkbox" ){
            return (
              <div className="flex border flex-col rounded-md mb-3 justify-evenly p-2 mt-3 shadow-sm ">
                
                  <label className=" w-4/5" htmlFor={i.name}>{i.label}</label>
                  {formValues[index].value? <input
                  className="border"
                  placeholder={i.label}
                  type={i.type}
                  label={i.label}
                  name={i.name}
                  checked
                  onChange={(e) => handleChangeCheckBox(e,index)}
                  required={i.required}
                  key={index} />
                :
                <input
                  className="border"
                  placeholder={i.label}
                  type={i.type}
                  label={i.label}
                  name={i.name}
                  onChange={(e) => handleChangeCheckBox(e,index)}
                  required={i.required}
                  key={index} />
                }
                 
              </div>
                )
           }
           
       
        })}
        <div className=" w-full flex justify-around">
            <button type="button" onClick={handleSubmit} className="lg:py-2 w-1/4  py-2 px-5 bg-lime-500 text-cyan-50 rounded-md lg:text-md font-semibold">Acept</button>
            <button type="button" onClick={handleCancel} className="lg:py-2 w-1/4  py-2 px-5 bg-red-600 text-cyan-50 rounded-md lg:text-md font-semibold">Cancel</button>
        </div>
    </form>
  )
}


export default UpdateForm