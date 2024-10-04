import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import './deed_details.css';
import NavBar from "./Dem_NavBar.js";
import Footer from "./Dem_Footer.js";

function DemDeedDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [deed, setDeed] = useState(null);
  const [lawyers, setLawyers] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [updatedDeed, setUpdatedDeed] = useState({
    deedType: '',
    title: '',
    considerationValue: ''
  });

  useEffect(() => {
    const fetchDeedAndLawyers = async () => {
      try {
        const deedResponse = await axios.get(`http://localhost:8070/deeds/get/${id}`);
        const lawyersResponse = await axios.get("http://localhost:8070/deeds/all_Lawyers");

        setDeed(deedResponse.data.deed);
        setLawyers(lawyersResponse.data);
        setUpdatedDeed({
          deedType: deedResponse.data.deed.deedType,
          title: deedResponse.data.deed.title,
          considerationValue: deedResponse.data.deed.considerationValue
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDeedAndLawyers();
  }, [id]);

  const getLawyerNameById = (lawyerId) => {
    const lawyer = lawyers.find(lawyer => lawyer._id === lawyerId);
    return lawyer ? `${lawyer.firstName} ${lawyer.lastName}` : "No Lawyer";
  };

  const handleUpdateClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDeed({ ...updatedDeed, [name]: value });
  };

  const handleUpdateSubmit = async () => {
    try {
      await axios.put(`http://localhost:8070/deeds/update/${id}`, updatedDeed);
      setOpenDialog(false);
      navigate(0); 
    } catch (error) {
      console.error("Error updating deed:", error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this deed?")) {
      try {
        await axios.delete(`http://localhost:8070/deeds/delete/${id}`);
        navigate("/read_all_deeds"); 
      } catch (error) {
        console.error("Error deleting deed:", error);
      }
    }
  };

  if (!deed) return <p>Loading...</p>;

  return (
    <div>
      <NavBar/>
    <div className="deed-detail-container">
      
      <h2>Deed Details</h2><br/>

      <p><strong>Deed ID:</strong> {deed._id}</p>

      <div className="section-spacing">
        <p><strong>Lawyer:</strong> {getLawyerNameById(deed.assignedLawyer)}</p>
        <p><strong>Deed Type:</strong> {deed.deedType}</p>
        <p><strong>Title:</strong> {deed.title}</p>
        <p><strong>Consideration Value:</strong> {deed.considerationValue}</p>
      </div>

      <div className="section-spacing">
        <p><strong>Grantor:</strong> {deed.grantor ? `${deed.grantor.fname} ${deed.grantor.lname}` : "No Grantor"}</p>
        <p><strong>Grantor Phone:</strong> {deed.grantor ? deed.grantor.phone : "N/A"}</p>
        <p><strong>Grantor NIC:</strong> {deed.grantor ? deed.grantor.nic : "N/A"}</p>
        <p><strong>Grantor Address:</strong> {deed.grantor ? deed.grantor.address : "N/A"}</p>
      </div>

      <div className="section-spacing">
        <p><strong>Grantee:</strong> {deed.grantee ? `${deed.grantee.fname} ${deed.grantee.lname}` : "No Grantee"}</p>
        <p><strong>Grantee Phone:</strong> {deed.grantee ? deed.grantee.phone : "N/A"}</p>
        <p><strong>Grantee NIC:</strong> {deed.grantee ? deed.grantee.nic : "N/A"}</p>
        <p><strong>Grantee Address:</strong> {deed.grantee ? deed.grantee.address : "N/A"}</p>
      </div>

      <div className="section-spacing">
        <p><strong>Lawyer Fee:</strong> {deed.lawyerFee}</p>
        <p><strong>Tax Fee:</strong> {deed.taxFee}</p>
        <p><strong>Total Fee:</strong> {deed.totalFee}</p>
      </div>

      <div className="button-group">
        <button onClick={handleUpdateClick}>Update</button><br/><br/>
        <button onClick={handleDelete} >Delete</button>
      </div>

                  

      
      <Dialog open={openDialog} onClose={handleCloseDialog}
      sx={{ 
        '& .MuiDialog-paper': { 
        backgroundColor: '#f5f5f5', 
        width: '400px', 
        maxWidth: '100%', 
        }
        }}>
        <DialogTitle
        sx={{ 
          backgroundColor: '#74512D', 
          color: 'white' 
          }}
        >Edit Deed Details</DialogTitle>
        <DialogContent><br/>
          <TextField
            autoFocus
            margin="dense"
            name="deedType"
            label="Deed Type"
            type="text"
            fullWidth
            variant="outlined"
            value={updatedDeed.deedType}
            onChange={handleUpdateChange}
          />
          <TextField
            margin="dense"
            name="title"
            label="Title"
            type="text"
            fullWidth
            variant="outlined"
            value={updatedDeed.title}
            onChange={handleUpdateChange}
          />
          <TextField
            margin="dense"
            name="considerationValue"
            label="Consideration Value"
            type="number"
            fullWidth
            variant="outlined"
            value={updatedDeed.considerationValue}
            onChange={handleUpdateChange}
          />
        </DialogContent>
        <DialogActions>
          <button onClick={handleCloseDialog} 
          sx={{
            backgroundColor: '#74512D', 
            color: 'white',
            '&:hover': {
                backgroundColor: '#5a3d23' 
            }
        }}>
            Cancel
          </button>
          <button onClick={handleUpdateSubmit} 
          sx={{
            backgroundColor: '#74512D', 
            color: 'white',
            '&:hover': {
                backgroundColor: '#5a3d23' 
            }
        }}>
            Update
          </button>
        </DialogActions>
      </Dialog>
      
    </div>
    <Footer/>
    </div>
  );
}

export default DemDeedDetail;
