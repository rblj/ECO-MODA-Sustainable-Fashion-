
import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import BackButton from '../components/BackButton';

interface ProductDetailProps {
  onAddToCart: (product: Product, size: string) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ onAddToCart }) => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isAdding, setIsAdding] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const product = useMemo(() => PRODUCTS.find(p => p.id === id), [id]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center" role="alert">
        <h2 className="text-2xl font-bold mb-4 text-stone-900">Product Not Found</h2>
        <Link to="/shop" className="text-emerald-800 hover:text-emerald-600 underline font-medium">Return to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) return;
    
    setIsAdding(true);
    // HCI Feedback: Simulated network delay for visibility of system status
    setTimeout(() => {
      onAddToCart(product, selectedSize);
      setIsAdding(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 lg:py-24">
      <BackButton />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Gallery - High Contrast visuals */}
        <div className="relative group">
          <div className="aspect-[4/5] overflow-hidden bg-stone-100 rounded-sm shadow-sm">
            <img 
              src={product.image} 
              alt={`${product.name} product view`} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="absolute top-6 left-6">
            <span className="px-3 py-1 bg-white/95 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-900 shadow-sm border border-emerald-100">
              {product.ecoTag}
            </span>
          </div>
        </div>

        {/* Info - Hierarchy & Typography */}
        <div className="flex flex-col justify-center">
          <div className="mb-10 border-b border-stone-100 pb-8">
            <h1 className="text-4xl md:text-5xl font-light text-stone-900 mb-4 tracking-tight leading-tight">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl text-stone-900 font-semibold">${product.price}</span>
              <span className="px-2 py-1 bg-emerald-50 text-emerald-800 text-[10px] font-bold rounded uppercase">In Stock</span>
            </div>
            <p className="text-stone-600 leading-relaxed text-lg font-light">
              {product.description}
            </p>
          </div>

          {/* Size Selection - Accessibility & Error Prevention */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-5">
              <label id="size-label" className="text-[11px] font-black uppercase tracking-[0.2em] text-stone-900">
                Choose Size
              </label>
              <button className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 hover:text-emerald-600 underline">
                Size Guide
              </button>
            </div>
            <div className="flex flex-wrap gap-3" role="radiogroup" aria-labelledby="size-label">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  aria-checked={selectedSize === size}
                  role="radio"
                  className={`min-w-[60px] h-16 flex items-center justify-center border-2 transition-all text-sm font-bold uppercase tracking-widest
                    ${selectedSize === size 
                      ? 'border-emerald-800 bg-emerald-800 text-white shadow-md' 
                      : 'border-stone-100 text-stone-500 hover:border-stone-300 hover:text-stone-900'}`}
                >
                  {size}
                </button>
              ))}
            </div>
            {!selectedSize && (
              <p className="mt-3 text-[11px] font-bold text-amber-700 uppercase tracking-widest animate-pulse" role="alert">
                * Please select a size to add to bag
              </p>
            )}
          </div>

          {/* Add to Cart - Large, Accessible Button */}
          <div className="space-y-4">
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize || isAdding}
              className={`w-full h-16 text-xs font-black uppercase tracking-[0.3em] transition-all rounded-sm flex items-center justify-center gap-3
                ${!selectedSize 
                  ? 'bg-stone-100 text-stone-400 cursor-not-allowed border border-stone-200' 
                  : showSuccess
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-stone-900 text-white hover:bg-stone-800 shadow-xl active:scale-[0.98]'}`}
            >
              {isAdding ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Updating Bag...
                </span>
              ) : showSuccess ? (
                <span className="flex items-center gap-2">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  Success
                </span>
              ) : (
                'Add to Bag'
              )}
            </button>
            <p className="text-center text-[10px] text-stone-400 font-bold uppercase tracking-widest">
              Standard 3-5 Day Carbon-Neutral Delivery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
