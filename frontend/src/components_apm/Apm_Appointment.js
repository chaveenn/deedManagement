import NavBar from "../components_apm/Apm_NavBar";
import Footer from "../components_apm/Apm_Footer";
import React, { useState, useEffect } from 'react';
import './appointment_management.css';
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';

function Apm_View_Appointment() {
    const { id } = useParams(); 
    const navigate = useNavigate(); // to navigate after update
    const [appointment, setAppointment] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8070/appointment/appointment/${id}`)
            .then((response) => {
                setAppointment(response.data);
            })
            .catch((err) => {
                console.error(err);
                alert("Error in fetching appointment data");
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAppointment(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8070/appointment/update-appointment/${id}`, appointment)
            .then((response) => {
                alert("Appointment Updated Successfully");
                navigate(`/all-appointments`); // Replace with your desired path after success
            })
            .catch((err) => {
                console.error(err);
                alert("Error in updating appointment");
            });
    };

    if (!appointment) {
        return <div>Loading...</div>;
    }

    return (
        <div className="apm-form-container">
            <NavBar />
            <hr />
            <h2 className='apm-header'>Appointment Details</h2>

            <form className="apm-form" onSubmit={handleSubmit}>
                <div className="apm-form-group">
                    <label className='apm-form-label' htmlFor="requestID">Request ID</label>
                    <input className='apm-form-input'
                        type="text"
                        id="requestID"
                        name="requestID"
                        value={appointment.requestID}
                        onChange={handleChange}
                    />
                </div>
                <div className="apm-form-group">
                    <label className='apm-form-label' htmlFor="appointmentRequestDate">Request Date</label>
                    <input className='apm-form-input'
                        type="date"
                        id="appointmentRequestDate"
                        name="appointmentRequestDate"
                        value={new Date(appointment.appointmentRequestDate).toISOString().split('T')[0]}
                        onChange={handleChange}
                    />
                </div>
                <div className="apm-form-group">
                    <label className='apm-form-label' htmlFor="lawyerId">Lawyer ID</label>
                    <input className='apm-form-input'
                        type="text"
                        id="lawyerId"
                        name="lawyerId"
                        value={appointment.lawyerId}
                        onChange={handleChange}
                    />
                </div>
                <div className="apm-form-group">
                    <label className='apm-form-label' htmlFor="clientId">Client ID</label>
                    <input className='apm-form-input'
                        type="text"
                        id="clientId"
                        name="clientId"
                        value={appointment.clientId}
                        onChange={handleChange}
                    />
                </div>
                <div className="apm-form-group">
                    <label className='apm-form-label' htmlFor="clientPhone">Client Phone</label>
                    <input className='apm-form-input'
                        type="text"
                        id="clientPhone"
                        name="clientPhone"
                        value={appointment.clientPhone}
                        onChange={handleChange}
                    />
                </div>
                <div className="apm-form-group">
                    <label className='apm-form-label' htmlFor="appointmentType">Appointment Type</label>
                    <input className='apm-form-input'
                        type="text"
                        id="appointmentType"
                        name="appointmentType"
                        value={appointment.appointmentType}
                        onChange={handleChange}
                    />
                </div>
                <div className="apm-form-group">
                    <label className='apm-form-label' htmlFor="appointmentDate">Appointment Date</label>
                    <input className='apm-form-input'
                        type="date"
                        id="appointmentDate"
                        name="appointmentDate"
                        value={new Date(appointment.appointmentDate).toISOString().split('T')[0]}
                        onChange={handleChange}
                    />
                </div>
                <div className="apm-form-group">
                    <label className='apm-form-label' htmlFor="appointmentTime">Appointment Time</label>
                    <input className='apm-form-input'
                        type="time"
                        id="appointmentTime"
                        name="appointmentTime"
                        value={appointment.appointmentTime}
                        onChange={handleChange}
                    />
                </div>
                <div className="apm-form-group">
                    <label className='apm-form-label' htmlFor="title">Title</label>
                    <input className='apm-form-input'
                        type="text"
                        id="title"
                        name="title"
                        value={appointment.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="apm-form-group">
                    <label className='apm-form-label' htmlFor="description">Description</label>
                    <textarea className='apm-form-input-textarea'
                        id="description"
                        name="description"
                        value={appointment.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="apm-form-group">
                    <label className='apm-form-label' htmlFor="location">Location</label>
                    <input className='apm-form-input'
                        type="text"
                        id="location"
                        name="location"
                        value={appointment.location}
                        onChange={handleChange}
                    />
                </div>
                <div className="apm-form-group">
                    <label className='apm-form-label' htmlFor="discussedPoints">Discussed Points</label>
                    <textarea className='apm-form-input-textarea'
                        id="discussedPoints"
                        name="discussedPoints"
                        value={appointment.discussedPoints}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="apm-form-group">
                    <label className='apm-form-label' htmlFor="agreedPayment">Agreed Payment</label>
                    <input className='apm-form-input'
                        type="text"
                        id="agreedPayment"
                        name="agreedPayment"
                        value={appointment.agreedPayment}
                        onChange={handleChange}
                    />
                </div>
                <div className="apm-form-group">
                    <label className='apm-form-label' htmlFor="requestedDocuments">Requested Documents</label>
                    <textarea className='apm-form-input-textarea'
                        id="requestedDocuments"
                        name="requestedDocuments"
                        value={appointment.requestedDocuments}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="apm-form-group">
                    <label className='apm-form-label' htmlFor="nextAppointmentDate">Next Appointment Date</label>
                    <input className='apm-form-input'
                        type="date"
                        id="nextAppointmentDate"
                        name="nextAppointmentDate"
                        value={new Date(appointment.nextAppointmentDate).toISOString().split('T')[0]}
                        onChange={handleChange}
                    />
                </div>
                <div className="apm-form-group">
                    <label className='apm-form-label' htmlFor="appointmentStatus">Appointment Status</label>
                    <input className='apm-form-input'
                        type="text"
                        id="appointmentStatus"
                        name="appointmentStatus"
                        value={appointment.appointmentStatus}
                        onChange={handleChange}
                    />  
                </div>
                <div className="apm-button-box">
                        <button type="submit" className="apm-table-link-button">Update Appointment</button>
                        <a className="apm-table-negative-button" href="/">Cancel Appointment</a>
                </div> 
            </form>

            <Footer />
        </div>
    );
}

export default Apm_View_Appointment;
