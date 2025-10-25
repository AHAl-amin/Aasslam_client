import React from 'react'
import ServiceBanner from './ServiceBanner'
import WhateYouCanExpect from '../Home/WhateYouCanExpect'
import OurCoreService from './OurCoreService'
import WorkProgress from '../About/WorkProgress'
import { TrustedByBusinesses } from '../Home/TrustedByBusinesses'
import ContactInfo from '../Home/ContactInfo'

function Service() {
  return (
    <div>
        <ServiceBanner/>
        <WhateYouCanExpect/>
        <OurCoreService/>
        <WorkProgress/>
        <TrustedByBusinesses/>
        <ContactInfo/>
    </div>
  )
}

export default Service