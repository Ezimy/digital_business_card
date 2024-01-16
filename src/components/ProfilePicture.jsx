import React from "react"
import profilePicture from "/src/images/profile.png"
export default function ProfilePicture(){
    return(
        <div>
        <img src={profilePicture} alt="profile-pic" className="profile-pic"/>
        </div>
    )
}