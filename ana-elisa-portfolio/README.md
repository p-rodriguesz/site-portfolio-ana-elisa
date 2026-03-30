# Ana Elisa Alves — Fashion Portfolio

Portfolio interativo de moda em React.

## Instalação

```bash
npm install
npm start
```

## Como personalizar

### 1. Imagens
Coloque todas as suas imagens em `/public/images/` e atualize os caminhos em `src/data/content.js`.

### 2. Conteúdo
Edite o arquivo `src/data/content.js` para atualizar:
- Informações pessoais (`profile`)
- Coleções, moodboards, croquis e looks (`collections`)
- Experiências profissionais (`experiences`)
- Certificados (`certificates`)

### 3. Adicionar mais looks ou coleções
No array `collections`, duplique o objeto e preencha com os novos dados.

## Estrutura

```
src/
├── components/       ← um arquivo .jsx + .module.css por seção
├── data/content.js   ← TODO o conteúdo editável fica aqui
├── hooks/useInView.js← animação de scroll (não precisa mexer)
├── styles/global.css ← variáveis de cor e reset
└── App.jsx           ← monta todas as seções em ordem
```

## Funcionalidades incluídas
- ✅ Navbar fixa com menu mobile (hamburguer → X)
- ✅ Animações de entrada no scroll (sem biblioteca extra)
- ✅ Lightbox nas imagens de look (clique para ampliar, ESC para fechar)
- ✅ Layout editorial alternado (imagem/texto, texto/imagem)
- ✅ Responsivo mobile → tablet → desktop
- ✅ CSS Modules (sem conflito de classes)
