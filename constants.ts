// In a real scenario, you would import the local images or use the specific URLs provided.
// Since we are generating code, we use high-quality placeholders or instructions.

// PLACEHOLDER: Substitua esta URL pela imagem do Neymar/EA FC fornecida (Imagem 1)
export const HERO_IMAGE_URL = "https://iili.io/fvtQ7jt.md.jpg"; 

// PLACEHOLDER: Substitua esta URL pela imagem das capas (PS4/PS5/Xbox) que você enviou
// Idealmente, faça upload da imagem das capas e cole o link aqui.
export const GAME_COVERS_URL = "https://iili.io/fvtv041.png";

// PLACEHOLDER: Substitua esta URL pela imagem das pastas/logos (Imagem 2)
export const TEAMS_IMAGE_URL = "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=2070&auto=format&fit=crop";

// Imagem dos Jogadores Reais com Faces e Nomes Oficiais
export const PLAYERS_IMAGE_URL = "https://iili.io/fvtdt5u.md.png";

export const WHATSAPP_LINK = "https://wa.me/5511999999999"; // Exemplo

// Link de redirecionamento do botão de checkout (edite aqui para alterar o destino)
export const CHECKOUT_LINK = "https://wa.me/5511999999999?text=Olá!%20Quero%20atualizar%20meu%20EA%20FC%2026%20ou%2025";

// Dados das versões disponíveis com preços dinâmicos
export const GAME_VERSIONS = [
  {
    id: 'ps5',
    name: 'PlayStation 5',
    image: 'https://iili.io/fvtv041.png',
    versions: [
      {
        eaVersion: 'EA FC 26',
        priceOld: 'R$ 119,90',
        priceNew: 'R$ 59,90',
        discount: '-50%',
      },
      {
        eaVersion: 'EA FC 25',
        priceOld: 'R$ 99,90',
        priceNew: 'R$ 39,90',
        discount: '-60%',
      },
    ],
  },
  {
    id: 'ps4',
    name: 'PlayStation 4',
    image: 'https://iili.io/fvtv041.png',
    versions: [
      {
        eaVersion: 'EA FC 26',
        priceOld: 'R$ 119,90',
        priceNew: 'R$ 59,90',
        discount: '-50%',
      },
      {
        eaVersion: 'EA FC 25',
        priceOld: 'R$ 99,90',
        priceNew: 'R$ 39,90',
        discount: '-60%',
      },
    ],
  },
  {
    id: 'xbox',
    name: 'Xbox Series X|S',
    image: 'https://iili.io/fvtv041.png',
    versions: [
      {
        eaVersion: 'EA FC 26',
        priceOld: 'R$ 119,90',
        priceNew: 'R$ 59,90',
        discount: '-50%',
      },
      {
        eaVersion: 'EA FC 25',
        priceOld: 'R$ 99,90',
        priceNew: 'R$ 39,90',
        discount: '-60%',
      },
    ],
  },
];

// Padrão para compatibilidade com código existente
export const PRODUCT_PRICE_OLD = GAME_VERSIONS[0].versions[0].priceOld;
export const PRODUCT_PRICE_NEW = GAME_VERSIONS[0].versions[0].priceNew;