import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion';
import hero from '../../assets/images/hero.webp'
import { useInView } from 'react-intersection-observer';
const words = [
    'The',
    'City',
    'of,',
    'Todaki',
    'was',
    'blooming',
    'afeter',
    'indepence',
    'before',
    'a',
    'was',
    'torn',
    'a',
    'events',
    'of',
    'apart',
    'Todaki',
    'was',
    'blooming',
    'afeter',
    'indepence',
    'before',
    'a',
    'was',
    'torn',
    'a',
    'events',
    'of',
    'apart',
    'Todaki',
    'was',
    'blooming',
    'afeter',
    'indepence',
    'before',
    'a',
    'was',
    'torn',
    'a',
    'events',
    'of',
    'apart',
    'Todaki',
    'was',
    'blooming',
    'afeter',
    'indepence',
    'before',
    'a',
    'was',
    'torn',
    'a',
    'events',
    'of',
    'apart',
    'Now',
    'Rebuilt',
    'the',
    'begimns',
    'metropolis',
    'apart',
    'Now',
    'Rebuilt',
    'the',
    'begimns',
    'metropolis',
    'apart',
    'Now',
    'Rebuilt',
    'the',
    'begimns',
    'metropolis',
    'golry',
    'almost',
];

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
        <div className="">
            {words.map((word, wordIndex) => (
                <div key={wordIndex} className="inline-block capitalize font-semibold font-lumanosimo text-primary mx-1">
                    {word.split('').map((letter, letterIndex) => (
                        <LetterAnimation
                            key={letterIndex}
                            letter={letter}
                            delay={wordIndex * 0.1 + letterIndex * 0.1}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

const HomeIntro = () => {
    const imgControls = useAnimation();
    const textControls = useAnimation();
    const [imgRef, imgInView] = useInView({ triggerOnce: true });
    const [textRef, textInView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (imgInView) {
            imgControls.start({ x: 0 });
        }
        if (textInView) {
            textControls.start({ opacity: 1 });
        }
    }, [imgControls, imgInView, textControls, textInView]);


    return (
        <section className='bg-white h-[700px] mt-20'>
            <div className="container">
                <div className="flex">
                    <div className="w-[45%]" ref={textRef}>
                        <WordAnimation />
                    </div>
                    <motion.div
                        className="w-[55%]"
                        ref={imgRef}
                        initial={{ x: "100%", opacity: 1 }}
                        animate={imgControls}
                        transition={{ duration: 17, ease: "easeOut" }}
                    >
                        <img src={hero} alt="hero" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default HomeIntro