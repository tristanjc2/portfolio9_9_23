import React from 'react';
import './intro.css';
import bg from '../../assets/me_final.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Tristan</span><br />Website Designer</span>
            <p className='introPara'>I am an aspiring Front-End Web Developer <br /> and Full-stack Programmer.</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire me' className='btnImg' />Hire me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg' />
    </section>
  )
}

export default Intro