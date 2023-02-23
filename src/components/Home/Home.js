import React from 'react'
import Header from '../Header'
import Dashboard from './Dashboard'
import DepartmentsVideo from './DepartmentsVideo'
import Hero from './Hero'

const Home = () => {
    return (
        <>
            <Header />
            <Hero></Hero>
            <Dashboard></Dashboard>
            <DepartmentsVideo></DepartmentsVideo>
        </>
    )
}

export default Home