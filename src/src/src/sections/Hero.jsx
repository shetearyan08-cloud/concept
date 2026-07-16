import React from 'react';
// 1. Import the ReactBits script from the folder we just created!
import SplitText from '../components/reactbits/text/SplitText';

function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center">
      
      {/* 2. Use the component with custom properties */}
      <SplitText
        text="CONCEPT"
        className="text-6xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500"
        delay={100}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        threshold={0.2}
        rootMargin="-50px"
      />
      
      <p className="mt-4 max-w-md text-zinc-400">
        A beautifully arranged showcase website built entirely on GitHub.
      </p>
    </section>
  );
}

export default Hero;