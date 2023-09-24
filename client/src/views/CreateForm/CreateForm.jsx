import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { postNewForm } from "../../services/Services"
import FormPreview from "../../components/Form/FormPreview"
import swal from 'sweetalert';

function CreateForm() {

  const navigate = useNavigate();

  const [preview, setPreview] = useState(false)
  const [create,setCreate] = useState({
    email:"",
    items:""
  })
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setCreate({ ...create, [property]: value }); 
    
  }


  const handleCharge = (event) => {
   const file = event.target.files[0];
      const reader = new FileReader();
      
      reader.onload = (event) =>{
        try {
          const parsedJson = JSON.parse(event.target.result);
          setCreate({ ...create, items: parsedJson.items })
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      }
      reader.readAsText(file);
  }

  const handlePreview =() =>{
    setPreview(true)
  }

  const handleSubmit =(event) =>{
    event.preventDefault()
    postNewForm(create)
    swal("Form Crated!","Let's see your forms","success");
    
      navigate(`/myForms/${create.email}`);
   
    
    

  }


  return (
    <div className='flex justify-center align-middle items-center h-screen'>
      {!preview? 
    <form className='border shadow-md rounded-xl flex flex-col gap-8 p-10'>
        
    <h1 className=' text-5xl font-extrabold'>Form creation</h1>

    <div className='flex flex-col gap-1'>
    <label htmlFor="email">Please type an email  </label>
    <input className=' border-b-[1px]' placeholder="email@mail.com" onChange={handleChange}type="text" value={create.email} name="email" />
    </div>

    <div className='flex flex-col gap-1'>
    <label htmlFor="jsonFile">Upload your JSON file </label>
    <input className='' onChange={handleCharge} accept=".json"  type="file" name="jsonFile" />
    </div>
        <button onClick={handlePreview} className='py-2 px-5 bg-slate-700 text-cyan-50 rounded-md font-semibold'>Preview</button>
    </form>
    :
    <div className=" z-0 absolute border flex flex-col gap-5 px-20 pb-10 pt-8 top-20 items-center shadow-xl">
      <h1 className=" text-center mb-10 text-4xl">This is a preview</h1>
      <FormPreview jsonForm={create.items}/>
      <button onClick={handleSubmit} className='py-2 px-5 bg-slate-700 text-cyan-50 rounded-md font-semibold'>Upload</button>
    </div>  
    }
      
      </div>
  )
}

export default CreateForm