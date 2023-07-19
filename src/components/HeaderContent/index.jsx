import React from 'react'
import headerLogo from '../../assets/images/logo.png'
import headerBg from '../../assets/images/headerBg.webp'
import cloud from '../../assets/images/cloud.webp'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const words = ['Mint', 'your', 'zoku,', 'Take', 'a', 'side'];

const LetterAnimation = ({ letter, delay }) => {
  const variants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.span
      className="inline-block"
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
    >
      {letter}
    </motion.span>
  );
};

const WordAnimation = () => {
  return (
    <div className="text-center z-50">
      {words.map((word, wordIndex) => (
        <div key={wordIndex} className="inline-block uppercase text-center font-bold font-lumanosimo text-lg text-gray-100 mx-1">
          {word.split('').map((letter, letterIndex) => (
            <LetterAnimation
              key={letterIndex}
              letter={letter}
              delay={wordIndex * 0.2 + letterIndex * 0.1}
            />
          ))}
        </div>
      ))}
    </div>
  );
};


const MovingImage = ({ x, y }) => {
  const imageStyle = {
    position: 'absolute',
    bottom: '-100px',
    left: '-100px',
  };

  const variants = {
    start: { x: '-100px', y: 0 },
    end: { x: '100vw', y: '-100vh' },
  };

  const transition = {
    x: {
      duration: 10,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'linear', // Burayı linear olarak güncelliyoruz
    },
    y: {
      duration: 20,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'linear', // Burayı linear olarak güncelliyoruz
    },
  };

  const controls = useAnimation();

  useEffect(() => {
    const randomX = Math.random() * (window.innerWidth - 100); // Rastgele x konumu
    const randomY = Math.random() * (window.innerHeight - 100); // Rastgele y konumu
    controls.start({ x: randomX, y: randomY }); // Rastgele konuma başlat
  }, [controls]);

  return (
    <motion.img
      src={cloud}
      alt="Moving Image"
      style={{ ...imageStyle, x, y }} // x ve y koordinatlarını kullan
      initial="start"
      animate={controls}
      variants={variants}
      transition={transition}
    />
  );
};


const HeaderContent = () => {
  return (
    <section className=''>
      <div className="content-logo" >
        <img className='z-20' src={headerLogo} alt="headerLogo" />
        <MovingImage x={100} y={100} />
        <MovingImage x={200} y={300} />
        <MovingImage x={400} y={200} />
        
        <WordAnimation />

        <div className="content-img mt-[-620px] relative">
          <img src={headerBg} className='' alt="headerBg" />
        </div>
      </div>

    </section>
  )
}

export default HeaderContent