import React from 'react';
import { Play } from 'lucide-react';
import { VSL_VIDEO_URL } from '../constants';

export const VslSection: React.FC = () => {
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
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-900 group">
          <iframe
            src={VSL_VIDEO_URL}
            title="VSL - Demonstração da Atualização EA FC"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* Gradient Overlay Optional */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Info Text */}
        <div className="text-center mt-6">
          <p className="text-slate-600 text-sm">
            Vídeo demonstrando todos os recursos da atualização e melhorias visuais do jogo
          </p>
        </div>
      </div>
    </section>
  );
};