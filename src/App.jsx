import React from 'react'
import ReactDOM from 'react-dom/client'
import ProfilePicture from '/src/components/ProfilePicture.jsx'
import About from './components/About'
import Footer from './components/Footer'
import './index.css'

export default function App(){
    return (
        <div className="container">
            <ProfilePicture />
            <About />
            <Footer />
        </div>
    )
}