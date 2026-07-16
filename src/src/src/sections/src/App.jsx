import React from 'react';
import Hero from './sections/Hero';
import Showcase3D from './sections/Showcase3D'; // <-- Loads your 3D section
import Waves from './components/reactbits/backgrounds/Waves';

function App() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white overflow-hidden">
      
      {/* Background waves */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <Waves
          lineColor="rgba(139, 92, 246, 0.3)"
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

      {/* Main page sections */}
      <main className="relative z-10">
        <Hero />
        <Showcase3D /> {/* <-- Renders your interactive 3D model! */}
      </main>
    </div>
  );
}

export default App;