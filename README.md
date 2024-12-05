# App-Clima

• [Introdução](#introdução)  
• [Funcionalidades](#funcionalidades)  
• [Tecnologias](#tecnologias)  
• [Instalação](#instalação)  
• [Licença](#licença)  

## Introdução

**App-Clima** é um aplicativo que permite pesquisar informações climáticas em tempo real, como temperatura, velocidade do vento e umidade de um local específico. O aplicativo oferece uma interface simples e direta, facilitando a busca por dados precisos e atualizados sobre as condições climáticas.<br/>ㅤ<br/>
![gifDemonstração](/public/showGif.gif)

## Funcionalidades

**Uso de API Climática** 🌍: Faz requisições a uma API para fornecer informações em tempo real sobre temperatura, umidade e condições atmosféricas.

**Animação de Chuva** 🌧️: Uma chuva animada em JavaScript que aparece na parte inicial, deixando o visual do app mais interessante.

**Pesquisa de Localidade** 🔍: Permite pesquisar a previsão do tempo para diferentes localidades inserindo o nome do local.

**Interface Dinâmica** 💻: Atualiza a UI automaticamente de acordo com a localidade pesquisada e as condições climáticas recebidas.


## Tecnologias

![React](https://img.shields.io/badge/-React-282C34?style=flat&logo=react&logoColor=61DAFB) Usado para construir a interface do aplicativo, permitindo a interação do usuário com a pesquisa de clima e a apresentação dos dados.

![JavaScript](https://img.shields.io/badge/-JavaScript-282C34?style=flat&logo=javascript&logoColor=F7DF1E) Utilizado para implementar a lógica do aplicativo, incluindo chamadas à API para buscar informações do clima e manipulação de dados para exibição.

![CSS](https://img.shields.io/badge/-CSS-282C34?style=flat&logo=css3&logoColor=1572B6) Usado para estilizar o aplicativo, garantindo um design limpo e responsivo.


## Instalação

### • Pré-requisitos
Tenha o [Node.js](https://nodejs.org/en/download/package-manager)🛠️ instalado em sua máquina para poder executar o aplicativo.

### • Passos para instalação

• Clone o repositório:

```sh
git clone https://github.com/LucasMartins717/app-clima
```

• Acesse o diretório do projeto:

```sh
cd app-clima
```

• Instale as dependências:

```sh
npm install
```

• Crie um arquivo .env e coloque sua api:

```sh
REACT_APP_API_KEY=suaApiAqui
```

• Inicie o aplicativo:

```sh
npm start
```

• O servidor será iniciado automaticamente e deve abrir o aplicativo em localhost:3000. Se não abrir automaticamente, você pode abrir o navegador e digitar localhost:3000 para acessar o aplicativo.


## Licença

• Este projeto utiliza a Licença MIT. Para mais informações, consulte o arquivo [LICENSE](./LICENSE).
