import React from 'react';
import logo from '../assets/logo.png';
import facebook_icon from '../assets/facebook_icon.svg';
import twitter_icon from '../assets/twitter_icon.svg';
import google_plus_icon from '../assets/google_plus_icon.svg';

const Footer = () => {
  const socialIcons = [
    { icon: facebook_icon, alt: 'Facebook', link: '#' },
    { icon: twitter_icon, alt: 'Twitter', link: '#' },
    { icon: google_plus_icon, alt: 'Google Plus', link: '#' }
  ];

  return (
    <footer className="border-t border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="w-32 sm:w-40">
            <img 
              src={logo} 
              alt="Company Logo"
              className="w-24 h-auto hover:opacity-90 transition-opacity"
            />
          </div>

          {/* Copyright Text */}
          <p className="text-sm text-gray-500 order-3 sm:order-2">
            Copyright @vago | All rights reserved
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 order-2 sm:order-3">
            {socialIcons.map((social, index) => (
              <a 
                key={index}
                href={social.link}
                className="group"
                aria-label={social.alt}
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-all duration-300 group-hover:scale-110">
                  <img 
                    src={social.icon} 
                    alt={social.alt}
                    className="w-28 h-28"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;