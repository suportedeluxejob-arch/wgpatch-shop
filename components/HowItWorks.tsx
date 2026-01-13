import React from 'react';
import { Download, Gamepad2, Database } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Como Funciona?</h2>
          <p className="text-lg text-slate-600">
            Processo simples, rápido e seguro. Você não precisa ser um expert para instalar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-50 rounded-full blur-2xl"></div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6 relative z-10">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">1. Dados Atualizados</h3>
            <p className="text-slate-600 leading-relaxed">
              Enviamos os dados dos elencos atualizados diretamente para você.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden">
             <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-green-50 rounded-full blur-2xl"></div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6 relative z-10">
              <Download className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">2. Tutorial Incluso</h3>
            <p className="text-slate-600 leading-relaxed">
              Você recebe um tutorial passo a passo para inserir na edição do EA FC 26 ou 25.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden">
             <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-purple-50 rounded-full blur-2xl"></div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6 relative z-10">
              <Gamepad2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">3. Sem Pen Drive</h3>
            <p className="text-slate-600 leading-relaxed">
              <strong>Não é necessário pen drive</strong> ou dispositivo externo. A atualização é feita dentro da edição do próprio jogo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};