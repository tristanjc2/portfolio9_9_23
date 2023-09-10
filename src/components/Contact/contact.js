import React from 'react';
import './contact.css';
// import Walmart from '../../assets/walmart.png';
// import Adobe from '../../assets/adobe.png';
// import Microsoft from '../../assets/microsoft.png';
// import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';


const Contact = () => {
  return (
    <section id='contactPage'>
        {/* <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>Demo text place holder change later for sure</p>
            <div className='clientImgs'>
                <img src={Walmart} alt='Clients' className='clientImg' />
                <img src={Adobe} alt='Clients' className='clientImg' />
                <img src={Microsoft} alt='Clients' className='clientImg' />
                <img src={Facebook} alt='Clients' className='clientImg' />
            </div>
        </div> */}
        <div id='contactPage'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Test text filll out the form etc..</span>
            <form className='contactForm'>
                <input type='text' className='name' placeholder='Your Name'></input>
                <input type='email' className='email' placeholder='Your Email'></input>
                <textarea name='message' className='msg' rows='5' placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img className='link' src={FacebookIcon} alt='SocialIconLinks' />
                    <img className='link' src={TwitterIcon} alt='SocialIconLinks' />
                    <img className='link' src={YouTubeIcon} alt='SocialIconLinks' />
                    <img className='link' src={InstagramIcon} alt='SocialIconLinks' />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact