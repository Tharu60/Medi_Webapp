import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import {RiLinkdinFill} from 'react-icons/ri'
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiOutlineInstagram } from 'react-icons/ai';

const socialLinks = [
  {
    path: "https://www.facebook.com/tharaka.lakmal.5/",
    icon: <AiFillFacebook className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: "https://github.com/Tharu60",
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: "https://www.instagram.com/p.tonlinemart/",
    icon: <AiFillInstagram className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: "https://www.linkedin.com/in/tharakal/",
    icon: <RiLinkdinFill className='group-hover:text-white w-4 h-5' />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/Services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get a Opinion",
  },
];

const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];


const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className='pb-16 pt-10'>
      <div className='container'>
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <img src={logo} alt="" />
            <p className='text-[16px] leading-7 font-[400] text-textColor'>
              Copyright © {year} Devoloped By Tharaka Lakmal all right reseved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
