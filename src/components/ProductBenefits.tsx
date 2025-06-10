import React from 'react';
import { Check } from 'lucide-react';

const ProductBenefits: React.FC = () => {
  const [timeLeft, setTimeLeft] = React.useState(600);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const faqs = [
    {
      question: "A compra é segura?",
      answer: "Sim! Utilizamos a plataforma mais segura do mercado para processar seus pagamentos. Seus dados estão totalmente protegidos."
    },
    {
      question: "Quanto tempo terei de acesso ao curso?",
      answer: "O acesso é vitalício! Uma vez que você adquire o curso, pode acessar o conteúdo para sempre."
    },
    {
      question: "E se eu não gostar? Tenho alguma garantia?",
      answer: "Sim! Oferecemos 7 dias de garantia incondicional. Se não ficar satisfeito, devolvemos 100% do seu dinheiro."
    },
    {
      question: "Como acesso o curso?",
      answer: "Após a compra, você receberá um email com suas credenciais de acesso à plataforma."
    },
    {
      question: "Quais são as formas de pagamentos?",
      answer: "Aceitamos cartão de crédito, PIX e boleto bancário."
    }
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-zinc-900/50 rounded-xl p-6 backdrop-blur-sm border border-[#FF0000]/10">
        <div className="flex flex-col items-center sm:items-start gap-2 mb-4">
          <span role="img" aria-label="gift" className="text-3xl">🎁</span>
          <h3 className="text-lg font-semibold text-center sm:text-left">
            O que você vai levar por apenas{' '}
            <span className="text-green-400 block sm:inline mt-1 sm:mt-0">R$29,90</span>
          </h3>
          <span className="text-2xl animate-bounce">👇</span>
        </div>
        
        <div className="space-y-4">
          {[
            { title: 'Prazer no Biquinho', desc: 'Aprenda manobras, e toques para estimular os seios até fazer ela chegar ao orgasmo pelos mamilos.' },
            { title: '6 Posições Sexuais para Pênis pequeno', desc: '6 Posições Sexuais para quem tem pênis PEQUENO' },
            { title: 'Segredo Lésbico', desc: 'Segredo Lésbico - Faça ela gozar só com os dedos' },
            { title: 'Ficar Duro Naturalmente', desc: 'Sem remédio, sem insegurança, só resultado.' },
            { title: 'Como uma Vagina Perfeitamente', desc: 'Guia prático pra ser lembrado pra sempre' },
            { title: 'Posições do Kama Sutra', desc: 'Posições do Kama Sutra pra enlouquecer de prazer na cama.' }
          ].map((benefit, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <span className="text-[#FF0000] font-bold block">{benefit.title}</span>
                <span className="text-gray-300">{benefit.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-black/40 rounded-xl p-8 border-2 border-[#FF0000] backdrop-blur-sm">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">E se você fosse comprar todos os produtos acima</h3>
          <p className="text-lg mb-2">isso te custaria exatamente:</p>
          <div className="text-[#FF0000] text-6xl font-bold mb-4">R$199,90</div>
          <div className="bg-green-700 text-white py-2 px-4 rounded-md inline-block mb-6">
            Mas hoje você não vai precisar nem da metade disso!
          </div>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-[#FF0000] rounded-full"></div>
          </div>
          
          <h3 className="text-2xl font-bold text-yellow-400 animate-pulse-subtle mb-4">PROMOÇÃO POR TEMPO LIMITADO!</h3>
          
          <div className="flex justify-center gap-4 mb-6">
            <div className="bg-black/50 rounded-xl p-4 min-w-[100px] backdrop-blur-sm border border-[#FF0000]/10">
              <div className="text-5xl font-bold text-[#FF0000] tabular-nums">
                {String(minutes).padStart(2, '0')}
              </div>
              <div className="text-sm text-gray-400 mt-1">minutos</div>
            </div>
            <div className="text-4xl font-bold text-[#FF0000] self-center">:</div>
            <div className="bg-black/50 rounded-xl p-4 min-w-[100px] backdrop-blur-sm border border-[#FF0000]/10">
              <div className="text-5xl font-bold text-[#FF0000] tabular-nums">
                {String(seconds).padStart(2, '0')}
              </div>
              <div className="text-sm text-gray-400 mt-1">segundos</div>
            </div>
          </div>

          <div className="bg-black/30 rounded-xl p-6 mb-4">
            <div className="text-3xl font-bold mb-4">Por apenas <span className="text-green-500">R$29,90</span></div>
            <div className="text-xl font-semibold mb-6">Acesso vitalício e imediato</div>
            
            <div className="space-y-4 max-w-md mx-auto">
              {[
                'Plataforma estilo Netflix',
                'Suporte rápido e dedicado',
                'Aulas com demonstrações reais',
                'Bônus exclusivos para alunos',
                'Condições especiais para membros'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-left">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* One-click upsell buttons */}
          <div className="max-w-[400px] mx-auto">
            <a 
              href="https://www.ggcheckout.com/checkout/v2/eXH4TU0q4jFoyMpGBP1n" 
              className="fornpay_btn bg-gradient-to-b from-[#00cc66] to-[#00a352] text-white font-arial text-lg py-3 px-6 rounded-lg border border-[#00b359] block text-center mb-3 hover:opacity-90 transition-opacity"
            >
              SIM, EU ACEITO ESSA OFERTA
            </a>
            <a 
              href="javascript:void(0)" 
              data-downsell="null" 
              className="fornpay_downsell text-[#FF0000] font-arial text-base text-center block hover:underline"
            >
              Vou recusar essa oferta
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-8">PERGUNTAS FREQUENTES!</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-black/40 rounded-xl p-6 border border-[#FF0000]/20">
              <h3 className="text-lg font-semibold mb-2 text-[#FF0000]">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 bg-black/40 rounded-xl p-8 border border-[#FF0000]/20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <img 
              src="https://i.imgur.com/X95ptLH.png" 
              alt="Selo de garantia" 
              className="w-48 h-48 object-contain"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Nós garantimos a sua satisfação!</h3>
            <p className="text-gray-300">
              Se após efetuar a compra, dentro do prazo de 7 dias se por qualquer motivo, 
              você achar que nossas técnicas não são para você, nós devolvemos o seu dinheiro.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBenefits;