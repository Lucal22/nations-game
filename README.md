# Jogo das Nações pt-br

Este projeto é uma page responsiva feita em react.js com o intuito de desenvolver um jogo de aposta onde é possível tentar adivinhar qual a nação do dia.

![Website frontpage](/web/src/assets/img/themeImg.png)

## Tecnologias

### Frontend
- [HTML](https://www.w3schools.com/html/)
- [CSS](https://www.w3schools.com/css/)
- [React.js](https://pt-br.reactjs.org/)
- [React Redux](https://react-redux.js.org/)

## Bibliotecas

### Frontend
- [Framer motion](https://www.framer.com/motion/)
- [SCSS](https://sass-lang.com/)
- [Headlessui](https://headlessui.dev/)

## Utilitários
- [Phosphor icons](https://phosphoricons.com/)

## Desenvolvimento

  Para desenvolver o frontend foi utilizado framer motion para realizar a animação do botão de mudança de tema, junto com popover da biblioteca [Headlessui](https://headlessui.dev/) para melhorar a acessibilidade na abertura das páginas e SCSS para fazer o style do website.

  Foi utilizado React Redux para envio do estado que altera o tema do site e utilizando o localStorage foi possível salvar tanto o tema preferido quanto os palpites que foram escolhidos anteriormente pelo usuário

  O sorteio diário é feito com base em um cálculo utilizando o dia e mês atual, sendo possível selecionar um número de 4 dígitos diferente diariamente.

O frontend foi hospedado no [Vercel](https://vercel.com/).


## Licença
[MIT](https://choosealicense.com/licenses/mit/)


# Lucal Portfolio en-us

This project is a responsive page developed using react.js to develop a gamble game that allows the user to select one of the 25 nations in the game. Everyday theres a draw that selects one of the 25 nations so the player can compare if had a lucky day.

## Technologies

### Frontend
- [HTML](https://www.w3schools.com/html/)
- [CSS](https://www.w3schools.com/css/)
- [React.js](https://pt-br.reactjs.org/)
- [React Redux](https://react-redux.js.org/)


## Libs

### Frontend
- [Framer motion](https://www.framer.com/motion/)
- [SCSS](https://sass-lang.com/)
- [Headlessui](https://headlessui.dev/)



## Utilities
- [Phosphor icons](https://phosphoricons.com/)

## Development

For the frontend development it was used framer motion to do the animation of the theme button, and the popover component from the [Headlessui](https://headlessui.dev/) lib to improve the acessibility oppening the pages and SCSS to style the website.

It was used React Redux to send the state that handles the theme change and using the localStorage was possible to save the theme preference and the previous countries that the user selected. 

To make the daily draw, it was used a math operation involving  the date components.

The frontend was hosted on [Vercel](https://vercel.com/).


## License
[MIT](https://choosealicense.com/licenses/mit/)
