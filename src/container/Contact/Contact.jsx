import {useState, useRef} from "react";
import { AppWrap } from "../../wrapper";
import emailjs from '@emailjs/browser';

import "./Contact.scss";

const Contact = () => {
    const currentForm = useRef();
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [company, setCompany] = useState("");
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_82ihdud', 'template_buh5dyo', currentForm.current, 'mtphl-x2td8J6avpH')
        alert("Email has been sent!")

        setFirstName("");
        setLastName("");
        setCompany("");
        setTitle("");
        setMessage("");
        setEmail("");
    }

    return (
        <div className = "app__flex formMargin">
            <h2 className = "head-text">Looking for A<br /> <span style = {{color: "white"}}>Full-Stack Developer?</span></h2>
            <form ref = {currentForm} className = "websiteForm" onSubmit={sendEmail}>
                <div className = "name">
                    <div className = "firstAndLast front">
                        <label for = "firstName">First Name<span style = {{color: "red"}}>*</span></label>
                        <input placeholder="First Name" type = "text" id = "firstName" name = "first_name" value = {firstName} onChange = {(e) => setFirstName(e.target.value)} required/>
                    </div>
                    <div className = "firstAndLast back">
                        <label for = "lastName">Last Name<span style = {{color: "red"}}>*</span></label>
                        <input placeholder="Last Name" type = "text" id = "lastName" name = "last_name" value = {lastName} onChange = {(e) => setLastName(e.target.value)} required/>
                    </div>
                </div>
                <div className = "inputArea">
                    <label for = "company">Company<span style = {{color: "red"}}>*</span></label>
                    <input placeholder = "Company" type = "text" id = "company" name = "company" value = {company} onChange = {(e) => setCompany(e.target.value)} required/> 
                </div>
                <div className = "inputArea">
                    <label for = "email">Email<span style = {{color: "red"}}>*</span></label>
                    <input placeholder="info@email.com" type = "text" id = "email" name = "email" value = {email} onChange = {(e) => setEmail(e.target.value)} required/> 
                </div>
                <div className = "inputArea">
                    <label for = "title">Message Title<span style = {{color: "red"}}>*</span></label>
                    <input placeholder = "Title..." type = "text" id = "title" name = "message_title" value = {title} onChange = {(e) => setTitle(e.target.value)} required/> 
                </div>
                <div className = "inputArea">
                    <label for ="message">Message<span style = {{color: "red"}}>*</span></label>
                    <textarea placeholder = "Message..." type = "text" id = "message" name = "message" value = {message} onChange = {(e) => setMessage(e.target.value)} required/> 
                </div>
                <button type = "submit" disabled = {(email === "") || (firstName === "") || (lastName === "") || (company === "") || (title === "") || (message === "")} /*onClick = {(e) => sendEmail(e)}*/>Send</button>
            </form>
        </div>
    )
}

export default AppWrap(Contact, "contact");