import React from "react";

const Footer = () => {
  return (
    <footer className="max-sm:h-[75vh] flex items-center bg-black text-white max-sm:flex-col gap-20 pt-10 max-md:h-[50vh] px-10 md:h-[40vh] md:justify-around">
      <div className="brands space-y-4 md:space-y-5">
        <h2 className="text-white font-bold max-sm:text-3xl max-md:text-4xl md:text-5xl">
          FASHIONAL
        </h2>
        <p className="text-white/70 max-sm:w-[25rem] md:w-[20rem]">
          Complete your style with awesome clothes from us.
        </p>
        <div className="social-links-logo flex items-center gap-2">
          <img
            className="cursor-pointer hover:-translate-y-3 duration-500 w-9"
            src="/logos/facebook.png"
            alt="facebook"
          />
          <img
            className="cursor-pointer hover:-translate-y-3 duration-500 w-9"
            src="/logos/instagram.png"
            alt="instagram"
          />
          <img
            className="cursor-pointer hover:-translate-y-3 duration-500 w-9"
            src="/logos/twitter.png"
            alt="twitter"
          />
          <img
            className="cursor-pointer hover:-translate-y-3 duration-500 w-9"
            src="/logos/linkdIn.png"
            alt="linkdIn"
          />
        </div>
      </div>
      <div className="links grid md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-2 gap-y-12 gap-x-10">
        <div className="links">
          <ul>
            <h2 className="mb-4">Company</h2>
            <div className="space-y-1">
              <li>
                <a className="text-white/75 font-light " href="#About">
                  About
                </a>
              </li>
              <li>
                <a className="text-white/75 font-light " href="#Contact">
                  Contact us
                </a>
              </li>
              <li>
                <a className="text-white/75 font-light " href="#Support">
                  Support
                </a>
              </li>
              <li>
                <a className="text-white/75 font-light " href="#Careers">
                  Careers
                </a>
              </li>
            </div>
          </ul>
        </div>
        <div className="links">
          <ul>
            <h2 className="mb-4">Quick Links</h2>
            <div className="space-y-1">
              <li>
                <a className="text-white/75 font-light " href="#Share">
                  Share Location
                </a>
              </li>
              <li>
                <a className="text-white/75 font-light " href="#Orders">
                  Orders Tracking
                </a>
              </li>
              <li>
                <a className="text-white/75 font-light " href="#Size">
                  Size Guide
                </a>
              </li>
              <li>
                <a className="text-white/75 font-light " href="#FAQs">
                  FAQs
                </a>
              </li>
            </div>
          </ul>
        </div>
        <div className="links">
          <ul>
            <h2 className="mb-4">Legal</h2>
            <div className="space-y-1">
              <li>
                <a className="text-white/75 font-light " href="#Terms">
                  Terms & conditions
                </a>
              </li>
              <li>
                <a className="text-white/75 font-light " href="#Privacy">
                  Privacy Policy
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
