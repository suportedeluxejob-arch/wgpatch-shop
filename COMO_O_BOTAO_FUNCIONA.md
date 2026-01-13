# 📝 GUIA CLARO: COMO O BOTÃO DE COMPRA FUNCIONA

## 🎯 O FLUXO INTELIGENTE

```
┌─────────────────────────────────────────────────────────┐
│ USUÁRIO SELECIONA UMA VERSÃO                           │
│ ┌─────────────────┬────────────────────┐               │
│ │ EA FC 26        │ EA FC 25           │               │
│ │ R$ 59,90        │ R$ 39,90           │               │
│ └────────┬────────┴────────────┬───────┘               │
│          │                     │                       │
│          │                     │                       │
│          ▼                     ▼                       │
│   ┌─────────────┐        ┌──────────────┐             │
│   │ LINK 1      │        │ LINK 2       │             │
│   │ CHECKOUT 26 │        │ CHECKOUT 25  │             │
│   └─────────────┘        └──────────────┘             │
│          │                     │                       │
│          └──────────┬──────────┘                       │
│                     │                                  │
│                     ▼                                  │
│  ┌─────────────────────────────────────┐              │
│  │ BOTÃO "QUERO ATUALIZAR MEU EA FC"   │              │
│  │ (Redireciona para o LINK correto)   │              │
│  └─────────────────────────────────────┘              │
│                     │                                  │
│                     ▼                                  │
│  ┌─────────────────────────────────────┐              │
│  │ PÁGINA DE PAGAMENTO ESPECÍFICA      │              │
│  │ (Cada versão tem seu próprio link)  │              │
│  └─────────────────────────────────────┘              │
└─────────────────────────────────────────────────────────┘
```

## 📋 COMO EDITAR OS LINKS

Abra o arquivo **`constants.ts`** e procure por esta seção:

```typescript
// ========================================
// 💳 LINKS DE PAGAMENTO PARA CADA VERSÃO
// ========================================

export const CHECKOUT_LINK_EAFC26 = "https://go.invictuspay.app.br/qaatnpzass";
export const CHECKOUT_LINK_EAFC25 = "https://go.invictuspay.app.br/qaatnpzass";
```

### Exemplo: Alterar o link de EA FC 26

**Antes:**
```typescript
export const CHECKOUT_LINK_EAFC26 = "https://go.invictuspay.app.br/qaatnpzass";
```

**Depois (com novo link):**
```typescript
export const CHECKOUT_LINK_EAFC26 = "https://checkout.seusite.com/eafc26";
```

## 🔍 COMO FUNCIONA O FLUXO NO CÓDIGO

1. **Usuário seleciona EA FC 26** → Hero.tsx detecta que `currentVersionIndex = 0`
2. **Pega a versão selecionada** → `currentPrice = GAME_VERSIONS[0].versions[0]`
3. **Pega o link dessa versão** → `currentPrice.checkoutLink` = `CHECKOUT_LINK_EAFC26`
4. **Usuário clica no botão** → `handleCheckout()` executa
5. **Redireciona para o link correto** → `window.location.href = checkoutUrl`

Se o usuário mudar para **EA FC 25**:
- `currentVersionIndex` muda para `1`
- `currentPrice.checkoutLink` muda para `CHECKOUT_LINK_EAFC25`
- O botão passa a redirecionar para o outro link!

## ✅ CHECKLIST

- [x] Cada versão tem seu próprio link
- [x] O botão muda automaticamente conforme a seleção
- [x] Os links ficam claros em `constants.ts`
- [x] Fácil de editar/atualizar
- [x] Cada compra é separada

## 🎮 RESUMO RÁPIDO

| Quando clica aqui | Redireciona para |
|---|---|
| EA FC 26 selecionado → Botão | `CHECKOUT_LINK_EAFC26` |
| EA FC 25 selecionado → Botão | `CHECKOUT_LINK_EAFC25` |
