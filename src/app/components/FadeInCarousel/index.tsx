// Cross-fading background image carousel. Fills its nearest positioned parent.

"use client";

import { useEffect, useRef, useState } from "react";
import "./FadeInCarousel.css";
import styles from "./FadeInCarousel.module.css";

type imagesProp = {
  images: string[];
};

const HOLD_MS = 7000;
const FADE_MS = 1500;

export default function FadeInCarousel({ images }: imagesProp) {
  const [currentImage, setCurrentImage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Tracked so the pending swap is cancelled on unmount, not just the interval.
    let swapTimeout: ReturnType<typeof setTimeout> | undefined;

    const interval = setInterval(() => {
      if (!ref.current) return;

      ref.current.classList.remove("fade-in");
      ref.current.classList.add("fade-out");

      swapTimeout = setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);

        ref.current?.classList.remove("fade-out");
        void ref.current?.offsetWidth;
        ref.current?.classList.add("fade-in");
      }, FADE_MS);
    }, HOLD_MS);

    return () => {
      clearInterval(interval);
      clearTimeout(swapTimeout);
    };
  }, [images.length]);

  return (
    <div
      className={`fade-in ${styles.carouselContainer}`}
      id="carousel"
      ref={ref}
      aria-hidden="true"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: "cover",
        backgroundPosition: currentImage === 0 ? "bottom" : "center",
      }}
    ></div>
  );
}
