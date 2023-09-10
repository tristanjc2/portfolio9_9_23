import React from 'react';
import './clients.css'
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';

const Clients = () => {
  return (
    <section id='clientsPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>Clients I have worked with</p>
            <div className='clientImgs'>
                <img src={Walmart} alt='Clients' className='clientImg' />
                <img src={Adobe} alt='Clients' className='clientImg' />
                <img src={Microsoft} alt='Clients' className='clientImg' />
                <img src={Facebook} alt='Clients' className='clientImg' />
            </div>
        </div>
    </section>
  )
}

export default Clients