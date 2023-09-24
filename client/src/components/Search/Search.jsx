import React from 'react'

function Search() {
  return (
    <div className=' p-10 flex flex-col items-center gap-3'>
        <input type="text" name="search" id="search" placeholder='email@mail.com' className='border-b-[1px] w-96 h-9 ' />
        <button className='lg:py-2 w-1/2  py-2 px-5 bg-slate-700 text-cyan-50 rounded-md lg:text-md font-semibold'>Search</button>
    </div>
  )
}

export default Search