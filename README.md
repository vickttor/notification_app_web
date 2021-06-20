# Notifications Electron

<a  href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"  target="blank"><img  alt="GitHub issues"  src="https://img.shields.io/static/v1?label=tech&message=HTML5&color=E34F26&style=for-the-badge&logo=HTML5"></a> <a  href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"  target="blank"><img  alt="GitHub issues"  src="https://img.shields.io/static/v1?label=tech&message=CSS3&color=1572B6&style=for-the-badge&logo=CSS3"></a> <a  href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"  target="blank"><img  alt="GitHub issues"  src="https://img.shields.io/static/v1?label=tech&message=JavaScript&color=F7DF1E&style=for-the-badge&logo=JavaScript"></a> <a  href="https://www.electronjs.org/"  target="blank"><img  alt="GitHub issues"  src="https://img.shields.io/static/v1?label=tech&message=Electron&color=47848F&style=for-the-badge&logo=electron"></a> <a  href="https://nodejs.org/en/"  target="blank"><img  alt="GitHub issues"  src="https://img.shields.io/static/v1?label=tech&message=NodeJs&color=339933&style=for-the-badge&logo=node.js"></a> <a  href="https://www.codewars.com/users/Victor%20Hugo%20da%20Silva"  target="blank"><img  alt="CodeWars"  src="https://img.shields.io/static/v1?label=Follow&message=CodeWars&color=B1361E&style=for-the-badge&logo=codewars"></a>

[![GitHub issues](https://img.shields.io/github/issues/VictorSilva15/notification_app_web?style=for-the-badge)](https://github.com/VictorSilva15/notification_app_web/issues) [![GitHub forks](https://img.shields.io/github/forks/VictorSilva15/notification_app_web?style=for-the-badge)](https://github.com/VictorSilva15/notification_app_web/network) [![GitHub stars](https://img.shields.io/github/stars/VictorSilva15/notification_app_web?style=for-the-badge)](https://github.com/VictorSilva15/notification_app_web/stargazers)

Essa aplicação foi produzida com auxílio da PlayList [Insta Post Reminder - Aplicativo de Notificação para Desktop](https://www.youtube.com/playlist?list=PLeLKux5eT3kbD0iUjYCHmea57EGQSphc9) do canal Mayk Brito. No vídeo é mostrado como produzir uma aplicação com JS Puro e renderizar em tempo real no Html. Em cada vídeo foi apresentados conceitos novos e muito interessantes, como:

- Notificação no Browser
- Import/Export de módulos
- Async/Await
- Tratamento de excessões
- JS Moderno (e puro)
- Trabalhar com timer
- Sistema de Eventos Pub/Sub
- App Desktop com Electron
- ... muito mais

Acesse os [vídeos](https://www.youtube.com/watch?v=Mhd6x2Z-F_w) e faça você mesmo sua versão!

<h2>Status do Projeto</h2>

<h4> 🚧 ... 🚀 Em Produção  ... 🚧 </h4>

<h2>Pré-requisitos</h2>

<p>Para executar essa projeto basta abrir a página index.html com o Live Server no seu navegador (Chrome, Edge, FireFox). Se quiser modificar o código será necessário um editor de códigos de sua preferência. Recomendo usar o <a  href="https://code.visualstudio.com/download"  alt="VS Code">Visual Studio Code</a>.</p>

<p>Para seguir os passos a seguir é necessário que você tenha instalado em sua máquina o <a  href="https://nodejs.org/en/"  alt="Link do Node.js">node.js</a>, <a  href="https://git-scm.com/downloads"  alt="Link do Git">git</a>,<a  href="https://code.visualstudio.com/download"  alt="Link do Visual Studio Code">Visual Studio Code </a> ou outro editor de preferência </p>

<p>Para rodar a aplicação na sua máquina primeiro clone o projeto para sua áreia de trabalho. para isso entre no terminal com as teclas W + R e digite cmd</p>

<p>Dentro do cmd entre na sua área de trabalho ou em uma pasta de sua preferencia. Para isso use o comando cd + caminho da pasta que quer entrar, exemplo:</p>

```bash
cd desktop/clone_notifications_app_web
```

<p>Estando dentro da pasta rode o comando a seguir para inicializar o git na sua pasta e poder baixar os arquivos:</p>

```bash
git init
```

<p>Em seguida use: </p>

```bash
git clone https://github.com/VictorSilva15/notification_app_web.git
```

<p>Esse comando irá iniciar a clonagem do projeto linkado nesse repositório para dentro da pasta que você criou em sua máquina.</p>

<p>Agora é abrir a pasta no seu editor de preferencia como Visual Studio Code, ou Sublime Text. Se você tiver instalado o VS Code basta dentro do terminal executar: </p>

```bash
code .
```

<p>Esse comando irá abrir o projeto dentro do VS code para começarmos a execução</p>

Você verá diversas pastas como src que contém toda a lógica da aplicação. Dentro dela há diversos scripts que são as funções JS separadas. Foi utilizado módulos de import e export para a conexão entre esses arquivos por tanto se você quiser rodar essa aplicação no estado atual, não basta apenas abrir o index.html, você terá que rodar a aplicação com o Live Server, que é uma extensão do Visual Studio Code que nos permite rodar o código no browser através de um link privado de salvamento automático. Agora, se você quiser rodar a versão desktop do Electron siga os passos abaixo</p>

<h3>Instalando dependências</h3>

<p>Para rodar/testar a aplicação versão Electron na sua máquina, primeiramente será necessário que você instale o npm para instalar os node_modules dentro do projeto e assim conseguir inicializá-lo. Para isso entre na pasta do projeto se ainda não estiver nela com: </p>

```bash
cd notifications_app_web
```

<p>Depois use o comando:</p>

```bash
npm i
```

<p>Feito isso, começará a instalar os pacotes necessários para rodar os arquivos na sua máquina. </p>

<p>Depois de instalar o npm, basta iniciar a aplicação com:</p>

```bash
npm start
```

<p>Pronto, sua aplicação deverá iniciar, e assim você pode começar os testes</p>

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/html)

- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/css)

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

- [NodeJS](https://nodejs.org/en/)

- [Electron](https://www.electronjs.org/)

- [Google Fonts Poppins](https://fonts.google.com/specimen/Poppins?query=Popp)

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.

2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`

3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`

4. Envie as suas alterações: `git push origin my-feature`

> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

### Autor

<img  style="border-radius: 50%;"  src="https://avatars.githubusercontent.com/u/70340221?v=4"  width="100px;"  alt="Victor"/>
  
<sub><b>Victor Hugo</b></sub>🚀

Feito com ❤️ por Victor Hugo da Silva 👋🏽 Entre em contato!

---

[![Linkedin Badge](https://img.shields.io/badge/-Victor-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/victor-silva-9485021b2/)

[![Gmail Badge](https://img.shields.io/badge/-victor470hugo@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:tgmarinho@gmail.com)](mailto:victor470hugo@gmail.com)
