# Guia de Customização - CheckoutCarousel

## 📝 Como Editar Preços e Versões

### 1. **Editar Preços Dinâmicos**
Vá para o arquivo `constants.ts` e modifique o array `GAME_VERSIONS`:

```typescript
export const GAME_VERSIONS = [
  {
    id: 'ps5',
    name: 'PlayStation 5',
    image: 'URL_DA_IMAGEM',
    versions: [
      {
        eaVersion: 'EA FC 26',
        priceOld: 'R$ 119,90',    // ← Altere aqui o preço antigo
        priceNew: 'R$ 59,90',     // ← Altere aqui o preço novo (com desconto)
        discount: '-50%',         // ← Altere aqui o percentual de desconto
      },
      {
        eaVersion: 'EA FC 25',
        priceOld: 'R$ 99,90',
        priceNew: 'R$ 39,90',
        discount: '-60%',
      },
    ],
  },
  // ... PS4 e Xbox ...
];
```

### 2. **Editar Link de Redirecionamento (WhatsApp ou Outro)**
No arquivo `constants.ts`, modifique:

```typescript
// Link de redirecionamento do botão de checkout (edite aqui para alterar o destino)
export const CHECKOUT_LINK = "https://wa.me/5511999999999?text=Olá!%20Quero%20atualizar%20meu%20EA%20FC%2026%20ou%2025";
```

**Exemplos:**
- **WhatsApp:** `https://wa.me/5511999999999`
- **Link customizado:** `https://seu-site.com/checkout`
- **Email:** `mailto:contato@seu-site.com?subject=Quero%20atualizar%20EA%20FC`

### 3. **Adicionar Mais Plataformas**
Se quiser adicionar Xbox One ou outra plataforma, copie um bloco inteiro e modifique:

```typescript
{
  id: 'xbox-one',
  name: 'Xbox One',
  image: 'URL_DA_IMAGEM_XBOX_ONE',
  versions: [
    {
      eaVersion: 'EA FC 26',
      priceOld: 'R$ 119,90',
      priceNew: 'R$ 59,90',
      discount: '-50%',
    },
  ],
},
```

### 4. **Customizar Tempo de Auto-play**
No arquivo `components/CheckoutCarousel.tsx`, procure por:

```typescript
const interval = setInterval(() => {
  setCurrentIndex((prev) => (prev + 1) % GAME_VERSIONS.length);
  setSelectedVersion(0);
}, 5000); // ← Altere aqui (em milissegundos) - 5000ms = 5 segundos
```

Altere `5000` para outro valor:
- `3000` = 3 segundos
- `8000` = 8 segundos

## 🎨 Características do Carrossel

✅ **Autoplay automático** com transições suaves
✅ **Navegação manual** com setas
✅ **Seleção de versão** (EA FC 26 ou 25)
✅ **Preços dinâmicos** por plataforma e versão
✅ **Indicadores visuais** mostrando qual plataforma está ativa
✅ **Botão de pausa/play** para autoplay
✅ **Link dinâmico** que muda conforme a seleção

## 📸 URLs de Imagens

Você pode trocar as URLs das imagens de cada plataforma no campo `image` do `GAME_VERSIONS`.

Recomendo usar:
- **iili.io** - Para hospedagem rápida
- **imgur.com** - Para imagens permanentes
- **cloudinary.com** - Para otimização automática
- Ou usar uma pasta `/public` local

## 🔗 Variáveis Disponíveis

- `CHECKOUT_LINK` - Link principal do checkout
- `GAME_VERSIONS` - Array com todas as plataformas e preços
- `PRODUCT_PRICE_OLD` e `PRODUCT_PRICE_NEW` - Para compatibilidade com outros componentes
