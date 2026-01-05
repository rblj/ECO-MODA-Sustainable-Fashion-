
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';
import BackButton from '../components/BackButton';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, size: string, delta: number) => void;
  onRemove: (id: string, size: string) => void;
}

const Cart: React.FC<CartProps> = ({ items, onUpdateQuantity, onRemove }) => {
  const subtotal = useMemo(() => items.reduce((acc, item) => acc + (item.price * item.quantity), 0), [items]);

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <BackButton />
        <div className="inline-block p-10 bg-stone-50 rounded-full mb-8 shadow-inner">
          <svg className="w-16 h-16 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <h1 className="text-4xl font-light text-stone-900 mb-4">Your bag is empty</h1>
        <p className="text-stone-500 mb-12 max-w-sm mx-auto leading-relaxed">Let's find some timeless pieces that make a difference.</p>
        <Link 
          to="/shop" 
          className="px-12 py-5 bg-stone-900 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-stone-800 transition-all inline-block shadow-2xl"
        >
          Explore Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-24">
      <BackButton />
      <h1 className="text-4xl md:text-5xl font-light text-stone-900 mb-16">Shopping <span className="font-bold">Bag</span></h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Item List */}
        <div className="lg:col-span-8">
          <div className="border-t border-stone-200">
            {items.map((item) => (
              <div key={`${item.id}-${item.selectedSize}`} className="py-10 border-b border-stone-200 flex flex-col sm:flex-row gap-8">
                <div className="w-full sm:w-40 aspect-[4/5] bg-stone-100 rounded-sm overflow-hidden flex-shrink-0 shadow-sm">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-grow flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 mb-2 uppercase tracking-tight">{item.name}</h3>
                      <p className="text-[10px] text-stone-500 font-black uppercase tracking-widest mb-4">Size: {item.selectedSize}</p>
                      <span className="text-[10px] px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-100 font-black uppercase tracking-widest">
                        {item.ecoTag}
                      </span>
                    </div>
                    <p className="text-lg text-stone-900 font-bold">${item.price * item.quantity}</p>
                  </div>

                  <div className="flex justify-between items-center mt-10">
                    {/* HCI: Visible Feedback on adjustment */}
                    <div className="flex items-center border-2 border-stone-100 rounded-sm overflow-hidden">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.selectedSize, -1)}
                        className="w-12 h-12 flex items-center justify-center hover:bg-stone-50 text-stone-900 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" /></svg>
                      </button>
                      <span className="px-4 text-sm font-black text-stone-900 w-12 text-center" aria-live="polite">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.selectedSize, 1)}
                        className="w-12 h-12 flex items-center justify-center hover:bg-stone-50 text-stone-900 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
                      </button>
                    </div>

                    <button 
                      onClick={() => onRemove(item.id, item.selectedSize)}
                      className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 hover:text-rose-700 transition-colors flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary - Minimalist & Clear */}
        <div className="lg:col-span-4">
          <div className="bg-stone-50 p-10 rounded-sm border-2 border-stone-100 sticky top-32">
            <h2 className="text-[11px] font-black text-stone-900 mb-10 uppercase tracking-[0.3em]">Your Order</h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-stone-500">
                <span>Items Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-emerald-800">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className="pt-6 border-t border-stone-200 flex justify-between text-stone-900 font-bold text-xl">
                <span className="font-light">Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <Link 
              to="/checkout" 
              className="w-full h-16 bg-stone-900 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-stone-800 transition-all flex items-center justify-center shadow-xl"
            >
              Checkout Now
            </Link>
            
            <p className="mt-8 text-[9px] text-stone-400 text-center uppercase tracking-widest leading-relaxed">
              * Climate-positive logistics included in every delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
