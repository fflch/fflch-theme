# Tema FFLCH - Drupal (Modernizado)

Tema Drupal institucional desenvolvido para a Faculdade de Filosofia, Letras e Ciências Humanas da Universidade de São Paulo (FFLCH-USP).
Construído com base no Bootstrap e modernizado com suporte nativo a Design Tokens e variáveis CSS (CSS Custom Properties).

Utilizado em mais de 500 sites da instituição, mantendo 100% de compatibilidade com classes CSS, estruturas de blocos e templates existentes.

---

## 🎨 Paletas de Cores Disponíveis

O tema inclui suporte à troca rápida de esquemas de cores no painel de administração da aparência do Drupal:

1. **Azul Tradicional FFLCH / USP (Padrão)**: Azul institucional histórico (`#273e74`) com acentos em ouro USP (`#de9c16`).
2. **Vinho / Rubi**: Tons nobres de bordô (`#7a1b2e`), ideal para Letras, Literatura, Linguística e Filosofia.
3. **Verde Floresta / Esmeralda**: Verde acadêmico profundo (`#1b5e3a`), ideal para Geografia, Estudos Ambientais e Geociências.
4. **Terracota / Argila**: Tons terrosos históricos (`#8b3a2b`), inspirado em arqueologia, história e antropologia.
5. **Grafite Moderno / Slate**: Cinza ardósia contemporâneo (`#334155`), minimalista e neutro para portais e laboratórios.
6. **Azul Marinho Noturno**: Azul marinho sóbrio e solene (`#0f3b60`).
7. **Roxo Acadêmico / Púrpura**: Púrpura elegante (`#4c2882`) para cursos de artes e pensamento crítico.
8. **Personalizada**: Permite definir qualquer cor primária, escura e de destaque via seletores de cores HTML5 integrados.

---

## ⚙️ Como Alterar a Paleta de Cores

1. No painel de administração do Drupal, acesse: **Aparência** (`/admin/appearance`)
2. Ao lado do tema **FFLCH**, clique em **Configurações**.
3. Abra a seção **Paleta de Cores & Identidade Visual**.
4. Selecione a paleta desejada no campo **Paleta de Cores do Tema**.
5. Se selecionar **Personalizada**, informe os códigos hexadecimais desejados.
6. Clique em **Salvar configurações**.

---

## ✨ Melhorias Visuais Implementadas

- **Variáveis CSS Dinâmicas**: Toda a paleta de cores é renderizada através de `:root { --fflch-primary: ... }` e classes no `<body>`, permitindo fácil extensão sem quebrar código legado.
- **Tipografia Aprimorada**: Pilha de fontes moderna (`system-ui`, `-apple-system`, `Roboto`, `Arial`), com alturas de linha e pesos balanceados para excelente legibilidade acadêmica.
- **Micro-interações e Sombras Suaves**: Elevação sutil em menus suspensos (dropdowns), botões, blocos e tabelas.
- **Tabelas Modernas**: Cabeçalhos alinhados com a paleta ativa, bordas suaves e zebrado agradável.
- **Responsividade e Toque**: Menus e campos de busca otimizados para dispositivos móveis com áreas de toque acessíveis.
- **Preservação Total de Classes CSS**: Nenhuma classe CSS foi removida ou renomeada, garantindo funcionamento ininterrupto para todos os 500+ sites.
