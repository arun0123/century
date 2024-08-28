// src/components/Contact.js
import React from 'react';
import './Contact.css'; // Importing CSS for styling

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2>Contact Me</h2>
            <form className="contact-form">
                <label>Name:
                    <input type="text" name="name" required />
                </label>
                <label>Email:
                    <input type="email" name="email" required />
                </label>
                <label>Message:
                    <textarea name="message" required></textarea>
                </label>
                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default Contact;
