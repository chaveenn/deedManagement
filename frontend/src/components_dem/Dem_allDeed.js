import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import NavBar from "./Dem_NavBar.js";
import Footer from "./Dem_Footer.js";
import './deed_management.css';

function AllDeed() {
  const [deeds, setDeeds] = useState([]);
  const [lawyers, setLawyers] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch deeds and lawyers
  useEffect(() => {
    const fetchData = async () => {
      try {
        const deedsResponse = await axios.get("http://localhost:8070/deeds/");
        const lawyersResponse = await axios.get("http://localhost:8070/deeds/all_Lawyers");
        
        setDeeds(deedsResponse.data);
        setLawyers(lawyersResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Get lawyer's name by ID
  const getLawyerNameById = (id) => {
    const lawyer = lawyers.find(lawyer => lawyer._id === id);
    return lawyer ? `${lawyer.firstName} ${lawyer.lastName}` : "No Lawyer";
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this deed?")) {
      axios.delete(`http://localhost:8070/deeds/delete/${id}`)
        .then(response => {
          console.log("Deed deleted:", response.data);
          setDeeds(deeds.filter(deed => deed._id !== id));
        })
        .catch(error => console.error("Error deleting deed:", error));
    }
  };

  const handleView = (id) => {
    navigate(`/deed/${id}`); // Redirect to DeedDetails page with ID
  };

  return (
    <div>
      <NavBar />
      
      <div className="table-container">
        <TableContainer component={Paper}>
          <Table aria-label="Deeds Table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Deed Number</TableCell>
                <TableCell align="left">Lawyer Name</TableCell>
                <TableCell align="left">Deed Type</TableCell>
                <TableCell align="left">Grantor</TableCell>
                <TableCell align="left">Grantee</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {deeds.map((deed) => (
                <TableRow key={deed._id}>
                  <TableCell align="left">{deed.deedNo}</TableCell>
                  <TableCell align="left">{getLawyerNameById(deed.assignedLawyer)}</TableCell>
                  <TableCell align="left">{deed.deedType}</TableCell>
                  <TableCell align="left">{deed.grantor ? `${deed.grantor.fname} ${deed.grantor.lname}` : "No Grantor"}</TableCell>
                  <TableCell align="left">{deed.grantee ? `${deed.grantee.fname} ${deed.grantee.lname}` : "No Grantee"}</TableCell>
                  <TableCell align="left">{deed.title}</TableCell>
                  <TableCell align="center">
                    <button onClick={() => handleView(deed._id)}>View</button>
                    <button onClick={() => handleDelete(deed._id)} style={{ marginLeft: '10px' }}>Delete</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Footer />
    </div>
  );
}

export default AllDeed;
