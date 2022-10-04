import React, { useRef }/*, { useState } */ from "react";
import "../Style_css/Contact.scss";
import emailjs from 'emailjs-com';

export default function Contact() {

    const form = useRef();
     function sendEmail(e) {
        
        e.preventDefault();

        emailjs.sendForm('service_bd9rsvc', 'template_88i1uea', form.current, '2DEifTVyVNAAoXmob')
          .then((result) => {
              alert("Success")
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    return (
        <>
         <div className="contactPageContent">
         <h2>Hello, nice to meet you!</h2>
          <form ref={form} action="" onSubmit={sendEmail}>
           <div className="formWord">  
            <input className="input100" type="text" placeholder="Name:" name="name" required/>
            <br />   
            <input className="input100" type="text" placeholder="Phone:" name="phone" required/>
            <br />
            <input className="input100" type="text" placeholder="Email:" name="email" required pattern="/^[\w-\.]+@([\w-]+\.)+[a-z]{2,4}$/i"/>       
           </div>
           <textarea name="message" placeholder="Message content:" required rows="4" cols="50"></textarea>
           <br />
           <input className="submitButton" type="submit" value="Submit" />
          </form>        
         </div>  
        </>
)}