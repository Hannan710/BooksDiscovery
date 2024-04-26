import { useState, useEffect, useRef } from 'react';
import Navbar from '../component/navbar';
import '../component/login.css';
// import { Link } from "react-router-dom";

export default function Registration() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = 0.02; // 3% volume
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation logic
        if (!email || !isValidEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        if (!username.trim()) {
            setError('Please enter a username.');
            return;
        }
        if (!['male', 'female', 'other'].includes(gender.toLowerCase())) {
            setError('Please select a valid gender.');
            return;
        }
        if (!dob || !isValidDate(dob)) {
            setError('Please enter a valid date of birth (YYYY-MM-DD).');
            return;
        }
        if (password.length < 4) {
            setError('Password must be at least 4 characters long.');
            return;
        }
        // Proceed with registration
    };

    const isValidEmail = (email) => {
        // Simple email validation
        return /\S+@\S+\.\S+/.test(email);
    };

    const isValidDate = (dob) => {
        // Simple date validation (YYYY-MM-DD format)
        if (!/^\d{4}-\d{2}-\d{2}$/.test(dob)) {
            return false;
        }
    
        // Check if the date is a valid date
        const parts = dob.split('-');
        const year = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10);
        const day = parseInt(parts[2], 10);
        const date = new Date(year, month - 1, day);
    
        // Check if the date components match the input
        return date.getFullYear() === year && date.getMonth() + 1 === month && date.getDate() === day;
    };
    

    return (
        <>
            <Navbar />
            <div className='login-page'>
                <video ref={videoRef} className='login-video' loop autoPlay>
                    <source src="/videos/login baclground.mp4" type="video/mp4"></source>
                </video>
                <div className='login-form-container'>
                    <form className='login-form' onSubmit={handleSubmit}>
                        <h2>Registration</h2>
                        {error && <p className='error'>{error}</p>}
                        <div className='input-group'>
                            <input
                                type='text'
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='input-group'>
                            <input
                                type='text'
                                placeholder='Username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className='input-group'>
                            <select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className='input-group'>
                            <input
                                type='text'
                                placeholder='Date of Birth (YYYY-MM-DD)'
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                            />
                        </div>
                        <div className='input-group'>
                            <input
                                type='password'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='form-actions-login'>
                            <button type='submit'>Register</button>
                            <br />
                            <a href="#">Forgot Password</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
