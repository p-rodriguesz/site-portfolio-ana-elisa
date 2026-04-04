# Organização de branches

Este repositório usa um fluxo simples e profissional para manter o projeto organizado sem complicar o trabalho diário.

## Modelo recomendado

- `main` → branch principal, sempre estável
- `feature/nome-da-funcionalidade` → novas funcionalidades
- `fix/nome-do-bug` → correções de bugs
- `docs/assunto` → mudanças na documentação
- `hotfix/assunto` → correções urgentes

## Como trabalhar

1. Crie uma branch a partir da `main`.
2. Faça alterações pequenas e com um objetivo claro.
3. Envie a branch para o GitHub.
4. Abra um Pull Request para a `main`.
5. Revise o conteúdo e, depois, faça o merge.
6. Apague a branch após o merge.

## Exemplo de nomes

- `feature/hero-animado`
- `feature/galeria-lightbox`
- `fix/imagem-nao-carrega`
- `docs/atualiza-readme`
- `hotfix/corrige-layout-mobile`

## Boas práticas

- Não faça commits diretos na `main`.
- Mantenha branches curtas e objetivas.
- Use mensagens de commit claras.
- Abra Pull Requests mesmo em projetos pessoais.
- Se possível, proteja a `main` no GitHub para exigir Pull Request e evitar push direto.

## Fluxo curto sugerido

```bash
git checkout main
git pull origin main
git checkout -b feature/minha-tarefa
```

Depois de concluir:

```bash
git add .
git commit -m "feat: descreve a alteração"
git push origin feature/minha-tarefa
```

## Resumo

- `main` = versão pronta
- `feature/` = novas funcionalidades
- `fix/` = correções
- `docs/` = documentação
- `hotfix/` = urgências

Esse modelo já é suficiente para um portfólio pequeno, fica organizado e continua com aparência profissional.

