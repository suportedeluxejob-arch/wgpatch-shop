import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { CheckCircle2, ShieldCheck, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_IMAGE_URL, GAME_VERSIONS, HERO_CAROUSEL_IMAGES } from '../constants';

export const Hero: React.FC = () => {
  const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0);
  const [currentVersionIndex, setCurrentVersionIndex] = useState(0);
  const [currentHeroImageIndex, setCurrentHeroImageIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const currentPlatform = GAME_VERSIONS[currentPlatformIndex];
  const currentPrice = currentPlatform.versions[currentVersionIndex];

  // Auto-play carousels
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      // Rotate version cards
      setCurrentPlatformIndex((prev) => (prev + 1) % GAME_VERSIONS.length);
      setCurrentVersionIndex(0);

      // Rotate Hero Images
      setCurrentHeroImageIndex((prev) => (prev + 1) % HERO_CAROUSEL_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const handlePrevious = () => {
    setAutoPlay(false);
    setCurrentPlatformIndex((prev) =>
      prev === 0 ? GAME_VERSIONS.length - 1 : prev - 1
    );
    setCurrentVersionIndex(0);
  };

  const handleNext = () => {
    setAutoPlay(false);
    setCurrentPlatformIndex((prev) => (prev + 1) % GAME_VERSIONS.length);
    setCurrentVersionIndex(0);
  };

  const handleCheckout = () => {
    // 🎯 FLUXO INTELIGENTE:
    // 1. Detecta qual versão está selecionada (EA FC 26 ou 25)
    // 2. Pega o link de pagamento correto daquela versão
    // 3. Redireciona o usuário para pagar aquele produto específico

    const checkoutUrl = currentPrice.checkoutLink;
    window.location.href = checkoutUrl;
  };

  return (
    <section className="relative py-12 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Text Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              <ShieldCheck className="w-4 h-4 mr-2" />
              100% Seguro e Atualizado
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
              Licencie seu <span className="text-blue-600">EA FC 26 ou 25</span> de PS4, PS5 e Xbox
            </h1>

            <div className="mb-8 space-y-1">
              <h2 className="text-lg sm:text-2xl font-black text-slate-900 uppercase tracking-tight">
                OBTENHA AS EQUIPES BRASILEIRAS
              </h2>
              <h2 className="text-lg sm:text-2xl font-black text-slate-900 uppercase tracking-tight">
                <span className="text-green-600">100% ATUALIZADAS</span> E LICENCIADAS COM ESSA ATUALIZAÇÃO
              </h2>
            </div>

            {/* Carrossel de Capas com Preços Dinâmicos */}
            <div className="mb-8 w-full max-w-lg mx-auto lg:mx-0">
              <div className="relative group">
                {/* Imagem Principal */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-slate-200 bg-white">
                  <div className="bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center relative w-full" style={{ aspectRatio: '483 / 631' }}>
                    <img
                      src={currentPlatform.image}
                      alt={`${currentPlatform.name} ${currentPrice.eaVersion}`}
                      className="w-full h-full object-contain transition-all duration-500 ease-out"
                    />
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={handlePrevious}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 p-2 rounded-full shadow-lg transition-all duration-200 z-20"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 p-2 rounded-full shadow-lg transition-all duration-200 z-20"
                    aria-label="Próximo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Dot Indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                    {GAME_VERSIONS.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentPlatformIndex(index);
                          setCurrentVersionIndex(0);
                          setAutoPlay(false);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentPlatformIndex
                          ? 'bg-blue-600 w-6'
                          : 'bg-white/60 hover:bg-white'
                          }`}
                      />
                    ))}
                  </div>

                  {/* Platform Badge */}
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {currentPlatform.name}
                  </div>
                </div>

                {/* Versão Selection */}
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {currentPlatform.versions.map((version, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentVersionIndex(index);
                        setAutoPlay(false);
                      }}
                      className={`p-3 rounded-xl border-2 transition-all duration-200 text-left ${currentVersionIndex === index
                        ? 'border-blue-600 bg-blue-50 shadow-md'
                        : 'border-slate-200 bg-white hover:border-blue-300'
                        }`}
                    >
                      <p className="text-sm font-bold text-slate-900">{version.eaVersion}</p>
                      <p className="text-xs text-slate-500 line-through">{version.priceOld}</p>
                      <p className="text-base font-black text-blue-600">{version.priceNew}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 mb-8">
              <Button onClick={handleCheckout} className="text-lg w-full shadow-lg shadow-blue-500/30 animate-pulse-slow">
                QUERO ATUALIZAR MEU EA FC HOJE
              </Button>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 w-full">
              <div className="flex flex-col items-center sm:items-start flex-1 min-w-[120px]">
                <span className="text-xs text-slate-500 line-through font-medium">DE: {currentPrice.priceOld}</span>
                <span className="text-2xl lg:text-3xl font-black text-blue-600">POR: {currentPrice.priceNew}</span>
              </div>
              <div className="hidden sm:block h-10 w-px bg-slate-200"></div>
              <div className="flex flex-col items-center text-center flex-1 min-w-[120px]">
                <span className="text-xs font-bold text-green-600 mb-1">{currentPrice.discount} de Desconto</span>
                <div className="flex items-center text-xs font-semibold text-green-600">
                  <CheckCircle2 className="w-4 h-4 mr-1" />
                  Entrega Imediata
                </div>
              </div>
            </div>
          </div>

          {/* Image Content - Hero Image */}
          <div className="relative group block mt-12 lg:mt-0 max-w-sm mx-auto lg:max-w-full w-full">

            {/* Headline Apelativa - AGORA ACIMA DA FOTO */}
            <div className="mb-6 text-center lg:text-left">
              <span className="bg-red-600 text-white px-4 py-1.5 rounded-lg text-sm font-black uppercase tracking-widest animate-pulse inline-block mb-3">
                ⚠️ ATENÇÃO
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                O PATCH MAIS COMPLETO E REALISTA <br className="hidden sm:block" />
                <span className="text-blue-600">DO MERCADO ESTÁ AQUI!</span>
              </h2>
            </div>

            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white w-full min-h-[400px] sm:min-h-[500px]">
              {HERO_CAROUSEL_IMAGES.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Banner EA FC ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transform transition-all duration-1000 ease-in-out ${index === currentHeroImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
                    }`}
                />
              ))}

              {/* Navigation Indicators for Hero Carousel */}
              <div className="absolute bottom-4 left-4 flex gap-1 z-20">
                {HERO_CAROUSEL_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentHeroImageIndex(index);
                      setAutoPlay(false);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${index === currentHeroImageIndex ? 'bg-white w-8' : 'bg-white/40 w-4 hover:bg-white/60'
                      }`}
                  />
                ))}
              </div>

              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur shadow-lg p-3 rounded-xl flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-full text-yellow-600">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Ligas</p>
                  <p className="text-sm font-bold text-slate-800">Licenciadas</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};