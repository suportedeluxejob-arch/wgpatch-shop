// ========================================
// 🌐 LINKS E CONFIGURAÇÕES PRINCIPAIS
// ========================================

// Logo - EDITÁVEL VIA LINK
// Substitua pela URL da sua logo preferida
export const LOGO_URL = "https://iili.io/fv4Ka0G.jpg";

// Imagens
export const HERO_IMAGE_URL = "https://iili.io/fvtQ7jt.md.jpg"; 
export const GAME_COVERS_URL = "https://iili.io/fvtv041.png";
export const TEAMS_IMAGE_URL = "https://iili.io/fvpUFQs.md.png";
export const PLAYERS_IMAGE_URL = "https://iili.io/fvtdt5u.md.png";

// ========================================
// 👥 FEEDBACKS DE CLIENTES (EDITÁVEL VIA LINKS)
// ========================================
export const CLIENT_FEEDBACKS = [
  {
    id: 1,
    image: "https://iili.io/fvy0kOB.md.jpg",
  },
  {
    id: 2,
    image: "https://iili.io/fvy0vDP.md.jpg",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/400x500?text=Feedback+3",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/400x500?text=Feedback+4",
  },
];

// WhatsApp - Suporte e Atendimento
// Link com mensagem pré-definida para suporte
export const WHATSAPP_SUPPORT_LINK = "https://api.whatsapp.com/send/?phone=5521960170781&text=Opa%2C+quero+saber+melhor+sobre+o+Patch+FIFA&type=phone_number&app_absent=0";

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
export const CHECKOUT_LINK_EAFC25 = "https://go.invictuspay.app.br/fuv2ufja8l";

// Padrão para compatibilidade com outros componentes (como Pricing.tsx)
export const CHECKOUT_LINK = CHECKOUT_LINK_EAFC26;

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
        priceNew: 'R$ 49,90',
        discount: '-50%',
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