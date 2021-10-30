import React from 'react'
import GetStarted from '../GetStarted/GetStarted';
import ProblemSection from '../ProblemSection/ProblemSection';
import Solution from '../SolutionandIncubeted/Solution'
import NumberCount from '../NumberCount/NumberCount';
import Platform from '../Platform/Platform';
import Ourstory from '../Ourstory/Ourstory';
import Incubeted from '../SolutionandIncubeted/Incubeted';
import Awards from '../Awards/Awards';
import FeaturedArtists from '../FeaturedArtists/FeaturedArtists';
import HappyArtists from '../HappyArtists/HappyArtists';
import Contact from '../Contact/Contact'
import './Hero.css';


const Hero = () => {

    const incubeStyle = {
        marginTop: "6rem",

    }

    return (
        <div className="container">
            <GetStarted />
            <ProblemSection />
            <Solution />
            <NumberCount />
            <Platform />
            <Ourstory />
            <Incubeted style={incubeStyle} />
            <Awards />
            <FeaturedArtists />
            <HappyArtists />
            <Contact />
     
        </div>
    )
}

export default Hero
