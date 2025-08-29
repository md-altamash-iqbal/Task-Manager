import React from 'react'
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import PrivateRoutes from './routes/PrivateRoutes';
import Dashboard from './pages/Admin/Dashboard';
import ManageTask from './pages/Admin/ManageTask';
import CreateTask from './pages/Admin/CreateTask';
import ManageUsers from './pages/Admin/ManageUsers';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signUp" element={<SignUp/>} />

          {/* Admin Routes */}
          <Route element= {<PrivateRoutes allowedRoles={["admin"]} />}>
           <Route path="/admin/dashboard" element = {<Dashboard/>} />
           <Route path="/admin/tasks" element = {<ManageTask/>} />
           <Route path="/admin/create-task" element = {<CreateTask/>} />
           <Route path="/admin/users" element = {<ManageUsers/>} />
          </Route>

          {/* User Routes */}
          <Route element= {<PrivateRoutes allowedRoles={["admin"]} />}>
           <Route path="/user/dashboard" element = {<UserDashboard/>} />
           <Route path="/user/tasks" element = {<ManageTask/>} />
           <Route path="/admin/create-task" element = {<CreateTask/>} />
           
          </Route>

        </Routes>
      </Router>
    </div>
  )
}

export default App
