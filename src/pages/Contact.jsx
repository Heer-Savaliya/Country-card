import React from 'react'

const Contact = () => {
    const handleSubmit=(formData)=>{
        // console.log(formData);
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
        
        
    }
  return (
    <section className='section-contact'>
      <h2 className='container-title'>contact page</h2>
      <div className="contact-wrapper container">
      <form action={handleSubmit}>
        <input type="text" required autoComplete='false' placeholder='Enter your name' name='username' />
        <input type="email" required autoComplete='false' placeholder='Enter your email' name='email' />
        <textarea name="message" required placeholder='Enter your message' rows="6" autoComplete='false'></textarea>
        <button type='submit' value='send'>Send</button>
      </form>
      </div>
    </section>
  )
}

export default Contact
