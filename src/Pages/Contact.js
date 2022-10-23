import React, { useRef , useState }/*, { useState } */ from "react";
import "../Style_css/Contact.scss";
import emailjs from 'emailjs-com';

export default function Contact() {

    const [mailSent, isMailSent]=useState(false);

    const form = useRef();
     function sendEmail(e) {
        
        e.preventDefault();

        emailjs.sendForm('service_bd9rsvc', 'template_88i1uea', form.current, '2DEifTVyVNAAoXmob')
          .then((result) => {
              isMailSent(true);
              setTimeout(()=>{
                isMailSent(false)
              },4000);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    return (
        <>
         <div className="contactPageContent">
         <h2>Hello, nice to meet you!!!</h2>
          <form ref={form} action="" onSubmit={sendEmail}>
           <div className="formWord">  
            <input className="input100" type="text" placeholder="Name:" name="name" required pattern="[a-zA-Z\s]+"/>
            <br />   
            <input className="input100" type="text" placeholder="Phone:" name="phone" required pattern="[0-9+\s]+"/>
            <br />
            <input className="input100" type="text" placeholder="Email:" name="email" required pattern="^\S+@\S+\.\S+$"/>       
           </div>
           <textarea name="message" placeholder="Message content:" required rows="4" cols="50"></textarea>
           <br /><br />
           <input className="submitButton" type="submit" value="Submit" />
          </form>
          <div className={`emailSentBase ${mailSent===true && "emailSent"}`}> Email sent successfully! </div>
          {mailSent===true && (<div className="mailSuccess"> Email sent successfully! </div>)}        
         </div>       
        </>
)}