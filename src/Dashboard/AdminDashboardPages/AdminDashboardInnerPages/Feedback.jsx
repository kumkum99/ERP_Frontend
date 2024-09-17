import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'; 
import './PagesCss.css';  
import NavbarComponent from '../../../components/DashboardHeader/Nav';
import Sidebar from '../../AdminDashboardPages/AdminSidebar';

const Feedback = () => {
    const [getuserdata, setUserdata] = useState([]);

    const getdata = async () => {
        try {
            const res = await fetch("https://erpunity-production.up.railway.app/feedback", { // API endpoint for feedback data
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.message || "Failed to fetch data");
            }

            const data = await res.json();
            setUserdata(data);
            console.log("Data fetched successfully", data);
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };

    useEffect(() => {
        getdata();
    }, []);

    return (
        <>
            <div className="d-flex flex-column feedback-page">
                <NavbarComponent />
                <div className="d-flex flex-grow-1">
                    <Sidebar />
                    <main className="flex-grow-1 p-4">
                        <Container fluid>
                        <div id="payment-table-container" className='col-xl-10 col-lg-9 col-md-6 col-sm-12'>
                            <div id="payment-header" className='card-8 rounded-border mb-4'>
                                <h1><i className="fa fa-comments" style={{ fontSize: "30px" }}></i> Feedback</h1>
                                <hr />
                            </div>
                                <div className="card-5">
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr className="table-active">
                                                    <th scope="col"><h5>Id</h5></th>
                                                    <th scope="col"><h5>Username</h5></th>
                                                    <th scope="col"><h5>Email</h5></th>
                                                    <th scope="col"><h5>Number</h5></th>
                                                    <th scope="col"><h5>Message</h5></th>
                                                    <th scope="col"><h5>Date</h5></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {getuserdata.map((element, index) => (
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{element.name}</td>
                                                        <td>{element.email}</td>
                                                        <td>{element.phone}</td>
                                                        <td>{element.message}</td>
                                                        <td>{element.date}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </main>
                </div>
            </div>
        </>
    );
};

export default Feedback;
