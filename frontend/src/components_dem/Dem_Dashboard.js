import React, { useState, useEffect } from "react";
import NavBar from "./Dem_NavBar";
import Footer from "./Dem_Footer";
import axios from "axios";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, Select, MenuItem } from "@mui/material";

import AccountBalanceIcon from '@mui/icons-material/AccountBalance'; // All Deeds
import GroupIcon from '@mui/icons-material/Group'; // All Lawyers
import PersonIcon from '@mui/icons-material/Person'; // All Clients
import ScheduleIcon from '@mui/icons-material/Schedule'; // Appointment Requests
import PaymentIcon from '@mui/icons-material/Payment'; // Payment Requests
import './deed_management.css';

const featureInfoData = [
    {
        icon: <AccountBalanceIcon />,
        title: "Deeds",
        countKey: "allDeeds"
    },
    {
        icon: <GroupIcon />,
        title: "Lawyers",
        countKey: "allLawyers"
    },
    {
        icon: <PersonIcon />,
        title: "Clients",
        countKey: "allClients"
    },
    {
        icon: <ScheduleIcon />,
        title: "Appointment",
        countKey: "appointmentRequests"
    },
    {
        icon: <PaymentIcon />,
        title: "Payment",
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
    const [nonRegisteredDeeds, setNonRegisteredDeeds] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedDeed, setSelectedDeed] = useState(null);
    const [newStatus, setNewStatus] = useState('');

    useEffect(() => {
        fetchCounts();
        fetchNonRegisteredDeeds();
    }, []);

    const fetchCounts = async () => {
        try {
            const response = await axios.get("http://localhost:8070/deeds/counts");
            setDeedCounts(response.data);
        } catch (error) {
            console.error("Error fetching counts:", error);
        }
    };

    const fetchNonRegisteredDeeds = async () => {
        try {
            const response = await axios.get("http://localhost:8070/deeds/nonRegisteredDeeds");
            setNonRegisteredDeeds(response.data);
        } catch (error) {
            console.error("Error fetching deeds:", error);
        }
    };

    const handleOpenDialog = (deed) => {
        setSelectedDeed(deed);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedDeed(null);
    };

    const handleStatusChange = async () => {
        try {
            await axios.put(`http://localhost:8070/deeds/updateStatus/${selectedDeed._id}`, { deedStatus: newStatus });
            fetchNonRegisteredDeeds(); // Refresh the deed list after status update
            handleCloseDialog();
        } catch (error) {
            console.error("Error updating deed status:", error);
        }
    };

    return (
        <div>
            <NavBar />
            <div className="dashboard-feature-section">
            <p className="apm-user-welcome">Hello @User</p>

                <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                    {featureInfoData.map((feature) => (
                        <div key={feature.title} style={{ textAlign: "center", margin: "20px" }}>
                            <div style={{ fontSize: "48px", marginBottom: "10px" }}>{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{deedCounts[feature.countKey]}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Table to display deeds that are not registered */}
            <div className="dem-table-container">
                <h3>Current Deeds</h3><br/>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow className="dem-table-summary-row">
                                <TableCell align="left" className="dem-table-summary-header">Deed Number</TableCell>
                                <TableCell align="left" className="dem-table-summary-header">Assigned Lawyer</TableCell>
                                <TableCell align="left" className="dem-table-summary-header">Grantor</TableCell>
                                <TableCell align="left" className="dem-table-summary-header">Grantee</TableCell>
                                <TableCell align="left" className="dem-table-summary-header">Deed Status</TableCell>
                                <TableCell align="center" className="dem-table-summary-header">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {nonRegisteredDeeds.map((deed) => (
                                <TableRow key={deed._id} className="dem-table-summary-row">
                                    <TableCell align="left" className="dem-table-summary-data">{deed.deedNo}</TableCell>
                                    <TableCell align="left" className="dem-table-summary-data">{`${deed.assignedLawyer.firstName} ${deed.assignedLawyer.lastName}`}</TableCell>
                                    <TableCell align="left" className="dem-table-summary-data">{`${deed.grantor.fname} ${deed.grantor.lname}`}</TableCell>
                                    <TableCell align="left" className="dem-table-summary-data">{`${deed.grantee.fname} ${deed.grantee.lname}`}</TableCell>
                                    <TableCell align="left" className="dem-table-summary-data">{deed.deedStatus}</TableCell>
                                    <TableCell align="center" className="dem-table-summary-action">
                                        <Button onClick={() => handleOpenDialog(deed)}>Change Status</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>
            </div>

            {/* Dialog box for changing the status */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Change Deed Status</DialogTitle>
                <DialogContent>
                    <Select
                        value={newStatus}
                        onChange={(e) => setNewStatus(e.target.value)}
                        fullWidth
                    >
                        <MenuItem value="Approved">Approved</MenuItem>
                        <MenuItem value="Rejected">Rejected</MenuItem>
                        <MenuItem value="Registered">Registered</MenuItem>
                        <MenuItem value="Completed">Completed</MenuItem>
                    </Select>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={handleStatusChange}>Update</Button>
                </DialogActions>
            </Dialog>

            <Footer />
        </div>
    );
}
