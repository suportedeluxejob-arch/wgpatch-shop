// ========================================
// 🌐 LINKS E CONFIGURAÇÕES PRINCIPAIS
// ========================================

// Imagens
export const HERO_IMAGE_URL = "https://iili.io/fvtQ7jt.md.jpg"; 
export const GAME_COVERS_URL = "https://iili.io/fvtv041.png";
export const TEAMS_IMAGE_URL = "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=2070&auto=format&fit=crop";
export const PLAYERS_IMAGE_URL = "https://iili.io/fvtdt5u.md.png";

// WhatsApp
export const WHATSAPP_LINK = "https://wa.me/5511999999999";

// ========================================
// 💳 LINKS DE PAGAMENTO PARA CADA VERSÃO
// ========================================
// IMPORTANTE: Cada versão de jogo tem seu próprio link de pagamento!
// 
// EA FC 26 = Link 1
// EA FC 25 = Link 2
//
// O botão "QUERO ATUALIZAR MEU EA FC HOJE" muda automaticamente
// conforme o usuário seleciona a versão (26 ou 25)

export const CHECKOUT_LINK_EAFC26 = "https://go.invictuspay.app.br/qaatnpzass";
export const CHECKOUT_LINK_EAFC25 = "https://go.invictuspay.app.br/qaatnpzass";

// ========================================
// 🎮 VERSÕES DISPONÍVEIS COM PREÇOS
// ========================================
export const GAME_VERSIONS = [
  {
    id: 'PS5, PS4, Xbox X|S / One',
    name: 'PS5, PS4, Xbox X|S / One',
    image: 'https://iili.io/fvbfMPf.jpg',
    versions: [
      {
        eaVersion: 'EA FC 26',
        priceOld: 'R$ 119,90',
        priceNew: 'R$ 59,90',
        discount: '-50%',
        // 👇 QUANDO SELECIONAR EA FC 26, USA ESTE LINK
        checkoutLink: CHECKOUT_LINK_EAFC26,
      },
      {
        eaVersion: 'EA FC 25',
        priceOld: 'R$ 99,90',
        priceNew: 'R$ 39,90',
        discount: '-60%',
        // 👇 QUANDO SELECIONAR EA FC 25, USA ESTE LINK
        checkoutLink: CHECKOUT_LINK_EAFC25,
      },
    ],
  },
  {
    id: 'PS5, PS4, Xbox X|S / One',
    name: 'PS5, PS4, Xbox X|S / One',
    image: 'https://iili.io/fvbMDlf.md.png',
    versions: [
      {
        eaVersion: 'EA FC 26',
        priceOld: 'R$ 119,90',
        priceNew: 'R$ 59,90',
        discount: '-50%',
        // 👇 QUANDO SELECIONAR EA FC 26, USA ESTE LINK
        checkoutLink: CHECKOUT_LINK_EAFC26,
      },
      {
        eaVersion: 'EA FC 25',
        priceOld: 'R$ 99,90',
        priceNew: 'R$ 49,90',
        discount: '-50%',
        // 👇 QUANDO SELECIONAR EA FC 25, USA ESTE LINK
        checkoutLink: CHECKOUT_LINK_EAFC25,
      },
    ],
  },
];

// Padrão para compatibilidade com código existente
export const PRODUCT_PRICE_OLD = GAME_VERSIONS[0].versions[0].priceOld;
export const PRODUCT_PRICE_NEW = GAME_VERSIONS[0].versions[0].priceNew;