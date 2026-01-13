import React, { useState, useEffect } from 'react';
import { VSL_VIDEO_URL } from '../constants';

export const VslSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(84); // Começa em 84% para dar a sensação de "quase acabando"

  // Extrair ID do vídeo para pegar a thumbnail
  // Formato esperado: https://www.youtube.com/embed/ZWNlAOrcqoY...
  const getVideoId = (url: string) => {
    try {
      if (url.includes('/embed/')) {
        return url.split('/embed/')[1].split('?')[0];
      }
      return 'ZWNlAOrcqoY'; // Fallback ID se der erro
    } catch (e) {
      return 'ZWNlAOrcqoY';
    }
  };

  const videoId = getVideoId(VSL_VIDEO_URL);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  // Simulação de progresso inteligente
  useEffect(() => {
    if (!isPlaying) return;

    // A barra avança lentamente do 84% até 98%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 99) {
          clearInterval(interval);
          return 99;
        }
        // Incremento aleatório pequeno para parecer natural
        return prev + (Math.random() * 0.1);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Veja como fica o jogo <span className="text-cyan-500">após a atualização</span>
          </h2>
          <p className="text-slate-500 mt-2">Assista ao vídeo abaixo e veja a qualidade da nossa atualização</p>
        </div>

        {/* Video Wrapper */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-900 group border border-slate-200">

          {!isPlaying ? (
            /* CAPA PERSONALIZADA (Cliavel) */
            <div
              className="absolute inset-0 z-20 cursor-pointer flex items-center justify-center bg-black overflow-hidden"
              onClick={() => setIsPlaying(true)}
            >
              <img
                src={thumbnailUrl}
                alt="Clique para assistir"
                className="w-full h-full object-cover opacity-90 link-cover transform transition hover:scale-105 duration-700"
              />
              {/* Botão Play Personalizado */}
              <div className="absolute z-30">
                <div className="relative flex items-center justify-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.6)] animate-pulse">
                    <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="absolute text-white font-bold mt-28 text-lg shadow-black drop-shadow-lg uppercase tracking-wider text-nowrap">
                    Clique para assistir
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* IFRAME DO YOUTUBE (CROPADO para esconder UI) */
            <>
              <div className="w-full h-full overflow-hidden relative">
                {/* 
                     TRUQUE DO VSL: scale-[1.35] 
                     Isso dá um zoom de 35% no vídeo.
                     Resultado: A barra de título do Youtube (topo) e a logo (rodapé)
                     ficam FORA da área visível (overflow-hidden).
                     O usuário vê apenas o vídeo limpo pelo centro.
                 */}
                <iframe
                  src={`${VSL_VIDEO_URL}&autoplay=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&playsinline=1`}
                  title="VSL"
                  className="w-full h-full border-0 pointer-events-auto transform scale-[1.35] origin-center"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* BLOCKERS - Segurança extra anti-clique (transparente) */}
              <div className="absolute inset-0 z-40 bg-transparent pointer-events-auto"></div>

              {/* BARRA DE RETENÇÃO FAKE (Sempre visível sobre o vídeo cropado) */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/90 to-transparent pt-10 pb-4 px-6 z-50 pointer-events-none">

                {/* Barra de Progresso Animada */}
                <div className="w-full h-1.5 bg-white/30 rounded-full mb-3 overflow-hidden backdrop-blur-sm">
                  <div
                    className="h-full bg-red-600 rounded-full relative transition-all duration-1000 ease-linear shadow-[0_0_15px_rgba(220,38,38,0.8)]"
                    style={{ width: `${progress}%` }}
                  >
                  </div>
                </div>

                {/* Controles Fakes */}
                <div className="flex items-center justify-between text-white font-medium">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 flex items-center justify-center opacity-90">
                      {/* Botão Play/Pause Fake */}
                      <svg className="w-6 h-6 fill-white drop-shadow-md" viewBox="0 0 24 24">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      </svg>
                    </div>
                    <div className="flex items-center text-sm gap-1 font-sans text-slate-100 drop-shadow-md">
                      <span>14:32</span>
                      <span className="opacity-60">/</span>
                      <span className="opacity-60">15:45</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Settings Icon Fake */}
                    <svg className="w-5 h-5 text-white opacity-80 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                    {/* Fullscreen Icon Fake */}
                    <svg className="w-5 h-5 text-white opacity-80 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                </div>
              </div>
            </>
          )}

        </div>

        {/* Info Text */}
        <div className="text-center mt-6">
          <p className="text-slate-600 text-sm">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Mais de 840 pessoas assistindo agora
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};