import React from 'react'

import classes from './contact-form.module.css'

const ContactForm = () => {
  return (
    <section className={classes.contact}>
      <h1>How can I help you</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
            <label htmlFor='email'>Your email</label>
            <input 
                type='email'
                id='email'
                required
            />
        </div>
        <div className={classes.controls}>
            <label htmlFor='name'>Your name</label>
            <input 
                type='text'
                id='name'
                required
            />
        </div>
        <div className={classes.controls}>
            <label htmlFor='message'>Your message</label>
            <textarea 
                rows='5'
                id='message'
                required
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
