
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate(-1)}
      className="group flex items-center gap-2 mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 hover:text-stone-900 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-800 rounded-sm pr-4 py-2"
      aria-label="Go back to previous page"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" height="16" 
        viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" strokeWidth="3" 
        strokeLinecap="round" strokeLinejoin="round"
        className="transition-transform group-hover:-translate-x-1"
      >
        <path d="m15 18-6-6 6-6"/>
      </svg>
      Back
    </button>
  );
};

export default BackButton;
