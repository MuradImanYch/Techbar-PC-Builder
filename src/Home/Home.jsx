import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div id='home'>
            <Link to='/salesman'>Satıcı</Link>
            <Link to='/depo'>Anbar</Link>
        </div>
    );
};

export default Home;