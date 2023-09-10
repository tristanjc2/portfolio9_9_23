import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>Front-End Developer</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>UI/UX design</h2>
                    <p>Create a unique color scheme and useable interface.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Web Design</h2>
                    <p>Design websites that are functional and practical in everyday use cases.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>Always keeping mobile friendly designs in mind is the objective.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills