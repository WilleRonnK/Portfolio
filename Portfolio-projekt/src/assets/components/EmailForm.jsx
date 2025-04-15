import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_dyyp2v4';
        const templateId = 'template_wtpcw4g';
        const publicKey = 'R3y8JLMC81W5NIAvx';

        const templateParams = {
            from_name: name.trim(),
            from_email: email.trim(),
            to_name: 'Wille',
            message: message.trim(),
        };
          console.log('Sending email with params:', templateParams);

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                alert('Email sent successfully!'); //
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                console.log('Error details:', error.text);
                 alert('Failed to send email. Please try again later.');
            });

    }
  return (
    <form onSubmit={handleSubmit} className="email-form">
      <div className="input-row">
        <input 
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <textarea 
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="sendEmailButton" type="submit">Submit</button>
    </form>
  );
}

export default EmailForm;