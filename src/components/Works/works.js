import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.JPG';
import Portfolio2 from '../../assets/portfolio-2.JPG';
import Portfolio3 from '../../assets/portfolio-3.JPG';
import Portfolio4 from '../../assets/portfolio-4.JPG';
import Portfolio5 from '../../assets/portfolio-5.JPG';
import Portfolio6 from '../../assets/portfolio-6.JPG';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>Education and Certificates</span>
        <div className='worksImgs'>
            <img src={Portfolio1} alt='' className='worksImg' />
            <img src={Portfolio2} alt='' className='worksImg' />
            <img src={Portfolio3} alt='' className='worksImg' />
            <img src={Portfolio4} alt='' className='worksImg' />
            <img src={Portfolio5} alt='' className='worksImg' />
            <img src={Portfolio6} alt='' className='worksImg' />
        </div>
        <button className='worksBtn'>See More</button>
    </section>
  )
}

export default Works