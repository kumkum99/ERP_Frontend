import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        username: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const nextStep = () => setStep(prevStep => prevStep + 1);
    const prevStep = () => setStep(prevStep => prevStep - 1);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            console.log('Submitting form with data:', formData);
            const response = await axios.post('http://localhost:5000/api/register', formData);
            console.log('User registered successfully:', response.data);
            alert('User registered successfully. Please login!');
            navigate('/login');
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred while registering the user.');
        } finally {
            setLoading(false);
        }
    };

    const getStepClass = (currentStep) => {
        return step >= currentStep ? 'sumit-step active' : 'sumit-step';
    };

    return (
        <div className="Signup-Container">
            <div className="sumit-container">
                <header>Signup Form</header>
                
                {/* Progress Bar */}
                <div className="sumit-progress-bar">
                    <div className={getStepClass(1)}>
                        <p>Name</p>
                        <div className="sumit-bullet">
                            <span>1</span>
                        </div>
                        <div className="sumit-check fas fa-check"></div>
                    </div>
                    <div className={getStepClass(2)}>
                        <p>Contact</p>
                        <div className="sumit-bullet">
                            <span>2</span>
                        </div>
                        <div className="sumit-check fas fa-check"></div>
                    </div>
                    <div className={getStepClass(3)}>
                        <p>Birth</p>
                        <div className="sumit-bullet">
                            <span>3</span>
                        </div>
                        <div className="sumit-check fas fa-check"></div>
                    </div>
                    <div className={getStepClass(4)}>
                        <p>Submit</p>
                        <div className="sumit-bullet">
                            <span>4</span>
                        </div>
                        <div className="sumit-check fas fa-check"></div>
                    </div>
                </div>
                
                {/* Form */}
                <div className="sumit-form-outer">
                    <form onSubmit={handleSubmit}>
                        {/* Step 1 */}
                        {step === 1 && (
                            <div className="sumit-page sumit-slide-page">
                                <div className="sumit-title">Basic Info:</div>
                                <div className="sumit-field">
                                    <div className="sumit-label">First Name</div>
                                    <input
                                        type="text"
                                        name="firstname"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="sumit-field">
                                    <div className="sumit-label">Last Name</div>
                                    <input
                                        type="text"
                                        name="lastname"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="sumit-field">
                                    <button type="button" className="sumit-next" onClick={nextStep}>
                                        Next
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 2 */}
                        {step === 2 && (
                            <div className="sumit-page sumit-slide-page">
                                <div className="sumit-title">Contact Info:</div>
                                <div className="sumit-field">
                                    <div className="sumit-label">Email Address</div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="sumit-field">
                                    <div className="sumit-label">Phone Number</div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="sumit-field sumit-btns">
                                    <button type="button" className="sumit-prev" onClick={prevStep}>
                                        Previous
                                    </button>
                                    <button type="button" className="sumit-next" onClick={nextStep}>
                                        Next
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 3 */}
                        {step === 3 && (
                            <div className="sumit-page sumit-slide-page">
                                <div className="sumit-title">Date of Birth:</div>
                                <div className="sumit-field">
                                    <div className="sumit-label">Date</div>
                                    <input
                                        type="date"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="sumit-field">
                                    <div className="sumit-label">Gender</div>
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="sumit-field sumit-btns">
                                    <button type="button" className="sumit-prev" onClick={prevStep}>
                                        Previous
                                    </button>
                                    <button type="button" className="sumit-next" onClick={nextStep}>
                                        Next
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 4 */}
                        {step === 4 && (
                            <div className="sumit-page sumit-slide-page">
                                <div className="sumit-title">Login Details:</div>
                                <div className="sumit-field">
                                    <div className="sumit-label">Username</div>
                                    <input
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="sumit-field">
                                    <div className="sumit-label">Password</div>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="sumit-field sumit-btns">
                                    <button type="button" className="sumit-prev" onClick={prevStep}>
                                        Previous
                                    </button>
                                    <button type="submit" className="sumit-submit" disabled={loading}>
                                      {loading ? 'Submitting...' : 'Submit'}
                                    </button>
                                </div>
                                {error && <p className="error-message">{error}</p>}
                            </div>
                        )}
                    </form>
                </div>
                <p>If you are already registered, login <a href="/login" className="loginAnchor">here</a></p>
            </div>
        </div>
    );
};

export default Signup;
