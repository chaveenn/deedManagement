import React, { useState, useEffect } from "react";
import NavBar from "./Dem_NavBar";
import Footer from "./Dem_Footer";
import axios from "axios";
import './deed_management.css';

import AccountBalanceIcon from '@mui/icons-material/AccountBalance'; // All Deeds
import GroupIcon from '@mui/icons-material/Group'; // All Lawyers
import PersonIcon from '@mui/icons-material/Person'; // All Clients
import ScheduleIcon from '@mui/icons-material/Schedule'; // Appointment Requests
import PaymentIcon from '@mui/icons-material/Payment'; // Payment Requests

const featureInfoData = [
    {
        icon: <AccountBalanceIcon />,
        title: "All Deeds",
        
        countKey: "allDeeds"
    },
    {
        icon: <GroupIcon />,
        title: "All Lawyers",
        
        countKey: "allLawyers"
    },
    {
        icon: <PersonIcon />,
        title: "All Clients",
        
        countKey: "allClients"
    },
    {
        icon: <ScheduleIcon />,
        title: "Appointment Requests",
        
        countKey: "appointmentRequests"
    },
    {
        icon: <PaymentIcon />,
        title: "Payment Requests",
        
        countKey: "paymentRequests"
    },
];

export default function DeedDashboard() {
    const [deedCounts, setDeedCounts] = useState({
        allDeeds: 0,
        allLawyers: 0,
        allClients: 0,
        appointmentRequests: 0,
        paymentRequests: 0,
    });

    useEffect(() => {
        fetchCounts();
    }, []);

    const fetchCounts = async () => {
        try {
            const response = await axios.get("http://localhost:8070/deeds/counts");
            setDeedCounts(response.data);
        } catch (error) {
            console.error("Error fetching counts:", error);
        }
    };

    return (
        <div>
            <NavBar />
            <div className="dashboard-feature-section">
                <div className="dashboard-feature-section-top">
                    <h1>Dashboard Overview</h1>
                </div>

                <div className="dashboard-feature-section-bottom">
                    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                        {featureInfoData.map((feature) => (
                            <div key={feature.title} style={{ textAlign: "center", margin: "20px" }}>
                                <div style={{ fontSize: "48px", marginBottom: "10px" }}>{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{deedCounts[feature.countKey]}</p>
                                <p>{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
