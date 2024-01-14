import React from 'react'
import Profile from './components/Profile'
import Buttons from './components/Butttons'
import ProfilePicture from '/src/components/ProfilePicture.jsx'
import About from './components/About'
import Footer from './components/Footer'
import './index.css'

export default function App(){
    return (
        <div className="container">
            <ProfilePicture />
            <Profile />
            <Buttons/>
            <About />
            <Footer />
        </div>
    )
}