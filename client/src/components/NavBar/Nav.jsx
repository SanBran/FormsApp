import { Link } from "react-router-dom"
import CreateButton from "../Buttons/CreateButton"

function Nav() {
  return (
    <div className=" z-50 flex justify-between w-screen lg:px-10 py-5 px-4 bg-white bg-opacity-90 fixed backdrop-blur-sm text-center">
             <Link to="/" className="text-3xl font-bold">FORMS</Link>
             <CreateButton/>
        </div>
  )
}

export default Nav