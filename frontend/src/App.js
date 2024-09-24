import './components_home/common.css';
import './components_home/home.css';
import './components_login/login.css';
import './components_dem/deed_management.css'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './components_home/Home';
import Login from './components_login/login';
import ApmDashboard from './components_apm/Apm_Dashboard';

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

        <Route path="/" exact element={<DemDashboard/>}/> 
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/apm_dashboard" exact element={<ApmDashboard/>}/>


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