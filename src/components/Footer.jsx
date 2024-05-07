import React from "react";
import { Link } from "react-scroll";
import Logo from '/Logo.png';

const Footer = () => {
    return (
        <div className=" bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
            <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
                <div className=" w-full md:w-1/4">
                <img src={Logo} alt="Logo" className='w-[15rem] logo' />
                    <p className=" text-sm">
                        Our team of dedicated doctors, each specializing in unique fields such as orthopedics, cardiology, pediatrics, neurology, dermatology, and more.
                    </p>
                </div>
                <div>
                    <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">About Us</h1>
                    <nav className=" flex flex-col gap-2">
                        <Link to="about" spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer">
                            About
                        </Link>
                        <Link to="services" spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer">
                            Services
                        </Link>
                        <Link to="doctors" spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer">
                            Doctors
                        </Link>
                    </nav>
                </div>
                <div>
                    <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
                    <nav className=" flex flex-col gap-2">
                        <Link to="services" spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer">
                            Lab Test
                        </Link>
                        <Link to="services" spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer">
                            Health Check
                        </Link>
                        <Link to="services" spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer">
                            Heart Health
                        </Link>
                    </nav>
                </div>
                <div className=" w-full md:w-1/4">
                    <h1 className=" font-medium text-xl pb-2 pt-5 md:pt-0">Contact Us</h1>
                    <nav className=" flex flex-col gap-2">
                        <Link to="/" spy={true} smooth={true} duration={500}>
                        Premises No. 145, East Bankim Pally, Madhyamgram, Kolkata, West Bengal, India, 700129.
                        </Link>
                        <Link to="/" spy={true} smooth={true} duration={500}>
                        info@novumlabs.net
                        </Link>
                        <Link to="/" spy={true} smooth={true} duration={500}>
                        +91-9007639350
                        </Link>
                    </nav>
                </div>
            </div>
            <div>
                <p className=" text-center py-4">
                {'\u00a9'} and developed by<span className=" text-hoverColor"><a> Novum Labs</a></span> 2024 | All
                    rights reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;