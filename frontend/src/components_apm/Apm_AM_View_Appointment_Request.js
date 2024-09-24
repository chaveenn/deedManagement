// created by : R.M.S.D. Rathnayake - IT22140616
import NavBar from "./Apm_NavBar";
import Footer from "./Apm_Footer";
import React, { useState } from 'react';
import './appointment_management.css';
import axios from "axios";

function Apm_Create_Appointment(){



    const [appointmentRequestName, setappointmentRequestName] = useState("");
    const [appointmentRequestDate, setappointmentRequestDate] = useState("");
    const [appointmentRequestStatus, setappointmentRequestStatus] = useState("");
    const [lawyerId, setlawyerId] = useState("");
    const [lawyerName, setlawyerName] = useState("");
    const [lawyerPhone, setlawyerPhone] = useState("");
    const [clientId, setclientId] = useState("");
    const [clientName, setclientName] = useState("");
    const [clientPhone, setclientPhone] = useState("");
    const [appointmentCreationDate, setappointmentCreationDate] = useState("");
    const [appointmentTitle, setappointmentTitle] = useState("");
    const [appointmentDescription, setappointmentDescription] = useState("");
    const [appointmentType, setappointmentType] = useState("");
    const [appointmentDate, setappointmentDate] = useState("");
    const [appointmentTime, setappointmentTime] = useState("");
    const [appointmentLocation, setappointmentLocation] = useState("");
    const [discussedPoints, setdiscussedPoints] = useState("");
    const [agreedPayment, setagreedPayment] = useState("");
    const [requestedDocuments, setrequestedDocuments] = useState("");
    const [nextAppointmentDate, setnextAppointmentDate] = useState("");
    const [appointmentStatus, setappointmentStatus] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newAppointment = {
            appointmentRequestName,
            appointmentRequestDate,
            appointmentRequestStatus,
            lawyerId,
            lawyerName,
            lawyerPhone,
            clientId,
            clientName,
            clientPhone,
            appointmentCreationDate,
            appointmentTitle,
            appointmentDescription,
            appointmentType,
            appointmentDate,
            appointmentTime,
            appointmentLocation,
            discussedPoints,
            agreedPayment,
            requestedDocuments,
            nextAppointmentDate,
            appointmentStatus
        }

        axios.post("http://localhost:8070/appointment/add-appointment", newAppointment).then(() => {
            alert("Appointment Added.. ");            
        }).catch((err) => {
            alert(err)
        })
    }

    return(
        <div className="apm-form-container">
            <NavBar />

            <hr/>

            <h2 className='apm-header'>View Appointment Request</h2>

            <form className="apm-form" onSubmit={sendData}>
                <div className="apm-form-group">
                <label className="apm-form-label" htmlFor="appointmentRequestName">
                    Request Name
                </label>
                <input
                    className="apm-form-input"
                    type="text"
                    id="appointmentRequestName"
                    name="appointmentRequestName"
                    value={appointmentRequestName}
                    onChange={(e) => setappointmentRequestName(e.target.value)}
                    required
                />
                </div>

                <div className="apm-form-group">
                <label className="apm-form-label" htmlFor="appointmentRequestDate">
                    Request Date
                </label>
                <input
                    className="apm-form-input"
                    type="date"
                    id="appointmentRequestDate"
                    name="appointmentRequestDate"
                    value={appointmentRequestDate}
                    onChange={(e) => setappointmentRequestDate(e.target.value)}
                    required
                />
                </div>

                <div className="apm-form-group" hidden="true">
                <label className="apm-form-label" htmlFor="appointmentRequestStatus">
                    Request Status
                </label>
                <input
                    className="apm-form-input"
                    type="date"
                    id="appointmentRequestStatus"
                    name="appointmentRequestStatus"
                    value={appointmentRequestStatus}
                    onChange={(e) => setappointmentRequestStatus(e.target.value)}
                    required
                />
                </div>   

                <div className="apm-form-group">
                <label className="apm-form-label" htmlFor="lawyerId">
                    Lawyer ID
                </label>
                <input
                    className="apm-form-input"
                    type="text"
                    id="lawyerId"
                    name="lawyerId"
                    value={lawyerId}
                    onChange={(e) => setlawyerId(e.target.value)}
                    required
                />
                </div>
                
                <div className="apm-form-group">
                <label className="apm-form-label" htmlFor="lawyerName">
                    Lawyer Name
                </label>
                <input
                    className="apm-form-input"
                    type="text"
                    id="lawyerName"
                    name="lawyerName"
                    value={lawyerName}
                    onChange={(e) => setlawyerName(e.target.value)}
                    required
                />
                </div>

                <div className="apm-form-group">
                <label className="apm-form-label" htmlFor="lawyerPhone">
                    Lawyer Phone
                </label>
                <input
                    className="apm-form-input"
                    type="text"
                    id="lawyerPhone"
                    name="lawyerPhone"
                    value={lawyerPhone}
                    onChange={(e) => setlawyerPhone(e.target.value)}
                    required
                />
                </div>

                <div className="apm-form-group">
                <label className="apm-form-label" htmlFor="clientId">
                    Client ID
                </label>
                <input
                    className="apm-form-input"
                    type="text"
                    id="clientId"
                    name="clientId"
                    value={clientId}
                    onChange={(e) => setclientId(e.target.value)}
                    required
                />
                </div>

                <div className="apm-form-group">
                <label className="apm-form-label" htmlFor="clientName">
                    Client Name
                </label>
                <input
                    className="apm-form-input"
                    type="text"
                    id="clientName"
                    name="clientName"
                    value={clientName}
                    onChange={(e) => setclientName(e.target.value)}
                    required
                />
                </div>

                <div className="apm-form-group">
                <label className="apm-form-label" htmlFor="clientPhone">
                    Client Phone
                </label>
                <input
                    className="apm-form-input"
                    type="text"
                    id="clientPhone"
                    name="clientPhone"
                    value={clientPhone}
                    onChange={(e) => setclientPhone(e.target.value)}
                    required
                />
                </div>

                <div className="apm-form-group">
                <label className="apm-form-label" htmlFor="appointmentType">
                    Appointment Type
                </label>
                <select
                    className="apm-form-input-select"
                    id="appointmentType"
                    name="appointmentType"
                    value={appointmentType}
                    onChange={(e) => setappointmentType(e.target.value)}
                    required
                >
                    <option value="">Select Type</option>
                    <option value="consultation">Consultation</option>
                    <option value="meeting">Meeting</option>
                    <option value="other">Other</option>
                </select>
                </div>

                <div className="apm-form-group">
                <label className="apm-form-label" htmlFor="appointmentDate">
                    Appointment Date
                </label>
                <input
                    className="apm-form-input"
                    type="date"
                    id="appointmentDate"
                    name="appointmentDate"
                    value={appointmentDate}
                    onChange={(e) => setappointmentDate(e.target.value)}
                    required
                />
                </div>

                <div className="apm-form-group">
                <label className="apm-form-label" htmlFor="appointmentTime">
                    Appointment Time
                </label>
                <input
                    className="apm-form-input"
                    type="time"
                    id="appointmentTime"
                    name="appointmentTime"
                    value={appointmentTime}
                    onChange={(e) => setappointmentTime(e.target.value)}   

                    required
                />
                </div>

                <div className="apm-form-group">
                <label className="apm-form-label" htmlFor="appointmentLocation">
                    Appointment Location
                </label>
                <input
                    className="apm-form-input"
                    type="text"
                    id="appointmentLocation"
                    name="appointmentLocation"
                    value={appointmentLocation}
                    onChange={(e) => setappointmentLocation(e.target.value)}
                    required
                />
                </div>


                <hr className="form-divider"/>

                <div className="apm-form-group">
                    <p className="form-divider-text">Enter required information to create appointment</p>
                </div>


                <div className="apm-form-group">
                <label className="apm-form-label" htmlFor="appointmentCreationDate">
                    Appointment Creation Date
                </label>
                <input
                    className="apm-form-input"
                    type="date"
                    id="appointmentCreationDate"
                    name="appointmentCreationDate"
                    value={appointmentCreationDate}
                    onChange={(e) => setappointmentCreationDate(e.target.value)}
                    required
                />
                </div>

                <div className="apm-form-group">
                <label className="apm-form-label" htmlFor="appointmentTitle">
                    Appointment Title
                </label>
                <input
                    className="apm-form-input"
                    type="text"
                    id="appointmentTitle"
                    name="appointmentTitle"
                    value={appointmentTitle}
                    onChange={(e) => setappointmentTitle(e.target.value)}
                    required
                />
                </div>

                <div className="apm-form-group">
                <label className="apm-form-label" htmlFor="appointmentDescription">
                    Appointment Description
                </label>
                <textarea
                    className="apm-form-input-textarea"
                    id="appointmentDescription"
                    name="appointmentDescription"
                    value={appointmentDescription}
                    onChange={(e) => setappointmentDescription(e.target.value)}
                    required
                >

                </textarea>
                </div>

                

                <div className="apm-form-group">
                <label className="apm-form-label" htmlFor="discussedPoints">
                    Discussed Points
                </label>
                <textarea
                    className="apm-form-input-textarea"
                    id="discussedPoints"
                    name="discussedPoints"
                    value={discussedPoints}
                    onChange={(e) => setdiscussedPoints(e.target.value)}
                    required>
                </textarea>
                </div>

                <div className="apm-form-group">
                <label className="apm-form-label" htmlFor="agreedPayment">
                    Agreed Payment
                </label>
                <input
                    className="apm-form-input"
                    type="text"
                    id="agreedPayment"
                    name="agreedPayment"
                    value={agreedPayment}
                    onChange={(e) => setagreedPayment(e.target.value)}
                    required
                />
                </div>

                <div className="apm-form-group">
                <label className="apm-form-label" htmlFor="requestedDocuments">
                    Requested Documents
                </label>
                <textarea
                    className="apm-form-input-textarea"
                    id="requestedDocuments"
                    name="requestedDocuments"
                    value={requestedDocuments}
                    onChange={(e) => setrequestedDocuments(e.target.value)}
                    required
                ></textarea>
                </div>

                <div className="apm-form-group">
                <label className="apm-form-label" htmlFor="nextAppointmentDate">
                    Next Appointment Date
                </label>
                <input
                    className="apm-form-input"
                    type="date"
                    id="nextAppointmentDate"
                    name="nextAppointmentDate"
                    value={nextAppointmentDate}
                    onChange={(e) => setnextAppointmentDate(e.target.value)}
                    required
                />
                </div>

                <div className="apm-form-group" hidden="true">
                <label className="apm-form-label" htmlFor="appointmentStatus">
                    Appointment Status
                </label>
                <select
                    className="apm-form-input"
                    id="appointmentStatus"
                    name="appointmentStatus"
                    value="Pending"
                    onChange={(e) => setappointmentStatus(e.target.value)}
                    required
                >
                    <option value="">Select Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>  

                </select>
                </div>

                <button className='apm-form-button' type="submit">Submit</button>
            </form>

            <Footer/>
        </div>        
    )
}

export default Apm_Create_Appointment;