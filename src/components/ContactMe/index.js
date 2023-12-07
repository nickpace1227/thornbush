import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactMe() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const contactMessage = {
        from_name: name,
        reply_to: email,
        message,
    };

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("ass");
        emailjs.send('service_kbie0nm', 'template_6v6pq99', contactMessage, 'A50rxTr5mug440osn').then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
         }, function(error) {
            console.log('FAILED...', error);
         })
    };

    return (
        <div>
            <h1>Feel the need to reach out?</h1>
            <p>If you like my portfolio and want to reach out for a print or a commission, feel free to fill out the contact form below. I'll get back to you as soon as I can.</p>
            <input type="text" placeholder="Name" name="from_name" onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Contact Email" name="reply_to" onChange={(e) => setEmail(e.target.value)} />
            <textarea placeholder="Your Question/Commission/Print Details/Love Letter" name="message" onChange={(e) => setMessage(e.target.value)} />
            <button type="button" onClick={sendEmail}>Submit</button>
        </div>
    )
}