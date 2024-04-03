"use client"

import styles from "../page.module.scss"

import Picture1 from '../../public/medias/4.jpg';
import Picture2 from '../../public/medias/5.jpg';
import Picture3 from '../../public/medias/6.jpg';
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const FramerMotion = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  const titleTransform = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rightImageTransform = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const leftImageTransform = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const images = [
    {
      src: Picture1,
      y: 0
    },
    {
      src: Picture2,
      y: leftImageTransform
    },
    {
      src: Picture3,
      y: rightImageTransform
    }
  ]

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.body}>
        <motion.h1 style={{ y: titleTransform }}>Parallax</motion.h1>
        <h1>Scroll</h1>
        <div className={styles.word}>
          <p>
            {
              "with framer motion".split("").map((letter, i) => (
                <motion.span style={{ top: useTransform(scrollYProgress, [0, 1], [0, Math.floor(Math.random() * -75) - 25]) }} key={i}>{letter}</motion.span>
              ))
            }
          </p>
        </div>
      </div>
      <div className={styles.images}>
        {
          images.map(({ src, y }, i) => (
            <motion.div key={i} style={{ y }} className={styles.imageContainer}>
              <Image
                src={src}
                placeholder="blur"
                alt="image"
                fill
              />
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}