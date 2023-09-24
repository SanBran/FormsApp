import {Routes,Route,useLocation} from "react-router-dom"
import Home from './views/Home/Home';
import Nav from "./components/NavBar/Nav";
import CreateForm from "./views/CreateForm/CreateForm";
import MyForms from "./views/MyForms/MyForms";
import FillForm from "./views/FillForm/FillForm";


function App() {
  return (
    <>
    
             <Nav/>
    
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<CreateForm/>}/>
        <Route path='/myForms/:email' element={<MyForms/>}/>
        <Route path='/fillForm/:_id' element={<FillForm/>}/>
    </Routes>
    </>
  )
}

export default App