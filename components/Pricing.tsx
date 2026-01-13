import React from 'react';
import { Button } from './Button';
import { PRODUCT_PRICE_NEW, PRODUCT_PRICE_OLD, CHECKOUT_LINK } from '../constants';
import { Shield, CreditCard, Zap } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-blue-600 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-6 md:p-12 text-center">
            <h2 className="text-3xl font-black mb-2">Oferta Especial de Lançamento</h2>
            <p className="text-slate-500 mb-8">Atualize seu jogo agora e comece a diversão.</p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="text-slate-400 font-medium text-xl line-through decoration-red-500">
                R$ {PRODUCT_PRICE_OLD}
              </div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-blue-600 tracking-tight">
                R$ {PRODUCT_PRICE_NEW}
              </div>
            </div>

            <a href={CHECKOUT_LINK} className="block w-full max-w-md mx-auto">
              <Button fullWidth variant="secondary" className="text-lg py-5 shadow-green-500/40 hover:shadow-green-500/50 hover:scale-105 transition-all">
                COMPRAR AGORA
              </Button>
            </a>

            <p className="mt-4 text-xs text-slate-400">
              Pagamento único. Acesso vitalício à versão comprada.
            </p>
          </div>

          <div className="bg-slate-50 p-6 border-t border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600">
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                Compra Segura
              </div>
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" />
                Acesso Imediato
              </div>
              <div className="flex items-center justify-center gap-2">
                <CreditCard className="w-5 h-5 text-blue-600" />
                Pix e Cartão
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};