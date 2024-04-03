"use client"

import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from "../page.module.scss"
import Picture1 from '../../public/medias/1.jpg';
import Picture2 from '../../public/medias/2.jpg';
import Picture3 from '../../public/medias/3.jpg';
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

export const GSAP = () => {
  const images = [Picture1, Picture2, Picture3];

  const imagesRef = useRef([]);
  const title1Ref = useRef(null);
  const lettersRef = useRef([]);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context( () => {
      const tl = gsap.timeline({
          scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
          },
      })
      .to(title1Ref.current, {y: -50}, 0)
      .to(imagesRef.current[1], {y: -150}, 0)
      .to(imagesRef.current[2], {y: -255}, 0)
      lettersRef.current.forEach((letter, i) => {
          tl.to(letter, {
              top: Math.floor(Math.random() * -75) - 25,
          }, 0)
      })
      
  })
  return () => context.revert();
  }, [])

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.body}>
        <h1 ref={title1Ref}>Parallax</h1>
        <h1>Scroll</h1>
        <div className={styles.word}>
          <p>
            {
              "with gsap".split("").map((letter, i) => (
                <span key={i} ref={el => lettersRef.current[i] = el}>{letter}</span>
              ))
            }
          </p>
        </div>
      </div>
      <div className={styles.images}>
        {
          images.map((image, i) => (
            <div key={i} className={styles.imageContainer} ref={el => imagesRef.current[i] = el}>
              <Image
                src={image}
                placeholder="blur"
                alt="image"
                fill
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}