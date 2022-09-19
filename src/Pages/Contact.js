import React/*, { useState } */ from "react";
import "../Style_css/Contact.scss"

export default function Contact() {

    // function MyForm() {
    //     const [name, setName] = useState("");}

    return (
        <>
         <div className="contactPageContent">
          <form action="" onSubmit={""}>
           <div className="formWord">
            <h2>Hello, pleasure to meet you!</h2>
            <br />
            <label>Name:
            <input className="input100" type="text"  name="fullName" required/>
            <br />
            </label>Phone:        
            <label>
            <input className="input100" type="text" name="phone" required/>
            </label>
            <br />
            <label>Email:
            <input className="input100" type="text" name="phone" required/>
            </label>            
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