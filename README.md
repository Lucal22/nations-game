# Jogo das Nações pt-br

Este projeto é uma page responsiva feita em react.js com o intuito de apresentar alguns dos principais projetos desenvolvidos por mim durante meus estudos.

## Tecnologias

### Frontend
- [HTML](https://www.w3schools.com/html/)
- [CSS](https://www.w3schools.com/css/)
- [React.js](https://pt-br.reactjs.org/)

### Backend
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)

## Bibliotecas

### Frontend
- [Framer motion](https://www.framer.com/motion/)
- [SCSS](https://sass-lang.com/)
- [Axios](https://axios-http.com/ptbr/docs/intro)

### Backend
- [Express](https://expressjs.com/pt-br/)
- [CORS](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)
- [Prisma](https://www.prisma.io/)
- [Nodemailer](https://nodemailer.com/about/)

## Utilitários
- [Phosphor icons](https://phosphoricons.com/)
- [React icons](https://react-icons.github.io/react-icons)

## Desenvolvimento

  Para desenvolver o frontend foi utilizado framer motion para realizar as animações da página inicial, do menu de barras e da seção 'sobre' e a estilização utilizando scss facilita mudar o estilo de tags filhos específicas.

Utilizando 'props' foi possível simplificar partes do código onde se repetiria procedimentos e com isso facilitar futuras inserções como por exemplo para adicionar novos projetos.

Para coletar os dados inseridos no formulário, utilizou-se de states e uma função assíncrona para o envio das informações para o backend utilizando o Axios.

O Express foi utilizado para realizar a rota onde os dados seriam recebidos e enviados para o banco de dados que foi configurado com o auxilio do Prisma.

Ao mesmo tempo em que os dados eram enviados para o banco de dados, o nodemailer foi utilizado para que também fosse possível realizar as configurações para envio direto para o email.

O frontend foi hospedado no [Vercel](https://vercel.com/) e o backend hospedado no [Railway](https://railway.app/).


## Licença
[MIT](https://choosealicense.com/licenses/mit/)


# Lucal Portfolio en-us

This project is a responsive page developed using react.js on frontend, to show some of my main projects developed during my studies.

## Technologies

### Frontend
- [HTML](https://www.w3schools.com/html/)
- [CSS](https://www.w3schools.com/css/)
- [React.js](https://pt-br.reactjs.org/)

### Backend
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)

## Libs

### Frontend
- [Framer motion](https://www.framer.com/motion/)
- [SCSS](https://sass-lang.com/)
- [Axios](https://axios-http.com/ptbr/docs/intro)

### Backend
- [Express](https://expressjs.com/pt-br/)
- [CORS](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)
- [Prisma](https://www.prisma.io/)
- [Nodemailer](https://nodemailer.com/about/)

## Utilities
- [Phosphor icons](https://phosphoricons.com/)
- [React icons](https://react-icons.github.io/react-icons)

## Development

 To develop the frontend, framer motion was used to animate the home page, the bar menu and the 'about' section, and styling using scss makes it easy to change the style of specific child components.

Using 'props' it was possible to simplify parts of the code where procedures would be repeated and thus facilitate future insertions as adding new projects.

For the data entered in the form, it was used state components and an asynchronous function to send the information using Axios.

Express was used to perform the route where the data would be received and sent to the database that was configured using Prisma.

At the same time that the data was sent to the database, the nodemailer was used so that it was also possible to configure the settings to send the message to an email.

The frontend was hosted on [Vercel](https://vercel.com/) and the backend hosted on [Railway](https://railway.app/).


## License
[MIT](https://choosealicense.com/licenses/mit/)
