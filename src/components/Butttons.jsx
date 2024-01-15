import React from "react"

export default function ProfilePicture(){
    return(
        <div className="button-section">
            <a href="mailto:yang.sammy005@gmail.com" id="email-btn" className="button-element">
                <img src="/src/images/Mail.svg"/>
                <p>Email</p>
            </a>
            <a href="https://www.linkedin.com/in/sammy-yang29/" target="_blank" id="linkedin-btn" className="button-element">
                <img src="/src/images/linkedin.svg"/>
                <p>LinkedIn</p>
            </a>
        </div>
    )
}