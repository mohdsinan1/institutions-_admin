import { Route, Routes } from "react-router-dom";
import Voucher from "./components/pages/Voucher";
import MangeCourses from "./components/pages/MangeCourses";
import MangeStudents from "./components/pages/MangeStudents";
import EditProfile from "./components/pages/EditProfile";
import ViewProfile from "./components/pages/ViewProfile";
import Login from "./components/Login/Login";
import CreateProfile from "./components/pages/CreateProfile";
import Dashboard from "./components/pages/Dashbord";
import ProtectRoute from "../protectRoute/protectRoute";

function App() {

  return (
 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="viewprofile" element={<ProtectRoute> <ViewProfile /></ProtectRoute>} />
        <Route path="editprofile" element={<ProtectRoute><EditProfile /></ProtectRoute>} />
        <Route path="mangestudents" element={<ProtectRoute><MangeStudents /></ProtectRoute>} />
        <Route path="mangecourses" element={<ProtectRoute><MangeCourses /></ProtectRoute>} />
        <Route path="voucher" element={<ProtectRoute><Voucher /></ProtectRoute>} />
        <Route path="createprofile" element={<ProtectRoute><CreateProfile /></ProtectRoute>} />
        <Route path="dashbord" element={<ProtectRoute><Dashboard /></ProtectRoute>} />
      </Routes>
   
  );

}

export default App;
