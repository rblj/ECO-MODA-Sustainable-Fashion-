
import React from 'react';
import { Link } from 'react-router-dom';
import { IMPACT_STATS, PRODUCTS } from '../data';

const Home: React.FC = () => {
  const featured = PRODUCTS.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero - Impactful Visual Hierarchy */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0 scale-110">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000" 
            alt="Sustainability fashion header" 
            className="w-full h-full object-cover opacity-50 grayscale-[10%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-transparent to-stone-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-900/40 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] mb-10 rounded-full animate-in fade-in slide-in-from-top-4 duration-1000">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Join the Circular Movement
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-white mb-8 leading-[0.9] tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Wear the <br /><span className="font-bold italic">Future.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-in fade-in duration-1000 delay-500">
            Timeless style crafted from regenerated fibers. <br className="hidden md:block" /> Designed for your wardrobe, and the planet's legacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
            <Link 
              to="/shop" 
              className="px-12 py-5 bg-white text-stone-900 text-xs font-black uppercase tracking-[0.3em] hover:bg-emerald-50 transition-all rounded-sm shadow-2xl hover:scale-105"
            >
              Explore Shop
            </Link>
            <Link 
              to="/sustainability" 
              className="px-12 py-5 bg-transparent border-2 border-white/30 text-white text-xs font-black uppercase tracking-[0.3em] hover:bg-white/10 transition-all rounded-sm backdrop-blur-sm"
            >
              Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications - HCI Trust/Professionalism */}
      <section className="py-12 bg-stone-50 border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale group hover:grayscale-0 transition-all duration-700">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-stone-900">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
            GOTS Certified
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-stone-900">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"/></svg>
            Fair Trade
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-stone-900">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17 10.5V7C17 4.24 14.76 2 12 2C9.24 2 7 4.24 7 7V10.5C5.12 11.67 4 13.4 4 15.5C4 18.54 6.46 21 9.5 21C11.51 21 13.28 19.93 14.28 18.33C14.88 18.77 15.61 19 16.39 19C18.38 19 20 17.38 20 15.39C20 13.62 18.72 12.15 17 11.89V10.5Z"/></svg>
            B-Corp Pending
          </div>
        </div>
      </section>

      {/* Impact Stats - System Status Visualization */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {IMPACT_STATS.map((stat, idx) => (
              <div key={idx} className="group p-12 border border-stone-100 hover:border-emerald-200 transition-all bg-stone-50/50 hover:bg-white hover:shadow-2xl relative overflow-hidden rounded-sm">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <h3 className="text-5xl font-light text-stone-900 mb-4 tracking-tighter">{stat.value}</h3>
                <p className="text-emerald-800 font-black mb-4 uppercase tracking-[0.2em] text-[10px]">{stat.label}</p>
                <p className="text-stone-500 text-sm font-light leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection - Scanning & Visibility */}
      <section className="py-24 bg-white border-t border-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 mb-4 block">Seasonal Edit</span>
              <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-6 tracking-tight">
                Designed for <span className="font-bold">Longevity</span>
              </h2>
              <p className="text-stone-500 text-lg font-light leading-relaxed">
                We believe in buying better and buying less. Our curated selection focuses on high-performance natural fibers that age beautifully.
              </p>
            </div>
            <Link to="/shop" className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-stone-900 border-b-2 border-stone-900 pb-2">
              All Collections
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {featured.map((product) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`} 
                className="group flex flex-col"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-8 bg-stone-100 rounded-sm shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-5 left-5">
                    <span className="px-3 py-1 bg-white/95 text-[9px] font-black uppercase tracking-[0.2em] text-emerald-900 shadow-sm border border-emerald-50">
                      {product.ecoTag}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-emerald-800 transition-colors tracking-tight">
                  {product.name}
                </h3>
                <p className="text-stone-500 font-medium">${product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recycle CTA - Mission Driven */}
      <section className="py-32 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full"><path fill="currentColor" d="M40,-64.4C52.7,-57.5,64.3,-48.3,71.5,-36.4C78.7,-24.5,81.4,-9.9,79.1,4C76.8,17.9,69.5,31.2,60.3,43.2C51.1,55.1,40,65.8,26.7,72.4C13.5,79,1.9,81.6,-11,79.1C-23.9,76.6,-38.1,69.1,-50.7,59.3C-63.3,49.5,-74.3,37.3,-79.8,23.3C-85.3,9.4,-85.3,-6.2,-81.4,-20.9C-77.5,-35.6,-69.6,-49.4,-57.8,-56.7C-46,-64,-30.3,-64.8,-15.9,-67.2C-1.5,-69.6,11.5,-73.6,24.8,-73.5C38.1,-73.4,51.7,-69.2,64.4,-61.3Z" transform="translate(100 100)" /></svg>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-400 mb-8 block">Zero Waste Initiative</span>
          <h2 className="text-5xl md:text-7xl font-light mb-8 leading-tight tracking-tighter">Your clothes shouldn't <br /><span className="font-bold italic">End in Landfill.</span></h2>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
            Every ECO-MODA piece can be returned for fiber reclamation. We take responsibility for everything we make, from seed to shred.
          </p>
          <Link 
            to="/sustainability" 
            className="px-14 py-5 bg-white text-emerald-950 text-xs font-black uppercase tracking-[0.4em] hover:bg-emerald-50 transition-all shadow-2xl rounded-sm inline-block"
          >
            Join the Cycle
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
