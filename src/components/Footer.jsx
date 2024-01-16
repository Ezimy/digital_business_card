import React from "react"
import twitterIcon from "/src/images/Twitter-Icon.svg"
import instagramIcon from "/src/images/Instagram-Icon.svg"
import githubIcon from "/src/images/Github-Icon.svg"
import facebookIcon from "/src/images/Facebook-Icon.svg"
export default function Footer(){
    return(
        <div className="footer">
            <a href="https://twitter.com/Sammy0669" target="_blank">
                <img src={twitterIcon} alt="twitter-icon"/>
            </a>
            <img src={facebookIcon} alt="facebook-icon"/>
            <a href="https://www.instagram.com/yang.sammy005/">
                <img src={instagramIcon} alt="instagram-icon"/>
            </a>
            <a href="https://github.com/Ezimy" target="_blank">
                <img src={githubIcon} alt="github-icon"/>
            </a>
        </div>
    )
}