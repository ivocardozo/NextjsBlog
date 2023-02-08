import React, { useState } from 'react'

import classes from './contact-form.module.css'

const ContactForm = () => {
    const [enteredEmail, setEnteredEmail] = useState()
    const [enteredName, setEnteredName] = useState()
    const [enteredMessage, setEnteredMessage] = useState()

    const sendMessageHandler = event => {
        event.preventDefault()

        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
  return (
    <section className={classes.contact}>
      <h1>How can I help you</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
            <label htmlFor='email'>Your email</label>
            <input 
                type='email'
                id='email'
                required
                value={enteredEmail}
                onChange={event => setEnteredEmail(event.target.value)}
            />
        </div>
        <div className={classes.controls}>
            <label htmlFor='name'>Your name</label>
            <input 
                type='text'
                id='name'
                required
                value={enteredName}
                onChange={event => setEnteredName(event.target.value)}
            />
        </div>
        <div className={classes.controls}>
            <label htmlFor='message'>Your message</label>
            <textarea 
                rows='5'
                id='message'
                required
                value={enteredMessage}
                onChange={event => setEnteredMessage(event.target.value)}
            />
        </div>
        <div className={classes.actions}>
            <button>Send Message</button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm
