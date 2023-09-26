import { useNavigate } from "react-router-dom"
import { useState } from "react";

function SearchId() {

  const [id, setId] = useState('')
  const navigate = useNavigate()

  const handleChange = (event) => {
    const value = event.target.value;
    setId(value); 
    
  }

  const handleSearch =(event) =>{
    
        if (id !== '') {
          navigate(`/update/${id}`)
        } else return
      ;
   
    
    

  }

  return (
    <div className=' p-10 flex flex-col items-center gap-3'>
        <input  onChange={handleChange}  type="text" name="id" id="id " value={id} placeholder='Form id' className='relative border-b-[1px] mx-2 h-9 ' />
        <button onClick={handleSearch} className='lg:py-2 w-1/2  py-2 px-5 bg-slate-700 text-cyan-50 rounded-md lg:text-md font-semibold'>Search</button>
    </div>
  )
}

export default SearchId