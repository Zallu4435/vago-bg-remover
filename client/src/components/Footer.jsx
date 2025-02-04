import { assets } from '../assets/assets';

const Footer = () => {
  const socialIcons = [
    { icon: assets?.facebook_icon, alt: 'Facebook', link: '#' },
    { icon: assets?.twitter_icon, alt: 'Twitter', link: '#' },
    { icon: assets?.google_plus_icon, alt: 'Google Plus', link: '#' }
  ];

  return (
    <footer className="border-t border-gray-200">
      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          
          {/* Logo Section */}
          <div className="w-full md:w-1/4 lg:w-1/3 flex justify-center md:justify-start">
            <img 
              src={assets?.logo} 
              alt="Company Logo"
              className="w-16 md:w-24 lg:w-32 h-auto hover:opacity-90 transition-opacity"
            />
          </div>

          {/* Copyright Text */}
          <div className="w-full md:w-auto order-3 md:order-2 text-center">
            <p className="text-sm md:text-base text-gray-500 whitespace-nowrap">
              Copyright @vago | All rights reserved
            </p>
          </div>

          {/* Social Icons */}
          <div className="w-full md:w-1/4 lg:w-1/3 flex items-center justify-center md:justify-end order-2 md:order-3 gap-6">
            {socialIcons.map((social, index) => (
              <a 
                key={index}
                href={social.link}
                className="group"
                aria-label={social.alt}
              >
                <div className="w-10 h-10 md:w-9 md:h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-all duration-300 group-hover:scale-110">
                  <img 
                    src={social.icon} 
                    alt={social.alt}
                    className="w-10 h-10 md:w-16 md:h-16 lg:w-16 lg:h-16"
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