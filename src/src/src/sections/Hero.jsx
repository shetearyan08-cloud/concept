import React from 'react';

function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">
        CONCEPT
      </h1>
      <p className="mt-4 max-w-md text-zinc-400">
        A beautifully arranged showcase website built entirely on GitHub.
      </p>
    </section>
  );
}

export default Hero;