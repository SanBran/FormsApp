import {Routes,Route,useLocation} from "react-router-dom"
import Home from './views/Home/Home';
import Nav from "./components/NavBar/Nav";
import CreateForm from "./views/CreateForm/CreateForm";
import MyForms from "./views/MyForms/MyForms";


function App() {
  return (
    <>
    
             <Nav/>
    
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<CreateForm/>}/>
        <Route path='/myForms/:email' element={<MyForms/>}/>
    </Routes>
    </>
  )
}

export default App