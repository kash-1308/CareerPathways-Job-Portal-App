import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './SignUp.css';
import IMG from './Signup4.png';
import Navbar from './../../components/Navbar/Navbar'
import Footer from './../../components/Footer/Footer'          

const Signup = () => {
    const [role, setRole] = useState('Job Seeker');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [jobRole, setJobRole] = useState('');
    const [companyName, setCompanyName] = useState('');

    const isUsernameValid = (username) => {
        const validUsernamePattern = /^[a-zA-Z0-9_]+$/;
        return validUsernamePattern.test(username);
    };

    const isEmailValid = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleSignup = (e) => {
        e.preventDefault();

        if (!isUsernameValid(username)) {           
            toast.error('Username can only contain letters, numbers, and underscores ❤️');                            
            return;
        }

        if (!isEmailValid(email)) {
            toast.error('Please enter a valid email address ❤️');
            return;
        }

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long ❤️');
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Passwords do not match ❤️');
            return;
        }

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        const isUsernameTaken = existingUsers.some(user => user.username === username);
        if (isUsernameTaken) {
            toast.error('Username already taken ❤️');
            return;
        }

        const userData = { username, email, password, role, jobRole, companyName };
        existingUsers.push(userData);
        localStorage.setItem('users', JSON.stringify(existingUsers));

        toast.success(`${role.charAt(0).toUpperCase() + role.slice(1)} signed up successfully 💚`);


    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setJobRole('');
    setCompanyName('');

        };

        return (
            <>
            <Navbar/>
            <br></br>
            <div className="signup-main-container">
                <div className="left-side">
                <div className="welcome-text">
                <h1 className="linear-text">
                        Register Now ✨
                    </h1>
                    </div>
                <form onSubmit={handleSignup}>
                    <div className="group-form">
                    <div className='field-text'>
                    <label className="field-text">Select Role</label>         
    
                    
                        <select className="select" value={role} onChange={(e) => setRole(e.target.value)}>
                            <option   value="Job Seeker">Job Seeker</option>
                            <option   value="Recruiter">Recruiter</option>
                        </select>
                        </div>
                    </div>
    
                    <div className="group-form">
                        <label  className="text-feild">Username</label>
                        
                        <input
                        placeholder='Enter your username'
                            type="text"
                            className="Information" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        
                    </div>
                    <div className="group-form">
                        <label  className="text-feild">Email</label>
                        
                        <input
                        placeholder='Enter your email'
                            type="email"
                            className="Information" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        
                    </div>
                    {role === 'Recruiter' && (
                        <>
                            <div className="group-form">
                                <label  className="text-feild">Job Role Vacancy</label>
                                
                                <input
                                placeholder='Enter job role vacancy'
                                    type="text"
                                    className="Information" 
                                    value={jobRole}
                                    onChange={(e) => setJobRole(e.target.value)}
                                    required
                                />
                            
                            </div>
                            <div className="group-form">
                                <label  className="text-feild">Company Name</label>
                              
                                <input
                                placeholder='Enter your company name'
                                    type="text"
                                    className="Information" 
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    required
                                />
                                
                            </div>
                        </>
                    )}
                    {role === 'Job Seeker' && (
                        <div className="group-form">
                            <label  className="text-feild">Job Role Needed</label>
                           
                            <input
                            placeholder='Enter job role need'
                                type="text"
                                className="Information" 
                                value={jobRole}
                                onChange={(e) => setJobRole(e.target.value)}
                            />
                        
                        </div>
                    )}
                    <div className="group-form">
                        <label  className="text-feild">Password 🔒</label>  
                                                                              
                        <input
                        placeholder='Enter the password'
                            type="password"
                            className="Information" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        
                   </div>
                    <div className="group-form">
                        <label  className="text-feild">Confirm Password 🔒</label>
                      
                        <input
                        placeholder='Re-enter the password'
                            type="password"
                            className="Information" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                      
                    </div>
                    <button type="submit" className="signup-btn">Register</button>

                    <h2 className='Existing-user'>Existing User? <button className='signup-btn' onClick={() => window.location.href = '/Login'}>Login</button></h2>
                </form>
                <Toaster />
                
            </div>
            
            <div className="right-side">
            <img src={IMG}  className='signup-img'/>
        </div>
        <div className='Reflection'>
    
          </div>
        </div>
        <Footer/>
        </>
        );
    };
    
    export default Signup;