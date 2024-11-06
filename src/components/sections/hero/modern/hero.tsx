'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import TextReveal from '@/components/motion/text-reveal';
import Reveal from '@/components/reveal';
import ParallaxImage from '@/components/motion/parallax-image';

function Hero() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <section
      className="relative w-full overflow-hidden bg-background/[0.96]"
      ref={container}
    >
      <div className="relative z-10 h-[42.5dvh] md:h-[51.2dvh] md:min-h-[50dvh] xl:h-[61.2dvh]">
        <div className="relative flex h-full flex-col items-center justify-center">
          <div className="flex w-full items-center justify-center px-4 md:px-6">
            <h1 className="text-4xl font-light sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
              <TextReveal>A data guy</TextReveal>
              <br />
              <span className="flex items-center gap-2 md:gap-4">
                <Reveal>who</Reveal>
                <motion.span className="relative mx-2 my-auto inline-block aspect-[1.5/1] h-[3.25rem] overflow-hidden rounded-full bg-[#f8cdd5] md:mx-4 md:h-[7.8rem]">
                  <Image
                    src={'/images/hearts-ornament.png'}
                    style={{ objectFit: 'scale-down' }}
                    alt="img"
                    fill
                  />
                </motion.span>
                <Reveal>to build</Reveal>
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Custom implementation instead of using ParallaxImage */}
      <div className="relative aspect-[4/2] w-screen lg:mt-12 overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Shawn standing on a hiking trail wearing a plaid shirt and black Columbia vest, holding an orange rake"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: '50% 18%' }} // Adjusted from 30% to 40% to show more forehead
        />
      </div>
    </section>
  );
}

export default Hero;