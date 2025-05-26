import React from 'react';
import ContentItem from './ContentItem';

const ContentShowcase: React.FC = () => {
  const contentItems = [
    { 
      number: 6, 
      title: "23 Técnica", 
      description: "para fazer ela gemer de prazer como nunca antes",
      tag: "NOVO"
    },
    { 
      number: 7, 
      title: "23 Técnica", 
      description: "para fazer ela ter um orgasmo de outro nível",
      tag: "NOVO"
    },
    { 
      number: 8, 
      title: "Massagem", 
      description: "com os pés",
      tag: "QUENTE"
    },
    { 
      number: 9, 
      title: "Posições sexuais", 
      description: "inéditas",
      tag: "QUENTE"
    }
  ];

  return (
    <div className="py-8 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-yellow-500 text-center mb-2">SÃO MAIS DE 30 CONTEÚDOS</h2>
      <p className="text-white text-center mb-8">Veja o que você também pode ter acesso:</p>
      
      <div className="w-full max-w-5xl mx-auto h-1 bg-red-800 mb-8"></div>
      
      <div className="mb-6">
        <h3 className="text-white text-xl font-medium mb-4">Top 10 de 2024</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {contentItems.map((item, index) => (
          <ContentItem 
            key={index}
            number={item.number}
            title={item.title}
            description={item.description}
            tag={item.tag}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentShowcase;