import React from 'react';
import { UserCheck, Trophy, Shirt } from 'lucide-react';
import { PLAYERS_IMAGE_URL } from '../constants';

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image Side - Players with Real Faces and Official Names */}
          <div className="order-2 lg:order-1 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
            <img
              src={PLAYERS_IMAGE_URL}
              alt="Jogue com Jogadores Reais - Faces e Nomes Oficiais"
              className="relative rounded-2xl shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 border border-slate-100 w-full h-auto"
            />
            {/* Overlay Badge */}
            <div className="relative mt-6 md:mt-0 md:absolute md:-bottom-6 md:-right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 w-full md:max-w-[220px]">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <span className="font-bold text-slate-800">Licenciado Oficial</span>
              </div>
              <p className="text-xs text-slate-500">Jogadores reais com faces e nomes oficiais.</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Jogue com os <span className="text-blue-600">Jogadores Reais</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Diga adeus aos nomes genéricos. Com essa atualização, você terá a imersão completa.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Faces e Nomes Reais</h3>
                  <p className="text-slate-600 mt-1">
                    Todos os jogadores com seus nomes corretos e faces similares às reais.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Habilidades e Posições</h3>
                  <p className="text-slate-600 mt-1">
                    Overall (nível) calibrado de acordo com o momento atual do jogador (Maio/2025).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <Shirt className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Competições Licenciadas</h3>
                  <p className="text-slate-600 mt-1">
                    A atualização contém a Libertadores e Sul-Americana licenciadas.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};