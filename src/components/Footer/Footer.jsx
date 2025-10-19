import React from 'react';
import logo from '../../assets/logo.png'
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti';

const Footer = () => {
    return (
        <footer className="footer flex justify-between max-sm:flex-col bg-neutral text-neutral-content p-10 lg:px-50 items-center">
            <aside  className='flex items-center'>
                <img src={logo} className='h-[70px]' alt="" />
                <h2 className='text-5xl font-bold'>HERO.IO</h2>
            </aside>
            <nav>
                <h6 className='justify-self-center'>Social Links</h6>
                 <div className='text-5xl flex'>
                    <a href='https://www.facebook.com/'><TiSocialFacebook /></a>
                    <a href='https://www.linkedin.com/'><TiSocialLinkedin /></a>
                    <a href='https://x.com/'><TiSocialTwitter /></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;