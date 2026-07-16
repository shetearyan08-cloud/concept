import React from 'react';
import ModelViewer from '../components/reactbits/components/ModelViewer';

function Showcase3D() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <h2 className="text-4xl font-bold text-white mb-4">Interactive 3D Object</h2>
        <p className="text-zinc-400 leading-relaxed mb-6">
          Drag, rotate, and interact with this real-time 3D model. Powered by WebGL lighting, mouse parallax physics, and smooth momentum.
        </p>
      </div>

      {/* This renders a default 3D Model fetched from the web - no upload needed! */}
      <div className="w-full md:w-[450px] h-[450px] bg-zinc-900/40 rounded-2xl border border-zinc-800 overflow-hidden flex items-center justify-center">
        <ModelViewer 
          url="https://models.readyplayer.me/646f0490b4d4b1a43a70b02d.glb" 
          width="100%"
          height="100%"
          autoRotate={true}
          autoRotateSpeed={0.5}
          enableMouseParallax={true}
        />
      </div>
    </section>
  );
}

export default Showcase3D;