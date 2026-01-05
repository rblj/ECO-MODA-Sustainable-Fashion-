
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';
import BackButton from '../components/BackButton';

interface CheckoutProps {
  items: CartItem[];
  onClearCart: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onClearCart }) => {
  const [isOrdered, setIsOrdered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: ''
  });

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // HCI Visibility of System Status: Multi-second delay to simulate processing
    setTimeout(() => {
      setIsOrdered(true);
      onClearCart();
      setIsSubmitting(false);
    }, 2000);
  };

  const isFieldValid = (val: string) => val.length > 0;

  if (items.length === 0 && !isOrdered) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <BackButton />
        <h2 className="text-2xl font-light mb-6 text-stone-900 tracking-tight">Your bag is currently empty</h2>
        <Link to="/shop" className="px-12 py-5 bg-stone-900 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-stone-800 transition-all shadow-xl">Start Browsing</Link>
      </div>
    );
  }

  if (isOrdered) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-32 text-center animate-in fade-in slide-in-from-bottom-6 duration-1000">
        <div className="w-24 h-24 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl">
          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-light text-stone-900 mb-6 tracking-tight">Order Confirmed.</h1>
        <p className="text-stone-500 mb-12 text-lg leading-relaxed font-light">Thank you for supporting sustainable craftsmanship. Your order will be shipped using compostable packaging within 24 hours.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link to="/" className="px-12 py-5 bg-stone-900 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-stone-800 transition-all shadow-xl">Return Home</Link>
          <Link to="/shop" className="px-12 py-5 border-2 border-stone-200 text-stone-900 text-[10px] font-black uppercase tracking-[0.3em] hover:border-stone-900 transition-all">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 lg:py-24">
      <BackButton />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Form Section */}
        <div className="lg:col-span-7">
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-stone-900 mb-4 tracking-tighter">Conscious <span className="font-bold">Checkout</span></h1>
            <p className="text-stone-400 font-bold text-[10px] uppercase tracking-[0.3em]">Plastic-Free Delivery Fulfillment</p>
          </header>
          
          <form onSubmit={handlePlaceOrder} className="space-y-12">
            <section className="space-y-8">
              <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-stone-900 border-b border-stone-100 pb-4">Personal Contact</h2>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-stone-500 mb-3">Email For Updates *</label>
                <input 
                  required type="email" value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className={`w-full h-14 px-6 border-2 focus:outline-none transition-all text-sm rounded-sm
                    ${formData.email ? (isFieldValid(formData.email) ? 'border-emerald-100 bg-emerald-50/10' : 'border-rose-100') : 'border-stone-100'}`}
                  placeholder="name@provider.com"
                />
              </div>

              <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-stone-900 border-b border-stone-100 pb-4 pt-4">Delivery Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-stone-500 mb-3">First Name *</label>
                  <input required type="text" value={formData.firstName}
                    onChange={e => setFormData({...formData, firstName: e.target.value})}
                    className="w-full h-14 px-6 border-2 border-stone-100 focus:border-stone-900 focus:outline-none transition-all text-sm rounded-sm" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-stone-500 mb-3">Last Name *</label>
                  <input required type="text" value={formData.lastName}
                    onChange={e => setFormData({...formData, lastName: e.target.value})}
                    className="w-full h-14 px-6 border-2 border-stone-100 focus:border-stone-900 focus:outline-none transition-all text-sm rounded-sm" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-stone-500 mb-3">Street & House Number *</label>
                <input required type="text" value={formData.address}
                  onChange={e => setFormData({...formData, address: e.target.value})}
                  className="w-full h-14 px-6 border-2 border-stone-100 focus:border-stone-900 focus:outline-none transition-all text-sm rounded-sm" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-stone-500 mb-3">City *</label>
                  <input required type="text" value={formData.city}
                    onChange={e => setFormData({...formData, city: e.target.value})}
                    className="w-full h-14 px-6 border-2 border-stone-100 focus:border-stone-900 focus:outline-none transition-all text-sm rounded-sm" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-stone-500 mb-3">Postal Zip *</label>
                  <input required type="text" value={formData.zip}
                    onChange={e => setFormData({...formData, zip: e.target.value})}
                    className="w-full h-14 px-6 border-2 border-stone-100 focus:border-stone-900 focus:outline-none transition-all text-sm rounded-sm" />
                </div>
              </div>
            </section>

            <section className="pt-12 border-t border-stone-200">
              <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-stone-900 mb-8">Payment Authorization</h2>
              <div className="p-8 bg-emerald-50/30 border-2 border-emerald-100 flex items-center gap-5 mb-12 rounded-sm">
                <div className="w-6 h-6 rounded-full border-4 border-emerald-800 animate-pulse" />
                <div className="flex-grow">
                  <p className="text-[11px] font-black uppercase tracking-widest text-emerald-900">Academic Demo Environment</p>
                  <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest mt-1">Transaction logic is simulated. Secure order processing only.</p>
                </div>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full h-16 text-[10px] font-black uppercase tracking-[0.4em] transition-all shadow-2xl rounded-sm
                  ${isSubmitting ? 'bg-stone-400 cursor-not-allowed text-stone-200' : 'bg-stone-900 text-white hover:bg-stone-800'}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Fulfilling Order...
                  </span>
                ) : 'Confirm and Pay Securely'}
              </button>
            </section>
          </form>
        </div>

        {/* Sidebar Summary */}
        <aside className="lg:col-span-5">
          <div className="bg-stone-50 p-10 lg:sticky lg:top-32 rounded-sm border-2 border-stone-100 shadow-sm">
            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-stone-900 mb-10 pb-5 border-b border-stone-200">Bag Review</h2>
            <div className="max-h-[35vh] overflow-y-auto mb-10 pr-4 custom-scrollbar">
              {items.map(item => (
                <div key={`${item.id}-${item.selectedSize}`} className="flex gap-6 mb-8 last:mb-0">
                  <div className="w-20 h-24 bg-white border border-stone-200 rounded-sm overflow-hidden flex-shrink-0 shadow-sm">
                    <img src={item.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow flex flex-col justify-center">
                    <h4 className="text-[11px] font-black text-stone-900 uppercase tracking-widest mb-1">{item.name}</h4>
                    <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mb-2">Size {item.selectedSize} · Qty {item.quantity}</p>
                    <span className="text-[9px] text-emerald-800 font-black uppercase tracking-[0.1em] bg-white border border-emerald-50 px-2 py-0.5 inline-block self-start">{item.ecoTag}</span>
                  </div>
                  <div className="text-sm font-black text-stone-900 flex items-center">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-5 pt-10 border-t border-stone-200">
              <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-stone-500">
                <span>Items Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-emerald-800">
                <span>Sustainability Fee</span>
                <span>WAIVED</span>
              </div>
              <div className="flex justify-between text-2xl font-bold text-stone-900 pt-8 border-t border-stone-100">
                <span className="font-light tracking-tighter">Total Due</span>
                <span className="tracking-tighter">${subtotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Checkout;
