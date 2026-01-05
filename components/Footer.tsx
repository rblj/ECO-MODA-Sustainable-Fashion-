
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-white block mb-6">
              ECO<span className="text-emerald-500 font-light">MODA</span>
            </Link>
            <p className="text-sm leading-relaxed text-stone-400">
              Leading the shift towards a regenerative fashion industry. Style with a conscience, quality that lasts.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase text-xs tracking-widest">Shop</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/shop" className="hover:text-emerald-400 transition-colors">All Collections</Link></li>
              <li><Link to="/shop" className="hover:text-emerald-400 transition-colors">Women</Link></li>
              <li><Link to="/shop" className="hover:text-emerald-400 transition-colors">Men</Link></li>
              <li><Link to="/shop" className="hover:text-emerald-400 transition-colors">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase text-xs tracking-widest">About</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/sustainability" className="hover:text-emerald-400 transition-colors">Our Mission</Link></li>
              <li><Link to="/sustainability" className="hover:text-emerald-400 transition-colors">Recycling Program</Link></li>
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Sustainability Report</Link></li>
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Ethical Sourcing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase text-xs tracking-widest">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Track Order</Link></li>
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Shipping Info</Link></li>
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; 2026 ECO-MODA Fashion Group. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
