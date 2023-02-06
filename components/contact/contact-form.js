import React from 'react'

import classes from './contact-form.module.css'

const ContactForm = () => {
  return (
    <section className={classes.contact}>
      <h1>How can I help you</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
            <label htmlFor='email'>Your email</label>
            <input type='email' id='email' required/>
        </div>
        <div className={classes.controls}>
            <label htmlFor='name'>Your name</label>
            <input type='text' id='text' required/>
        </div>
        <div className={classes.controls}>
            <label htmlFor='message'>Your email</label>
            <textarea type='message' id='message' rows='5' required/>
        </div>
        <div className={classes.actions}>
            <button>Send message</button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm
