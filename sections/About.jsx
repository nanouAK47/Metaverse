'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| A propos " textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Metaverse</span> est une
        expérience inoubliable, où vous pouvez explorer des mondes virtuels d'une réalité surprenante,
        profitez de la liberté illimitée offerte par le Metaverse{' '}
        <span className="font-extrabold text-white">
          l'essence même de cette expérience.
        </span>{' '}
        Tout ce dont vous avez besoin est un casque {' '}
        <span className="font-extrabold text-white">VR</span> et un 
        <span className="font-extrabold text-white">ordinateur</span> pour explorer facilement les univers de vos rêves.
        Laissez-vous{' '}
        <span className="font-extrabold text-white">emporter</span> par l'exploration des mondes de Metaverse, plongez dans un univers {' '}
        <span className="font-extrabold text-white">fascinant</span> et {' '}
        <span className="font-extrabold text-white">réaliste</span> ! 
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
