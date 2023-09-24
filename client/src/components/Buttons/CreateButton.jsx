import { Link } from "react-router-dom"

function CreateButton() {
  return (
    <Link to="/create" className='lg:py-5 lg:px-8 py-2 px-5 bg-slate-700 text-cyan-50 rounded-md lg:text-2xl font-semibold'>Create Form</Link>
  )
}

export default CreateButton