# Manual dos Bixos 2024

Se você leu a página do curso de DS, já deve estar estudando para ser capaz de dar manutenção neste projeto quando você for veterano, certo?

Este projeto foi desenvolvido usando apenas NextJS (Framework para ReactJS).

## Como executar na minha máquina?

É necessário ter instalado:
- [Git](https://git-scm.com/)
- [NodeJS](https://nodejs.org/en)

Clone o repositório para sua máquina.

```bash
git clone https://github.com/ioolliver/manual-bixos
```

Entre na pasta do projeto e então rode:

```bash
npm install
```

Para iniciar um servidor local utilize:

```bash
npm run dev
```

Caso algum erro ocorra no processo, você não tem alguma biblioteca necessária instalada. Jogue o erro no Google e você achará a solução rapidamente.

## Estrutura do projeto

O projeto é estruturado da seguinte maneira:

### Assets

Aqui fica as imagens do projeto.

Aqui também está localizado um arquivo especial chamado `map-info.json`. Neste arquivo fica as informações sobre as coordenadas do mapa interativo.

### Components

Aqui fica todos os componentes que podem ser reutilizados em diversas páginas da aplicação.

### Styles

Arquivos de estilo.

### Utils

Dentro desta pasta fica algumas funcionalidades úteis.

O único arquivo dentro da pasta atualmente é o `ImgMapArea.ts`. [Originalmente uma biblioteca Javascript](https://github.com/davidjbradshaw/image-map-resizer), precisei copiar o código-fonte e adaptá-lo diretamente para Typescript devido a problemas envolvendo a importação no deploy. A função da biblioteca é deixar o map da imagem na página do Mapa responsivo, já que o HTML não faz isso automáticamente.

TODO: Achar uma melhor solução em relação a essa biblioteca.

### App

Pasta mais importante do projeto. Lá dentro estão as páginas. Cada pasta representa um caminho da URL.