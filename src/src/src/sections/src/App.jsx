import React from 'react';
import Hero from './sections/Hero';
// 1. Import your new Waves background!
import Waves from './components/reactbits/backgrounds/Waves';

function App() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white overflow-hidden">
      
      {/* 2. Place the Waves component directly in the background */}
      <div className="absolute inset-0 -z-10 opacity-40"> {/* Opacity keeps it subtle and readable */}
        <Waves
          lineColor="rgba(139, 92, 246, 0.3)" // A beautiful, soft purple line
          backgroundColor="transparent"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxPoints={20}
          count={3}
          backgroundAlpha={1}
        />
      </div>

      {/* 3. Your main content layers on top */}
      <main className="relative z-10">
        <Hero />
      </main>
    </div>
  );
}

export default App;