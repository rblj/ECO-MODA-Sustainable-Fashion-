
import React, { useState, useEffect, useMemo } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartItem, Product, UserFeedback } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Sustainability from './pages/Sustainability';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

// A simple hook to scroll to top on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [feedback, setFeedback] = useState<UserFeedback | null>(null);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('eco-moda-cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to load cart", e);
      }
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('eco-moda-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, size: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.selectedSize === size);
      if (existing) {
        return prev.map(item => 
          (item.id === product.id && item.selectedSize === size)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, selectedSize: size, quantity: 1 }];
    });
    
    // Visibility of system status: Provide immediate feedback
    setFeedback({ message: `${product.name} added to cart!`, type: 'success' });
    setTimeout(() => setFeedback(null), 3000);
  };

  const updateQuantity = (id: string, size: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id && item.selectedSize === size) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string, size: string) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.selectedSize === size)));
    setFeedback({ message: `Item removed from cart`, type: 'info' });
    setTimeout(() => setFeedback(null), 3000);
  };

  const cartCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen relative">
        <ScrollToTop />
        <Navbar cartCount={cartCount} />
        
        {/* Global Feedback Banner (HCI Visibility of Status) */}
        {feedback && (
          <div className={`fixed top-20 right-4 z-50 p-4 rounded-md shadow-lg transition-all duration-300 transform translate-y-0
            ${feedback.type === 'success' ? 'bg-emerald-800 text-white' : 'bg-stone-800 text-white'}`}>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              <span className="font-medium text-sm">{feedback.message}</span>
            </div>
          </div>
        )}

        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail onAddToCart={addToCart} />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/cart" element={
              <Cart 
                items={cart} 
                onUpdateQuantity={updateQuantity} 
                onRemove={removeFromCart} 
              />
            } />
            <Route path="/checkout" element={<Checkout items={cart} onClearCart={() => setCart([])} />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
