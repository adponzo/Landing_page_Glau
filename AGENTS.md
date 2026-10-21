# Contexto do projeto

Landing page estática da marca GLAU JESUS Aromas, em português do Brasil.

## Estrutura

- `index.html`: conteúdo, navegação e seções da página.
- `styles.css`: identidade visual e regras responsivas.
- `script.js`: menu mobile, ano do rodapé e links de atendimento pelo WhatsApp.
- `imagens/`: fotos usadas na página e solicitação original do projeto.
- `favicon.svg`: ícone da página.

## Convenções

- Preserve o HTML, CSS e JavaScript sem introduzir dependências ou ferramentas de build para mudanças simples.
- Mantenha textos e metadados em português do Brasil e siga os padrões de acessibilidade já usados, como textos alternativos e rótulos ARIA.
- Os links de pedido usam `WHATSAPP_NUMBER` no início de `script.js`; não altere o número sem solicitação explícita.
- Teste mudanças visuais em telas desktop e mobile, verificando navegação, carregamento das imagens e ausência de rolagem horizontal.

## Publicação

- O projeto é um site estático servido a partir da raiz. Na Vercel, use `Other`, sem comando de build, e `.` como diretório de saída.
- A pasta `.vercel/` contém vínculo local do projeto e deve permanecer ignorada pelo Git.