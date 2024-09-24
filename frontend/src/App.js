import './components_home/common.css';
import './components_home/home.css';
import './components_login/login.css';
import './components_dem/deed_management.css'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './components_home/Home';
import Login from './components_login/login';
import ApmDashboard from './components_apm/Apm_Dashboard';

//import AllAppointmentRequests from './components_apm/Apm_All_AppointmentRequests';
//import AllAppointments from './components_apm/Apm_All_Appointments';
import Appointment from './components_apm/Apm_Appointment';
//import AppointmentRequest from './components_apm/Apm_AppointmentRequest';
import ViewAppointmentRequestAM from './components_apm/Apm_AM_View_Appointment_Request';
import CreateAppointmentRequest from './components_apm/Apm_Create_AppointmentRequest';

import DemDashboard from './components_dem/Dem_Dashboard';
import DemAddDeed from './components_dem/Dem_addDeed';
import DemReadAll from './components_dem/Dem_allDeed';
import DemDeedDetail from './components_dem/Dem_deedDetail';




function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/home" exact element={<Home/>}/> 

         {/* Appointment Management */}
        <Route path="/" exact element={<DemDashboard/>}/> 
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/apm_dashboard" exact element={<ApmDashboard/>}/>
        <Route path="/appointment-manager-dashboard" exact element={<ApmDashboard/>}/>
       
        <Route path="/appointment/:id" exact element={<Appointment/>}/>
      
        <Route path="/view-appointment-request-appointment-manager" exact element={<ViewAppointmentRequestAM/>}/>
        <Route path="/create-appointment-request" exact element={<CreateAppointmentRequest/>}/>


        <Route path="/dem_dashboard" exact element={<DemDashboard/>}/>
        <Route path="/add_deed" exact element={<DemAddDeed/>}/>
        <Route path="/read_all_deeds" exact element={<DemReadAll/>}/>
        <Route path="/deed/:id" exact element={<DemDeedDetail />} />
       



        </Routes>
      </div>
    </Router> 
  );
}

export default App;