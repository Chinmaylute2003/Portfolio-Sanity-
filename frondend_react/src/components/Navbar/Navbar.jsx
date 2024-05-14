import React, {useState} from 'react';
import "./Navbar.scss";
import { images } from "../../constants";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import {motion} from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo"></img>
      </div>
      <ul className='app__navbar-links'>
        {["home", "about", "work", "skills", "contact"].map((item)=>{
            
            return (<li  className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
            </li>);
        })}
      </ul>
      <div className='app__navbar-menu'>
      <IoIosMenu onClick = {()=>{
        setToggle(true);
      }}/>

      {toggle && (
        <motion.div 
        whileInView = {{x : [0, 300]}}
        transtition = {{duration : 0.90, ease : "easeOut" }}
        >
        <IoIosClose onClick={()=>{
          setToggle(false);
        }}/>
        <ul>
        {["home", "about", "work", "skills", "testimonial", "contact"].map((item)=>{
            
            return (<li  className="app__flex p-text" key={item}>

            <a href={`#${item}`} onClick={() => {setToggle(false)}}>{item}</a>
            </li>);
        })}
        </ul>
        </motion.div>
      )
        }
      </div>
    </nav>
  )
}

export default Navbar;