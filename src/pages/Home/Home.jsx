import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TextTransition, { presets } from "react-text-transition";


import envitedSvg from '../../assets/image 1.svg'
import './Home.css'

const TEXTS = [
    "Facebook",
    "SnapChat",
    "Instagram",
    "Twitter"
];

const Home = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <>
            <div className="container-md text-center home">
                <div className="row">
                    <div className="col-md-4">
                        <img className='home__img' src={envitedSvg} alt="Envited svg" />
                    </div>
                    <div className="col-md-7">
                        <div className='home__imagine'>
                            Imagine if
                            <p className='imagine__main'>
                                SnapChat
                            </p>
                            had events.
                            <div style={{ color: "#4F4F4F", fontSize: '24px' }}>
                                Easily host and share events with your friends across any social media.
                            </div>
                            <Link to={'/create'} >
                                <button className='btn event__create'>
                                    🎉Create my event
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Home