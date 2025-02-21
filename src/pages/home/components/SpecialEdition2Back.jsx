import React from 'react';
import { motion } from 'framer-motion';
import { EditionbackWrapper } from './style';

const SpecialEdition2Back = () => {
  return (
    <EditionbackWrapper>
      <div className="textAreaTitle">박보영 특집</div>
      <div className="textArea">영화 드라마 예능 몰아보기</div>
      <motion.div
        className="backgroundParticle"
        animate={{ opacity: [0.1, 1, 0.1, 1] }}
        transition={{
          duration: 1,
          repeat: 3,
          ease: 'easeInOut',
        }}
        viewport={{ once: true, amount: 0.3 }}
      ></motion.div>
      <div className="backgroundLine"></div>

      <motion.div
        className="backgroundActor2"
        initial={{ scale: 1.0 }}
        whileInView={{ scale: 1.1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      ></motion.div>

      <motion.div
        className="backgroundFigure1"
        initial={{ x: 110, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      ></motion.div>

      <motion.div
        className="backgroundFigure2"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      ></motion.div>
    </EditionbackWrapper>
  );
};

export default SpecialEdition2Back;
