import React, { useEffect, useState } from "react";
import NavBar from "./Dem_NavBar";
import Footer from "./Dem_Footer";
import SearchIcon from '@mui/icons-material/Search';
import "./deed_management.css"

function DeedDashboard() {
 

    return (
        <div className="dashboard-container">
            <NavBar />


            <Footer />
        </div>
    );
}

export default DeedDashboard;
