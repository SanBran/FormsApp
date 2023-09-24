import { useNavigate } from "react-router-dom"
import { useState } from "react";

function Search() {

  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleChange = (event) => {
    const value = event.target.value;
    setEmail(value); 
    
  }

  const handleSearch =(event) =>{
    
        if (email !== '') {
          navigate(`/myForms/${email}`)
        } else return
      ;
   
    
    

  }

  return (
    <div className=' p-10 flex flex-col items-center gap-3'>
        <input  onChange={handleChange}  type="text" name="email" id="email " value={email} placeholder='email@mail.com' className='relative border-b-[1px] mx-2 h-9 ' />
        <button onClick={handleSearch} className='lg:py-2 w-1/2  py-2 px-5 bg-slate-700 text-cyan-50 rounded-md lg:text-md font-semibold'>Search</button>
    </div>
  )
}

export default Search