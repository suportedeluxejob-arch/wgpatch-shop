import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CLIENT_FEEDBACKS } from '../constants';

export const ClientFeedback: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CLIENT_FEEDBACKS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const handlePrevious = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) =>
      prev === 0 ? CLIENT_FEEDBACKS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % CLIENT_FEEDBACKS.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            O que nossos <span className="text-cyan-500">clientes</span> dizem
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Veja os feedbacks reais de quem já atualizou seu EA FC com sucesso
          </p>
        </div>

        {/* Carrossel de Feedbacks */}
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            {/* Container Principal */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border-2 border-slate-200">
              <div className="aspect-video lg:aspect-square bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center relative">
                <img
                  src={CLIENT_FEEDBACKS[currentIndex].image}
                  alt={`Feedback do cliente ${currentIndex + 1}`}
                  className="w-full h-full object-cover transition-all duration-500 ease-out"
                />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 p-3 rounded-full shadow-lg transition-all duration-200 z-20 hover:scale-110"
                aria-label="Feedback anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 p-3 rounded-full shadow-lg transition-all duration-200 z-20 hover:scale-110"
                aria-label="Próximo feedback"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {CLIENT_FEEDBACKS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setAutoPlay(false);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-cyan-500 w-8'
                        : 'bg-white/60 hover:bg-white'
                    }`}
                    aria-label={`Ir para feedback ${index + 1}`}
                  />
                ))}
              </div>

              {/* Contador */}
              <div className="absolute top-4 right-4 bg-slate-900/80 text-white px-4 py-2 rounded-full text-sm font-bold">
                {currentIndex + 1} / {CLIENT_FEEDBACKS.length}
              </div>
            </div>

            {/* Auto-play Toggle */}
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className="absolute -bottom-10 right-0 text-sm text-slate-600 hover:text-slate-900 transition-colors font-semibold"
            >
              {autoPlay ? '⏸ Autoplay' : '▶ Autoplay'}
            </button>
          </div>

          {/* Info texto abaixo */}
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              Feedback {currentIndex + 1} de {CLIENT_FEEDBACKS.length}
            </p>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto">
              Estes são feedbacks reais de clientes que já atualizaram seus jogos com sucesso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
