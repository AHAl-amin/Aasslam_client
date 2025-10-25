import React from 'react'
import AboutBanner from './AboutBanner'
import AboutUs from './AboutUs'
import AboutMission from './AboutMission'
import ContactInfo from '../Home/ContactInfo'
import WorkProgress from './WorkProgress'

function About() {
  return (
    <div>
        <AboutBanner/>
        <AboutUs/>
        <WorkProgress/>
        <AboutMission/>
        <ContactInfo/>
    </div>
  )
}

export default About