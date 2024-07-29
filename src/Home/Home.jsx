import React from 'react'
import HeroSection from './Hero'
import EventSchedule from './EventsSchedule'
import ProgramTab from './Programs'
import UpcomingEvents from './UpcomingEvents'

export default function Home() {
    return (
        <>
            <HeroSection />
            <EventSchedule />
            <UpcomingEvents/>
            <ProgramTab/>
        </>
    )
}