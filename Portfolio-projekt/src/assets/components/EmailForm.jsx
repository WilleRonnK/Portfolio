import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const servideId = 'service_ikahpuj';
        const templateId = 'template_wtpcw4g';
        const publicKey = 'R3y8JLMC81W5NIAvx';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Wille',
            message: message,
        };

        emailjs.send(servideId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
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