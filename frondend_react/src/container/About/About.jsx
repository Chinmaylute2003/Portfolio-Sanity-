import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from "framer-motion";
import { urlFor, client } from '../../client';
import { AppWrap } from '../../wrapper';
import { MotionWrap } from "../../wrapper"

// const abouts = [
//   {title : 'Web Developent', description : 'This is web development', imgURL : images.about01 },
//   {title : 'Front-end Development', description : 'This is web development', imgURL : images.about02 },
//   {title : 'Back-end Development', description : 'This is web development', imgURL : images.about03 },
//   {title : 'MERN Stack', description : 'This is web development', imgURL : images.about04 }
// ];


const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  console.log(abouts);

  return (

    <div className='app__about'>
      <h2 className='head-text'>
        I know that
        <span> Good Apps</span><br />
        means
        <span> Good Bussiness</span>
      </h2>
      <div className='app__profiles'>

        {abouts.map((about, index) => {
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className='app__profile-item'
              key={about.title + index}
            >
              <img src={urlFor(about.imgURL)} alt={about.title}></img>
              <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
              <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  "app__whitebg"
);