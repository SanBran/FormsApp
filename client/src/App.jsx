import {Routes,Route,useLocation} from "react-router-dom"
import Home from './views/Home/Home';
import Nav from "./components/NavBar/Nav";
import CreateForm from "./views/CreateForm/CreateForm";


function App() {
  return (
    <>
    
             <Nav/>
    
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<CreateForm/>}/>
    </Routes>
    </>
  )
}

export default App