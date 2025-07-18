import React, { useState, useRef } from 'react';
import Navbar from './Navbar';
import './Contact.css';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const [form, setform] = useState({ name: '', email: '', message: '' });
  const formRef = useRef();
  const [status, setStatus] = useState(null); // null | 'success' | 'error'

  const change = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_m5a3229',
        'template_ke3xvra',
        formRef.current,
        'Adwpo1Ksc2DQ6j-ah'
      )
      .then(
        () => {
          setStatus("success")
          setTimeout(() => {
            setStatus("")
          }, 4000)
          setform({ name: '', email: '', message: '' }); // reset form
        },
        (error) => {
          setStatus("error")
          setTimeout(() => {
            setStatus("")
          }, 4000)
          console.error('EmailJS error:', error);
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className='about2'>
        <h2 className='header2'>Contacts</h2>

        <APIProvider apiKey={'AIzaSyBYogbrbmQsQp9ryuogrHJmndy8YWTMLpY'}>
          <Map
            style={{
              height: '400px',
              width: '80vw',
              marginLeft: '120px',
              marginRight: '120px',
              marginTop: '40px',
              borderRadius: '30px',
              overflow: 'hidden',
            }}
            defaultZoom={13}
            defaultCenter={{ lat: -42.8821, lng: 147.3272 }}
          >
            <Marker position={{ lat: -42.880601, lng: 147.324814 }} />
          </Map>
        </APIProvider>

        <h4>Contact Form</h4>
        <form ref={formRef} onSubmit={handleSubmit} className='contact-form'>
          <div className='form-row'>
            <input type='text' placeholder='Enter full name' name='name' value={form.name} onChange={change} required />
            <input type='email' placeholder='Enter email' name='email' value={form.email} onChange={change} required />
          </div>
          <textarea placeholder='Your message' name='message' value={form.message} onChange={change} required />
          <button type='submit'>Send Message</button>
        </form>
        {status === 'success' && (
          <p className="form-status success"> Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="form-status error"> Failed to send message. Please try again.</p>
        )}
        <p className='opportunity-note'>
          💼 I’m currently open to <strong>software development</strong> and <strong>internship</strong> opportunities — feel free to reach out!
        </p>

        <div className='linkedin-link'>
          <a href='https://www.linkedin.com/in/varun-singh-6100a0246' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin'></i> Connect with me on LinkedIn
          </a>
        </div>
      </div>
    </>
  );
};

export default Contacts;
