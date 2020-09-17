# Gerar PDFs com NodeJS
Gerar os PDFs com NodeJS com dados dinâmicos e criar templates HTML estilizados com CSS. Os exemplos são simples, mas basicamente o que você consegue fazer com HTML/CSS é possível utilizar para o seu template PDF. É possível gerar sem o uso de templates, apenas com template strings e ainda sim aplicar CSS também, mas deve ser feito com CSS inline.

## Bibliotecas
- ejs
- html-pdf

## Como executar?
- yarn
- node src/generatePDF.js (gera um PDF com template strings)
- node src/generatePDFWithTemplate.js (gera um PDF a partir de um template feito em HTML e CSS)
