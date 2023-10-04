import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import HeroAnim from '../components/Heroanim.jsx'
import Header from '../components/Header.jsx'
import Planets from '../components/Planets_components.jsx'
import People from '../components/People_components.jsx'
import Species from '../components/Species_components.jsx'

function Home(){

    return (
        <>
            <div className='home h-100'>
                <HeroAnim />
                <Header />
                <Planets />
                <People />
                <Species />
            </div>
            
        </>
        )
}


export default Home