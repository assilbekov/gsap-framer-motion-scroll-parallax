"use client"

import Lenis from "@studio-freight/lenis";
import styles from "./page.module.scss";
import { FramerMotion } from "./_components/FramerMotion";
import { GSAP } from "./_components/GSAP";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      window.requestAnimationFrame(raf);
    }

    window.requestAnimationFrame(raf);
  }, [])

  return (
    <main className={styles.main}>
      <FramerMotion />
      <GSAP />
    </main>
  );
}
