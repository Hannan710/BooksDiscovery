import { useEffect, useRef } from 'react';
import { useState } from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import '../component/contact.css';

export default function ContactUs() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [errors, setErrors] = useState({});
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = 0.02; // 3% volume
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        // Validation
        if (!name.trim()) {
            errors.name = 'Name is required';
        }
        if (!phone.trim()) {
            errors.phone = 'Phone number is required';
        }
        if (!/^\d{10}$/.test(phone.trim())) {
            errors.phone = 'Phone number must be 10 digits';
        }
        if (!email.trim()) {
            errors.email = 'Email is required';
        }
        if (!/\S+@\S+\.\S+/.test(email.trim())) {
            errors.email = 'Email is invalid';
        }

        if (Object.keys(errors).length === 0) {
            // Submit the form
            console.log('Form submitted:', { name, phone, email, feedback });
            // You can add your submit logic here
        } else {
            setErrors(errors);
        }
    };

    return (
        <>
            <Navbar />
            <div className='contact-page'>
            <video ref={videoRef} className='login-video' loop autoPlay>
                    <source src="/videos/login baclground.mp4" type="video/mp4"></source>
                </video>
                <div className='contact-form-container'>
                    <form className='contact-form' onSubmit={handleSubmit}>
                        <h2>Contact Us</h2>
                        <div className='input-group'>
                            <input
                                type='text'
                                placeholder='Your Name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && <span className="error">{errors.name}</span>}
                        </div>
                        <div className='input-group'>
                            <input
                                type='text'
                                placeholder='Phone Number'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            {errors.phone && <span className="error">{errors.phone}</span>}
                        </div>
                        <div className='input-group'>
                            <input
                                type='email'
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <div className='input-group'>
                            <textarea
                                placeholder='Feedback'
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                            />
                        </div>
                        <div className='form-actions-contact'>
                            <button type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
