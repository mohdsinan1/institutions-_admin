import { Route, Routes } from "react-router-dom";
import Voucher from "./components/pages/Voucher";
import MangeCourses from "./components/pages/MangeCourses";
import MangeStudents from "./components/pages/MangeStudents";
import EditProfile from "./components/pages/EditProfile";
import ViewProfile from "./components/pages/ViewProfile";
import Login from "./components/Login/Login"



function App() {
  return (
    <>
    
  

   <Routes>
    <Route path="/" element ={<Login/>}/>
    <Route path="viewprofile" element ={<ViewProfile/>}/>
    <Route path ="editprofile" element = {<EditProfile/>}/>
    <Route path = "mangestudents" element={ <MangeStudents/>}/>
    <Route path="mangecourses" element ={ <MangeCourses/>}/>
    <Route path="voucher" element={<Voucher/>}/>
   </Routes>
    
    </>
  );
}

export default App;
