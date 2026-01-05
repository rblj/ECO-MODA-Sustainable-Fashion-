
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data';
import { Category } from '../types';
import BackButton from '../components/BackButton';

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const categories: Category[] = ['All', 'Men', 'Women', 'Accessories', 'Recycled'];

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 lg:py-24">
      <BackButton />
      
      {/* Page Header - Hierarchy */}
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-8 border-b border-stone-100 pb-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-light text-stone-900 mb-3 tracking-tight">
            The <span className="font-bold">Collection</span>
          </h1>
          <p className="text-stone-500 font-medium uppercase tracking-[0.1em] text-xs">
            Showing {filteredProducts.length} Sustainable pieces
          </p>
        </div>
        
        {/* Filter UI - Consistent and accessible */}
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Product Categories">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] rounded-full transition-all border-2
                ${activeCategory === cat 
                  ? 'bg-stone-900 text-white border-stone-900 shadow-md' 
                  : 'bg-white text-stone-400 border-stone-100 hover:border-stone-300 hover:text-stone-700'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid - Consistent spacing and hover affordance */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-40 bg-stone-50 rounded-lg border-2 border-dashed border-stone-200" role="status">
          <p className="text-stone-400 font-medium uppercase tracking-widest text-sm">No conscious items found in this section.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {filteredProducts.map((product) => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`} 
              className="group flex flex-col focus:outline-none focus:ring-4 focus:ring-emerald-500/20 rounded-xl"
              aria-label={`View details for ${product.name}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-stone-100 rounded-sm shadow-sm group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={product.image} 
                  alt="" 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-white/95 text-[9px] font-black uppercase tracking-widest text-emerald-800 shadow-sm border border-emerald-50">
                    {product.ecoTag}
                  </span>
                </div>
                {/* Hover overlay - Feedback */}
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500"></div>
                <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-full py-4 bg-white text-stone-900 text-[10px] font-black uppercase tracking-[0.3em] text-center shadow-xl">
                    View Conscious Details
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-start px-1">
                <div className="max-w-[80%]">
                  <h3 className="text-lg font-bold text-stone-900 mb-1 group-hover:text-emerald-800 transition-colors leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-stone-400 text-[10px] font-bold uppercase tracking-widest">{product.category}</p>
                </div>
                <p className="text-stone-900 font-bold text-lg leading-none pt-1">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
