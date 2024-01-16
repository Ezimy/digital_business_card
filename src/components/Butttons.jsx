import React from "react"
import mailIcon from "/src/images/Mail.svg"
import linkedinIcon from "/src/images/linkedin.svg"
export default function ProfilePicture(){
    return(
        <div className="button-section">
            <a href="mailto:yang.sammy005@gmail.com" id="email-btn" className="button-element">
                <img src={mailIcon}/>
                <p>Email</p>
            </a>
            <a href="https://www.linkedin.com/in/sammy-yang29/" target="_blank" id="linkedin-btn" className="button-element">
                <img src={linkedinIcon}/>
                <p>LinkedIn</p>
            </a>
        </div>
    )
}