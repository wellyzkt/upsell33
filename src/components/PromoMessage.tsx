import React, { useState, useEffect } from 'react';

const PromoMessage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Add script for one-click upsell
    const script = document.createElement('script');
    script.src = 'https://app.tribopay.com.br/js/oneclick.js';
    script.async = true;
    document.body.appendChild(script);

    // Add click handler for downsell button
    const handleDownsell = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('fornpay_downsell')) {
        e.preventDefault();
        window.location.href = 'https://tecnicasedesejo.shop/promocaoexclusiva2/';
      }
    };

    document.addEventListener('click', handleDownsell);

    return () => {
      clearInterval(timer);
      document.body.removeChild(script);
      document.removeEventListener('click', handleDownsell);
    };
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const images = [
    'https://i.imgur.com/j9S4V3D.jpeg',
    'https://i.postimg.cc/VLC5Mmv1/COMA.jpg',
    'https://i.imgur.com/lU1hhKj.jpeg',
    'https://i.imgur.com/2ztqIss.jpeg',
    'https://i.imgur.com/wD5GLkF.jpeg',
    'https://i.imgur.com/22YXZPH.jpeg'
  ];

  return (
    <div className="text-center px-4 py-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex flex-col items-center gap-2">
          <div className="animate-pulse text-2xl font-bold text-yellow-400">⚠️ ATENÇÃO</div>
          <div className="text-xl font-bold text-green-400">🎁 BÔNUS EXCLUSIVO LIBERADO</div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mb-8 text-lg text-gray-200">
        <p className="mb-4">
          Alguns clientes foram selecionados para acessar uma <strong className="text-yellow-400">condição secreta e limitada</strong>, 
          com acesso a <strong className="text-yellow-400">conteúdos premium</strong> por um 
          <strong className="text-yellow-400"> desconto especial que vai muito além do convencional</strong>.
        </p>
      </div>

      <div className="w-full bg-[#FF0000] py-3 px-6 text-center text-white font-bold mb-4 rounded-full animate-pulse-subtle shadow-lg shadow-red-500/50 max-w-3xl mx-auto transform hover:scale-105 transition-transform duration-300">
        ⚠️ Oferta liberada apenas neste momento para alguns clientes selecionados.
      </div>

      <div className="flex justify-center items-center gap-2 mb-8 text-xl font-bold">
        <span className="text-red-500">⏳</span>
        <span className="text-white">Essa oferta expira em:</span>
        <span className="bg-red-500 text-white px-3 py-1 rounded-lg">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
      </div>

      <p className="text-xl font-bold text-white mb-8">
        Confira abaixo tudo o que você pode garantir agora:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="relative flex justify-center"
          >
            <img 
              src={src} 
              alt={`Promotional image ${index + 1}`}
              className="w-full object-contain rounded-lg shadow-lg"
              style={{ maxHeight: '500px' }}
              loading="lazy"
            />
            <div className="absolute top-2 right-2">
              <span className="bg-[#FF0000] text-white text-xs px-2 py-1 rounded">
                NOVO
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <div className="text-xl font-bold mb-4">TODOS OS CONTEÚDOS ACIMA</div>
        <div className="text-[#FF0000] line-through mb-1">De R$199,90</div>
        <div className="text-sm text-gray-300 mb-1">por APENAS:</div>
        <div className="text-green-500 text-4xl font-bold mb-4">R$29,90</div>
      </div>

      {/* One-click upsell buttons */}
      <div className="max-w-[400px] mx-auto">
        <a 
          href="https://go.tribopay.com.br/owap3lfc6g" 
          className="fornpay_btn bg-gradient-to-b from-[#00cc66] to-[#00a352] text-white font-arial text-lg py-3 px-6 rounded-lg border border-[#00b359] block text-center mb-3 hover:opacity-90 transition-opacity"
        >
          SIM, EU ACEITO ESSA OFERTA
        </a>
        <a 
          href="javascript:void(0)" 
          data-downsell="null" 
          className="fornpay_downsell text-[#FF0000] font-arial text-base text-center block hover:underline"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = 'https://tecnicasedesejo.shop/promocaoexclusiva2/';
          }}
        >
          Vou recusar essa oferta
        </a>
      </div>
    </div>
  );
};

export default PromoMessage;