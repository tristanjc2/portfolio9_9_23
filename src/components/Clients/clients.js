import React from 'react';
import './clients.css'
import Django from '../../assets/django.png';
import ReactIcon from '../../assets/react.png';
import Python from '../../assets/python.png';
import Csharp from '../../assets/Csharp.png';
import VScode from '../../assets/VScode.png';
import Unity from '../../assets/Unity.png';


const Clients = () => {
  return (
    <section id='clientsPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>Tech Skills</h1>
            <p className='clientDesc'>Programs or languages I work with</p>
            <div className='clientImgs'>
                <img src={Django} alt='Clients' className='clientImg' />
                <img src={ReactIcon} alt='Clients' className='clientImg' />
                <img src={Python} alt='Clients' className='clientImg' />
                <img src={Csharp} alt='Clients' className='clientImg' />
                <img src={VScode} alt='Clients' className='clientImg' />
                <img src={Unity} alt='Clients' className='clientImg' />
            </div>
        </div>
    </section>
  )
}

export default Clients