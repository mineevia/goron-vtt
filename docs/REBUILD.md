# Goron VTT — Rebuild

## Estado

O Goron VTT está sendo reconstruído a partir de uma arquitetura nova.

O código legado não será usado como base estrutural do novo sistema.
Ele serve somente como referência funcional e visual.

Branch de desenvolvimento:

- `rebuild`

Versão antiga preservada:

- branch `main`
- checkpoint `42087a3`

Quando o novo Goron estiver completo e validado, o rebuild substituirá o `main` com histórico público limpo.

---

## Objetivos

- Código limpo e modular.
- Funções com responsabilidade única.
- Evitar duplicações.
- Nomes semânticos.
- Nenhuma nomenclatura baseada em versões, patches ou referências históricas.
- Componentes visuais reutilizáveis.
- Regras de jogo separadas da interface.
- Dados do jogo separados da apresentação.
- Backend como autoridade para operações importantes.
- Single Source of Truth para o personagem.
- Preservar a identidade visual do Goron.

---

## Stack planejada

### Frontend

- TypeScript
- React
- Vite

### Backend

- TypeScript
- Node.js
- NestJS
- Fastify

### Dados

- PostgreSQL
- Prisma

### Serviços

- Firebase Authentication inicialmente
- WebSockets para tempo real
- Redis somente quando houver necessidade real

### Testes

- Vitest
- Playwright

---

## Arquitetura

O projeto será organizado como monorepo.

Estrutura planejada:

```text
apps/
  web/
  api/

packages/
  domain/
  game-data/
  ui/
  contracts/

docs/

```

---

## Domínio do jogo

Entidades como:

- raças
- classes
- subclasses
- características
- talentos
- magias
- equipamentos
- proficiências
- perícias
- antecedentes
- condições

devem possuir uma definição canônica.

Uma entidade não pertence a uma tela.

Exemplo:

Uma característica de classe pode aparecer no Builder, na Ficha do Jogador e no Escudo do Mestre, mas os três devem consumir a mesma definição.

---

## Separação de responsabilidades

### game-data

Define o que uma entidade é.

Exemplo:

- Bola de Fogo
- Guerreiro
- Anão
- Alerta
- Espada Longa

### domain

Implementa regras e cálculos.

Exemplo:

- progressão de classe
- pré-requisitos
- modificadores
- proficiências
- slots de magia
- escolhas disponíveis

### web

Apresenta a aplicação ao usuário.

### api

Controla autorização, persistência e operações confiáveis.

### ui

Contém componentes visuais reutilizáveis.

Exemplo:

- Button
- Modal
- Dropdown
- Drawer
- Toast
- SpellCard
- FeatCard
- ClassFeatureCard
- EquipmentCard

---

## Regras de desenvolvimento

1. Uma função deve ter uma responsabilidade clara.
2. Não duplicar lógica.
3. Não duplicar entidades do jogo entre telas.
4. Não usar nomes históricos como `v15`, `g14`, `fix`, `final`, datas ou nomes de inspiração.
5. Dar nomes baseados na responsabilidade real.
6. Regra de jogo não deve depender de React ou HTML.
7. Interface não deve implementar regra de jogo.
8. Firebase e banco não devem ficar espalhados pelos componentes.
9. Cada mudança relevante deve ser testada antes do commit.
10. Cada etapa estável deve gerar um checkpoint no Git.

---

## Próximo passo

Criar a estrutura inicial do monorepo e configurar os npm workspaces.

Ainda não instalar PostgreSQL, Docker, Redis ou outras infraestruturas.