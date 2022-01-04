import React from 'react'
import { Route, Switch } from 'react-router-dom';
import './Home.css';
import Navbar from './Navbar';
import Banner from './Banner';
import Movie from './Movie';
import Upcoming from './Upcoming';
function Home() {
    return (
        <div>
        <Navbar/>
        <Banner/>
        <Movie/>
        <Upcoming/>
           
        </div>
    )
}

export default Home
