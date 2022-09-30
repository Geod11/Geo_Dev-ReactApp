import React/*, { useState } */ from "react";
import "../Style_css/Contact.scss";
import emailjs from 'emailjs-com';

export default function Contact() {

    // function MyForm() {
    //     const [name, setName] = useState("");}

     function sendEmail(e) {
        // const form = useRef();
        e.preventDefault();

        emailjs.sendForm('gmail', 'service_bd9rsvc', /*form.current*/ e.target, '2DEifTVyVNAAoXmob')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    return (
        <>
         <div className="contactPageContent">
          <form action="" onSubmit={sendEmail}>
          <h2>Hello, nice to meet you!</h2>
           <div className="formWord">
            <br />
            <label>Name:</label>
            <input className="input100" type="text" name="name" required/>
            <br />
            <label>Phone:</label>        
            <input className="input100" type="text" name="phone" required/>
            <br />
            <label>Email:</label>
            <input className="input100" type="text" name="phone" required/>       
           </div>
          </form> 
            
          <div class="formWord">
           <label>Message:</label>
           <textarea name="message" required rows="4" cols="50"></textarea>
           <button>SUBMIT</button>
          </div>    
         </div>  
        </>
)}