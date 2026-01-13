import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_SUPPORT_LINK } from '../constants';

export const WhatsAppSupport: React.FC = () => {
  return (
    <a
      href={WHATSAPP_SUPPORT_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Suporte WhatsApp"
    >
      {/* Botão Flutuante */}
      <div className="relative">
        {/* Pulse Animation Background */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-75"></div>
        
        {/* Botão Principal */}
        <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Tooltip ao passar o mouse */}
      <div className="absolute bottom-full right-0 mb-3 bg-slate-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
        Suporte via WhatsApp
        <div className="absolute top-full right-3 w-2 h-2 bg-slate-900 rotate-45"></div>
      </div>
    </a>
  );
};
