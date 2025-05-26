import React from 'react';
import Header from './components/Header';
import PromoMessage from './components/PromoMessage';
import CtaButton from './components/CtaButton';
import ProductBenefits from './components/ProductBenefits';
import './utils/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      {/* Red corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-red-600/20 transform -rotate-45 translate-x-[-50%] translate-y-[-50%]"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-600/20 transform rotate-135 translate-x-[50%] translate-y-[50%]"></div>
      
      <main className="relative z-10 flex-1 flex flex-col">
        <PromoMessage />
        <CtaButton text="SIM! QUERO ACESSO AOS CONTEÚDOS PREMIUM!" />
        <ProductBenefits />
      </main>
      
      {/* Red bottom bar */}
      <div className="h-2 bg-gradient-to-r from-red-900 via-red-600 to-red-900 mt-12"></div>
    </div>
  );
}

export default App;