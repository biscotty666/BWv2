"use client"
import React from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const LottieAnimation = () => {
  return (
    <div>
      <DotLottiePlayer
        src="/animation_ln0l388n.lottie"
        autoplay
        loop
      >
      </DotLottiePlayer>
    </div>
  );
};

export default LottieAnimation;