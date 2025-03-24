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
import NotAuthorized from "./components/pages/NotAuthorized";
import StatusProtectedRoute from "../protectRoute/StatusProtectRoute";
import RejectedProfile from "./components/pages/RejectedProfile";

function App() {

  return (
 
    <Routes>
    {/* Public Routes */}
    <Route path="/" element={<Login />} />
    <Route path="not-authorized" element={<NotAuthorized />} />
    <Route path = "rejected-profile" element ={<RejectedProfile/>}/>
  
    {/* Protected Routes (Authenticated Users Only) */}
    <Route path="viewprofile" element={<ProtectRoute><ViewProfile /></ProtectRoute>} />
    <Route path="editprofile" element={<ProtectRoute><StatusProtectedRoute><EditProfile /></StatusProtectedRoute></ProtectRoute>} />
    <Route path="mangestudents" element={<ProtectRoute><StatusProtectedRoute><MangeStudents /></StatusProtectedRoute></ProtectRoute>} />
    <Route path="mangecourses" element={<ProtectRoute><StatusProtectedRoute><MangeCourses /></StatusProtectedRoute></ProtectRoute>} />
    <Route path="voucher" element={<ProtectRoute> <StatusProtectedRoute><Voucher /></StatusProtectedRoute></ProtectRoute>} />
    <Route path="createprofile" element={<ProtectRoute><CreateProfile /></ProtectRoute>} />
    <Route path="dashbord" element={<ProtectRoute><Dashboard /></ProtectRoute>} />
  </Routes>
  
   
  );

}

export default App;
