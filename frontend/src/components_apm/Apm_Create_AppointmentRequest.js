// created by : R.M.S.D. Rathnayake - IT22140616
import NavBar from "../components_apm/Apm_NavBar"
import Footer from "../components_apm/Apm_Footer"
import React, { useState } from 'react';
import './appointment_management.css';
import axios from "axios";

function Apm_Create_AppointmentRequest(){
    const currentLawyerId = "MDBidLawyer001"
    const currentLawyerName = "Yoshini Jayasinghe"
    const currentLawyerPhone = "0777111222333"

    const searchedClientId = "MDBidClient009"
    const searchedClientName = "Enith Samarasekara"
    const searchedClientPhone = "0777555666777"

    const [appointmentRequestName, setappointmentRequestName] = useState("");
    const [appointmentRequestDate, setappointmentRequestDate] = useState("");
    const [appointmentRequestStatus, setappointmentRequestStatus] = useState("");
    const [lawyerId, setlawyerId] = useState(currentLawyerId);
    const [lawyerName, setlawyerName] = useState(currentLawyerName);
    const [lawyerPhone, setlawyerPhone] = useState(currentLawyerPhone);
    const [clientId, setclientId] = useState(searchedClientId);
    const [clientName, setclientName] = useState(searchedClientName);
    const [clientPhone, setclientPhone] = useState(searchedClientPhone);
    const [appointmentType, setappointmentType] = useState("");
    const [appointmentDate, setappointmentDate] = useState("");
    const [appointmentTime, setappointmentTime] = useState("");
    const [appointmentLocation, setappointmentLocation] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newAppointmentRequest = {
            appointmentRequestName,
            appointmentRequestDate,
            appointmentRequestStatus,
            lawyerId,
            lawyerName,
            lawyerPhone,
            clientId,
            clientName,
            clientPhone,
            appointmentType,
            appointmentDate,
            appointmentTime,
            appointmentLocation
        }

        axios.post("http://localhost:8070/appointmentrequest/add-appointment-request", newAppointmentRequest).then(() => {
            alert("Appointment Request Added..");            
        }).catch((err) => {
            alert(err)
        })
    }

    return(
        <div className="apm-form-container">
        <NavBar />

        <hr/>

        <h2 className='apm-header'>Appointment Request Creation Form</h2>

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
                    type="text"
                    id="appointmentRequestStatus"
                    name="appointmentRequestStatus"
                    value="Pending"
                    onChange={(e) => setappointmentRequestStatus(e.target.value)}
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
                type="tel"
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
                type="tel"
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
            <button className='apm-form-button' type="submit">Submit</button>
        </form>
        <Footer/>
        </div>
    )
}

export default Apm_Create_AppointmentRequest;