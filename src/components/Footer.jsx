import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare,faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import logoTest from '../assets/logo_test.svg';
import waLink from '../assets/wa.link_go5sb5.webp';

export default function Footer() {
  //To top button control
  const [showToTopButton, setShowToTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowToTopButton(true);
      } else {
        setShowToTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Dynamic year
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div id="aboutus" className="bg-black dark:bg-gray-950 text-white">
        <div className=" md:max-w-[100rem] mx-auto">
        <div className="py-20 font-semibold md:flex justify-between">
          {/* Left */}
          <div className="md:w-1/2">
            <div className="mx-auto justify-center">
              <img src={logoTest} className="bg-gray-200 rounded-md m-5 -mt-5 mx-auto" width="150" height="150" alt="israel" />
            </div>
            <h4 className="text-2xl px-5 mb-4 font-bold">Join Our Newsletter</h4>
            <iframe
              title='newsletter'
              loading="lazy"
              width="540"
              height="615"
              scrolling="no"
              src="https://47d5a8c0.sibforms.com/serve/MUIEAHrYIyL8hF2OApLW6Jyzmtdhtzq6yAD2do790vCmDhfPT0rTnxYFcqITojtqHlYkTxVOkOYMvFQusG6NlmU013G5RH_8hgkOjsfpzME-Ct9tDcDqK7gZ0Qxks6s3Ou-Tht6snUwjp0w3h9KwVD1vaK-OB5ck2zf1zecIWV0UtIvztG_cYq52LCOcTI66QN_ajaGeyUbCPeVM"
              frameBorder="0"
              allowFullScreen
              style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}
            ></iframe>
          </div>
          {/* Right */}
          <div className="md:ml-10 lg:mr-20 px-10" id="aboutus1">
            <img className="mx-auto" src={waLink} width="100" height="100" alt="qrcode" />
            <label className="flex justify-center p-1">Scan to connect and get a quote</label>
            <div className="flex justify-center md:justify-enda mb-10">
              <a href="https://www.linkedin.com/company/pactel/mycompany/" target="_blank" aria-label="linkedin" rel="noopener noreferrer" className="p-4 mt-4">
                <FontAwesomeIcon icon={faLinkedin} className="fa-xl" />
              </a>
              <a href="https://www.instagram.com/pact.el/" target="_blank" aria-label="Instagram" rel="noopener noreferrer" className="p-4 mt-4">
                <FontAwesomeIcon icon={faInstagram} className="fa-xl" />
              </a>
              <a href="https://www.facebook.com/Pactel1" target="_blank" aria-label="Facebook" rel="noopener noreferrer" className="p-4 mt-4">
                <FontAwesomeIcon icon={faFacebook} className="fa-xl" />
              </a>
            </div>
            <hr />
            <p className="text-gray-200 mt-5">
              About us<br /><br />
              We are a leading Egyptian company in the field of services,<br />
              that has been working for more than two years with many clients around the world
            </p>
            <hr className="mt-10" />
            {/* Contact */}
            <div className="text-gray-300 opacity-70 font-mono font-thin text-md">
              <p className="mt-5">Contact us</p>
              <p className="mt-2">Egypt</p>
              <a href="https://wa.me/+201154185848" target="_blank" rel="noopener noreferrer">+201154185848</a>
              <br />
              <p className="mt-2">UAE</p>
              <a href="https://wa.me/+971521997339" target="_blank" rel="noopener noreferrer">+971521997339</a>
              <br />
              <p className="mt-2">Email:</p>
              <a href="mailto:pactelcompeny@gmail.com" target="_blank" rel="noopener noreferrer">pactelcompeny@gmail.com</a>
            </div>
          </div>
          {/* To top button */}
          {showToTopButton && (
        <button
          id="totopbutton"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ opacity: 1, transition: '0.5s' }}
          className="fixed gtt z-90 bottom-20 right-8 border-0 w-14 h-14 rounded-full drop-shadow-md bg-gray-800 text-white text-2xl font-semibold"
        >
          &uarr;
        </button>
      )}
        </div>
        <div className="md:text-center justify-items-end p-4 text-gray-400">
          <a className="text-sm block m-8" href="license.txt">legal</a>
          <p>
            &copy; copyrights Ziad pactel-<span id="copyrights">{currentYear}</span>
            <a href="https://github.com/zeiadsalhin" aria-label="Github">
              <FontAwesomeIcon icon={faGithubSquare} className="fa-xl" />
            </a>
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
}