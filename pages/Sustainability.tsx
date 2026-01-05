
import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

const Sustainability: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Page Heading & Back Control */}
      <section className="bg-stone-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <BackButton />
          <div className="max-w-4xl mx-auto text-center mt-8">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-800 mb-8 block">Our Philosophy</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-stone-900 mb-10 leading-tight tracking-tighter">Better Clothes <br />for a <span className="italic font-bold">Better Earth.</span></h1>
            <p className="text-lg md:text-xl text-stone-500 font-light leading-relaxed max-w-2xl mx-auto">
              We aren't just making clothes; we're engineering a circular economy for the next generation of style.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          <div className="text-center group">
            <div className="w-20 h-20 bg-stone-900 text-white rounded-full flex items-center justify-center mb-10 mx-auto transition-transform group-hover:scale-110 duration-500">
              <span className="text-2xl font-light">01</span>
            </div>
            <h3 className="text-[11px] font-black text-stone-900 mb-6 uppercase tracking-[0.3em]">Regenerative</h3>
            <p className="text-stone-500 text-sm leading-relaxed font-light">
              Utilizing only organic fibers and existing recycled stock. Zero virgin polyester policy.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-emerald-800 text-white rounded-full flex items-center justify-center mb-10 mx-auto transition-transform group-hover:scale-110 duration-500">
              <span className="text-2xl font-light">02</span>
            </div>
            <h3 className="text-[11px] font-black text-stone-900 mb-6 uppercase tracking-[0.3em]">Circular</h3>
            <p className="text-stone-500 text-sm leading-relaxed font-light">
              Every garment is designed to be disassembled and transformed into new fibers.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-stone-400 text-white rounded-full flex items-center justify-center mb-10 mx-auto transition-transform group-hover:scale-110 duration-500">
              <span className="text-2xl font-light">03</span>
            </div>
            <h3 className="text-[11px] font-black text-stone-900 mb-6 uppercase tracking-[0.3em]">Ethical</h3>
            <p className="text-stone-500 text-sm leading-relaxed font-light">
              Safe environments, living wages, and absolute transparency throughout our supply chain.
            </p>
          </div>
        </div>
      </section>

      {/* Program Detailed Section */}
      <section className="py-24 bg-white border-y border-stone-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000" 
                alt="Textile recycling facility" 
                className="w-full h-full object-cover grayscale-[30%]"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-emerald-950 text-white p-12 shadow-2xl hidden md:block">
              <h4 className="text-5xl font-bold mb-2 tracking-tighter">10%</h4>
              <p className="text-[10px] uppercase tracking-[0.4em] font-black text-emerald-400">Earth Credit</p>
            </div>
          </div>
          <div className="lg:pl-10">
            <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-12 tracking-tight">The <span className="font-bold">Renew</span> Logic</h2>
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-stone-900 text-white flex items-center justify-center font-bold text-sm transition-all group-hover:bg-emerald-800">01</div>
                <div>
                  <h4 className="text-sm font-black text-stone-900 mb-2 uppercase tracking-widest">Request a Kit</h4>
                  <p className="text-stone-500 text-sm leading-relaxed font-light">Receive a compostable shipping bag at zero cost to your doorstep.</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-stone-900 text-white flex items-center justify-center font-bold text-sm transition-all group-hover:bg-emerald-800">02</div>
                <div>
                  <h4 className="text-sm font-black text-stone-900 mb-2 uppercase tracking-widest">Trade In</h4>
                  <p className="text-stone-500 text-sm leading-relaxed font-light">Send us any ECO-MODA item you no longer wear. We cover the carbon-neutral shipping.</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-stone-900 text-white flex items-center justify-center font-bold text-sm transition-all group-hover:bg-emerald-800">03</div>
                <div>
                  <h4 className="text-sm font-black text-stone-900 mb-2 uppercase tracking-widest">Reclaim Credit</h4>
                  <p className="text-stone-500 text-sm leading-relaxed font-light">Earn points worth up to 15% of your next conscious purchase instantly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards UI - High Contrast Status Visibility */}
      <section className="py-24 bg-stone-950 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <header className="text-center mb-20">
            <h2 className="text-3xl font-light mb-4 tracking-tight">Impact Dashboard</h2>
            <p className="text-stone-500 uppercase tracking-widest text-[10px] font-bold">Simulated User Status</p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-10 border border-stone-800 bg-stone-900/50 rounded-sm hover:border-emerald-500/50 transition-all duration-500">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-500 mb-6">Earth Points</p>
              <h3 className="text-5xl font-light text-emerald-400 tracking-tighter">1,240</h3>
              <div className="w-full h-1 bg-stone-800 mt-6 rounded-full overflow-hidden">
                <div className="w-[60%] h-full bg-emerald-400" />
              </div>
            </div>
            <div className="p-10 border border-stone-800 bg-stone-900/50 rounded-sm">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-500 mb-6">Recycled</p>
              <h3 className="text-5xl font-light text-white tracking-tighter">12</h3>
              <p className="text-[10px] text-stone-600 mt-6 font-bold uppercase tracking-widest">Garments Saved</p>
            </div>
            <div className="p-10 border border-stone-800 bg-stone-900/50 rounded-sm">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-500 mb-6">Carbon Saved</p>
              <h3 className="text-5xl font-light text-white tracking-tighter">14.2<span className="text-xl ml-1">kg</span></h3>
              <p className="text-[10px] text-stone-600 mt-6 font-bold uppercase tracking-widest">CO2eq Offset</p>
            </div>
            <div className="p-10 bg-emerald-950 border border-emerald-900 rounded-sm flex flex-col justify-between items-center text-center">
              <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center text-emerald-950 shadow-2xl shadow-emerald-500/20">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-2">Member Rank</p>
                <h3 className="text-xl font-bold tracking-tight uppercase">Eco-Warrior</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
