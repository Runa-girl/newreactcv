import react, {useState} from 'react';
import '../App.css';
import { Bio } from '../content/bio';
import { Education } from '../content/opleiding';
import { Portfolio } from '../content/portfolio';
import { Experience } from '../content/experience';
import { DevSkills } from '../content/Devskills';
import { Other } from '../content/Other';

export function Navbar() {
    const [bio, setBio] = useState(true)
    const [education, setEducation] = useState(false)
    const [portfolio, setportfolio] = useState(false)
    const [experience, setExperience] = useState(false)
    const [devSkills, setDevskills] = useState(false)
    const [other, setOther] = useState(false)

    const bioSelect = () => {
        setEducation(false)
        setportfolio(false)
        setExperience(false)
        setDevskills(false)
        setOther(false)

        setBio(true)
    }
    
    const eduSelect = () => {
        setBio(false)
        setportfolio(false)
        setExperience(false)
        setDevskills(false)
        setOther(false)

        setEducation(true)
    }

    const portfolioSelect = () => {
        setBio(false)
        setEducation(false)
        setExperience(false)
        setDevskills(false)
        setOther(false)

        setportfolio(true)
    }

    const expSelect = () => {
        setBio(false)
        setEducation(false)
        setportfolio(false)
        setDevskills(false)
        setOther(false)

        setExperience(true)
    }

    const devSelect = () => {
        setBio(false)
        setEducation(false)
        setportfolio(false)
        setExperience(false)
        setOther(false)

        setDevskills(true)
    }

    const otherSelect = () => {
        setBio(false)
        setEducation(false)
        setportfolio(false)
        setExperience(false)
        setDevskills(false)

        setOther(true)
    }


    return (
        <div>
            <nav>
                <button onClick={bioSelect}>Over Mij</button>
                <button onClick={eduSelect}>Opleidingen</button>
                <button onClick={portfolioSelect}>Portfolio</button>
                <button onClick={expSelect}>Werkervaring</button>
                <button onClick={devSelect}>Development Skills</button>
                <button onClick={otherSelect}>Overig</button>
            </nav>
            <div class='content'>
                {bio && <Bio />}
                {education && <Education />}
                {portfolio && <Portfolio />}
                {experience && <Experience />}
                {devSkills && <DevSkills />}
                {other && <Other />}
            </div>
        </div>
    )
}