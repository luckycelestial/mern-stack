import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Admin from './pages/admin/Admin.jsx'
import AdminDashboard from './pages/admin/Dashboard.jsx'
import Details from './pages/admin/Details.jsx'
import Student from './pages/student/Student.jsx'
import StudentDashboard from './pages/student/Dashboard.jsx'
import Profile from './pages/student/Profile.jsx'
// import Login from './pages/Login.jsx'
// import Register from './pages/Register.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}

        
        <Route path="/admin" element={<Admin />} >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="details" element={<Details />} />
        </Route>

        <Route path="/student" element={<Student />} >
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;