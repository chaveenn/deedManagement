import NavBar from "../components_apm/Apm_NavBar";
import Footer from "../components_apm/Apm_Footer";
import React, {useState, useEffect}from "react";
import axios from 'axios';

function Dashboard(){

    const [appointmentrequest, setAppointmentRequests] = useState([])
    const [appointment, setAppointments] = useState([])

    useEffect(() => {
        function getAppointmentRequests(){
            axios.get("http://localhost:8070/appointmentrequest/appointment-requests").then((res) => {
                console.log(res.data);
                setAppointmentRequests(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getAppointmentRequests();
    }, [])

    useEffect(() => {
        function getAppointments(){
            axios.get("http://localhost:8070/appointment/appointments").then((res) => {
                console.log(res.data);
                setAppointments(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getAppointments();
    }, [])

    
       return (
        <div>
            <NavBar />
            <hr />

            <div className="apm-container">
            
            <h1 className="apm-header">Appointment Manager Dashboard</h1>
            <p className="apm-user-welcome">Welcome Dinuka Rathnayake..</p>

            <h2>Received Appointment Requests</h2>
            <table border='1' className="apm-summary-table">
                <thead>
                    <tr className="apm-summary-table-row">
                        <th className="apm-summary-table-header">Request Date</th>
                        <th className="apm-summary-table-header">Request Name</th>
                        <th className="apm-summary-table-header">Lawyer Name</th>
                        <th className="apm-summary-table-header">Lawyer Mobile</th>
                        <th className="apm-summary-table-header">Client Name</th>
                        <th className="apm-summary-table-header">Type</th>
                        <th className="apm-summary-table-header">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointmentrequest.map(appointmentrequest => {
                            return (
                            <tr className="apm-summary-table-row" key={appointmentrequest._id}>
                                <td className="apm-summary-table-data">{appointmentrequest.appointmentRequestDate}</td>
                                <td className="apm-summary-table-data">{appointmentrequest.appointmentRequestName}</td>
                                <td className="apm-summary-table-data">{appointmentrequest.lawyerName}</td>
                                <td className="apm-summary-table-data">{appointmentrequest.lawyerPhone}</td>
                                <td className="apm-summary-table-data">{appointmentrequest.clientName}</td>
                                <td className="apm-summary-table-data">{appointmentrequest.appointmentType}</td>
                                <td className="apm-summary-table-action"><a className="apm-summary-table-button" href={`/appointment-request/${appointmentrequest._id}`} >View Request</a></td>
                            </tr>          
                        )})
                    }
                </tbody>
            </table>

            <a className="apm-view-button"href="/all-appointment-requests">View Previous Appointment Requests</a>


            <h2>Upcoming Appointments</h2>

            <table border='1' className="apm-summary-table">
                <thead>
                    <tr className="apm-summary-table-row">
                        <th className="apm-summary-table-header">Appointment Date</th>
                        <th className="apm-summary-table-header">Appointment Name</th>                     
                        <th className="apm-summary-table-header">Lawyer Name</th>
                        <th className="apm-summary-table-header">Lawyer Mobile</th>
                        <th className="apm-summary-table-header">Client Name</th>
                        <th className="apm-summary-table-header">Type</th>
                        <th className="apm-summary-table-header">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointment.map(appointment => {
                            return (
                            <tr className="apm-summary-table-row" key={appointment._id}>
                                <td className="apm-summary-table-data">{appointment.appointmentDate}</td>
                                <td className="apm-summary-table-data">{appointment.appointmentTitle}</td>
                                <td className="apm-summary-table-data">{appointment.lawyerName}</td>
                                <td className="apm-summary-table-data">{appointment.lawyerPhone}</td>
                                <td className="apm-summary-table-data">{appointment.clientName}</td>
                                <td className="apm-summary-table-data">{appointment.appointmentType}</td>
                                <td className="apm-summary-table-action"><a className="apm-summary-table-button" href={`/appointment/${appointment._id}`}>View Request</a></td>
                            </tr>          
                        )})                        
                    }
                </tbody>
            </table>

            <a className="apm-view-button" href="/all-appointments">View Previous Appointmens</a>

            </div>
            <Footer/>
        </div>
    )
}

export default Dashboard;