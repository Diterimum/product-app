import React from 'react';
import './Contact.css';

function Contact(){
  return(
    <section className="contact">
      <h2>Contact information</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name"/>
        </label>
        <label>
          Email:
          <input type="email" name="email"/>
        </label>
        <label>
          Letter:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
