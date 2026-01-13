import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { GAME_VERSIONS, CHECKOUT_LINK } from '../constants';
import { Button } from './Button';

export const CheckoutCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVersion, setSelectedVersion] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const currentGame = GAME_VERSIONS[currentIndex];
  const currentPrice = currentGame.versions[selectedVersion];

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % GAME_VERSIONS.length);
      setSelectedVersion(0); // Reset to first version when changing platform
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [autoPlay]);

  const handlePrevious = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => 
      prev === 0 ? GAME_VERSIONS.length - 1 : prev - 1
    );
    setSelectedVersion(0);
  };

  const handleNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % GAME_VERSIONS.length);
    setSelectedVersion(0);
  };

  const handleVersionChange = (index: number) => {
    setAutoPlay(false);
    setSelectedVersion(index);
  };

  const handleCheckout = () => {
    const text = `Olá! Quero atualizar meu EA FC ${currentPrice.eaVersion.split(' ')[2]} para ${currentGame.name}. Preço: ${currentPrice.priceNew}`;
    const encodedText = encodeURIComponent(text);
    window.location.href = `${CHECKOUT_LINK}&text=${encodedText}`;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="relative mb-12">
            {/* Main Image Container */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
              <div className="aspect-square lg:aspect-video bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center overflow-hidden relative">
                {/* Game Image with smooth transition */}
                <img
                  src={currentGame.image}
                  alt={currentGame.name}
                  className="w-full h-full object-cover transition-all duration-500 ease-out"
                />

                {/* Platform Badge */}
                <div className="absolute top-6 right-6 bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg">
                  {currentGame.name}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 p-3 rounded-full shadow-lg transition-all duration-200 z-20 hover:scale-110"
                aria-label="Versão anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 p-3 rounded-full shadow-lg transition-all duration-200 z-20 hover:scale-110"
                aria-label="Próxima versão"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dot Indicators for Platforms */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {GAME_VERSIONS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setSelectedVersion(0);
                      setAutoPlay(false);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-blue-600 w-8'
                        : 'bg-white/60 hover:bg-white'
                    }`}
                    aria-label={`Ir para ${GAME_VERSIONS[index].name}`}
                  />
                ))}
              </div>
            </div>

            {/* Auto-play Toggle */}
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className="absolute -bottom-12 right-0 text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              {autoPlay ? '⏸ Autoplay' : '▶ Autoplay'}
            </button>
          </div>

          {/* Version Selection */}
          <div className="grid grid-cols-2 gap-4 mb-12">
            {currentGame.versions.map((version, index) => (
              <button
                key={index}
                onClick={() => handleVersionChange(index)}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                  selectedVersion === index
                    ? 'border-blue-600 bg-blue-50 shadow-lg'
                    : 'border-slate-200 bg-white hover:border-blue-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-black text-slate-900">
                    {version.eaVersion}
                  </h3>
                  {selectedVersion === index && (
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  )}
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-slate-500 line-through">
                    {version.priceOld}
                  </p>
                  <p className="text-2xl font-black text-blue-600">
                    {version.priceNew}
                  </p>
                  <p className="text-xs font-bold text-green-600 mt-2">
                    {version.discount} OFF
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* CTA Button with Dynamic Link */}
          <div className="space-y-4">
            <Button
              onClick={handleCheckout}
              className="w-full text-lg py-6 font-bold"
            >
              QUERO ATUALIZAR MEU EA FC HOJE
            </Button>

            <div className="text-center">
              <p className="text-sm text-slate-600 mb-1">
                ✓ Entrega Imediata
              </p>
              <p className="text-xs text-slate-500">
                Plataforma: <span className="font-bold text-slate-700">{currentGame.name}</span> | 
                Versão: <span className="font-bold text-slate-700">{currentPrice.eaVersion}</span>
              </p>
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-block w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold mb-3">
                ✓
              </div>
              <h4 className="font-bold text-slate-900 mb-1">Faces Reais</h4>
              <p className="text-sm text-slate-600">Jogadores brasileiros com seus rostos verdadeiros</p>
            </div>

            <div className="text-center">
              <div className="inline-block w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold mb-3">
                ✓
              </div>
              <h4 className="font-bold text-slate-900 mb-1">Nomes Oficiais</h4>
              <p className="text-sm text-slate-600">Todos com nomes corretos e atualizados</p>
            </div>

            <div className="text-center">
              <div className="inline-block w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold mb-3">
                ✓
              </div>
              <h4 className="font-bold text-slate-900 mb-1">Suporte Completo</h4>
              <p className="text-sm text-slate-600">Ajudamos você com a instalação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
