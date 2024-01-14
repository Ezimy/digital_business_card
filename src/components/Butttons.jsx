import React from "react"

export default function ProfilePicture(){
    return(
        <div className="button-section">
            <div id="email-btn" className="button-element">
                <img src="/src/images/Mail.svg"/>
                <p>Email</p>
            </div>
            <div id="linkedin-btn" className="button-element">
                <img src="/src/images/linkedin.svg"/>
                <p>LinkedIn</p>
            </div>
        </div>
    )
}