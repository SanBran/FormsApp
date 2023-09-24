import { Link } from "react-router-dom"

function CreateButton() {
  return (
    <Link to="/create" className='lg:py-3 lg:px-6 py-2 px-5 bg-slate-700 text-cyan-50 rounded-md lg:text-xl font-semibold'>Create Form</Link>
  )
}

export default CreateButton