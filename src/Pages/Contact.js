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
         <h2>Hello, nice to meet you!</h2>
          <form action="" onSubmit={sendEmail}>
           <div className="formWord">  
            <input className="input100" type="text" placeholder="Name:" name="name" required/>
            <br />   
            <input className="input100" type="text" placeholder="Phone:" name="phone" required/>
            <br />
            <input className="input100" type="text" placeholder="Email:" name="email" required/>       
           </div>
          </form> 
           <br />
          <div class="formWord2">
           
           <textarea name="message" placeholder="Message content:" required rows="4" cols="50"></textarea>
           
          </div>  
          <br />  
          <button>SUBMIT</button>
         </div>  
        </>
)}