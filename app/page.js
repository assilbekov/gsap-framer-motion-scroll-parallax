"use client"

import styles from "./page.module.scss";
import { FramerMotion } from "./_components/FramerMotion";
import { GSAP } from "./_components/GSAP";

export default function Home() {
  return (
    <main className={styles.main}>
      <FramerMotion />
      <GSAP />
    </main>
  );
}
