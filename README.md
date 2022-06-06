# axur_test
## Sobre a aplicação

A aplicação é responsável pela criação de uma lista de contatos na plataforma do [Hubspot](https://www.hubspot.com/). Uma rota foi disponibilizada para a recuperação de um compilado de todos os dominios de emails cadastrados de contatos e sua quantidade. Toda a aplicação foi desenvolvida em NodeJS + JavaScript, utilizando o framework Express para contrução do servidor e disponibilização de rotas.

## Como executar a aplicação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Node.js](https://nodejs.org/en/) e o gerenciador de pacotes [npm](https://docs.npmjs.com/).

Clone o repositório, em seqguida, na raiz do projeto instale as dependências do projeto, utilizando o seguinte comando no terminal:

> ``` npm install ```

Após instalar as dependências será necessário configurar o arquivo *.env*. Ainda na raiz do projeto você encontrará um arquivo env.example, onde as variáveis de ambiente necessárias estarão listadas. Edite o arquivo inserindo as seguintes informações:

* PORT: porta disponível para rodar o projeto localmente;
* TOKEN: API key do Hubspot;
* CSVPATH: caminho absoluto do arquivo CSV na sua máquina;
* LISTID: Não é necessário preencher, este será alterado automaticamente pela aplicação ao criar uma nova lista.

Após inserir as informações renomeie o arquivo *env.example* para *.env*.

A aplicação pode ser iniciada a partir do Nodemon em modo watch. Para isso, na raiz do projeto digite em seu terminal:

>```npm run dev```

Se preferir rodar a aplicação sem utilizar o Nodemon, digite em seu terminal na raiz do projeto:

>```npm start```

Após iniciar a aplicação, ela irá ler o arquivo *contatos.csv*, e irá criar os contatos presentes na lista na plataforma do Hubspot. Devido ao *rate limit* da API do hubspot essa operação teve de ser limitada e as requisições possuem um intervalo entre elas. Desta maneira, ao iniciar a aplicação aguarde as seguintes mensagem no console antes de fazer uma requisição:


* 'contatos inseridos com sucesso': indica que os contatos do arquivo *.csv* ja foi lido, processado e seus contatos inseridos na plataforma do Hubspot;

* 'matheus.alexandre.1638560027535': lista criada com sucesso na plataforma do hubspot;

* 'contatos inseridos na lista com sucesso': os contatos presentes na plataforma do Hubspot inseridos anteriormente foram adicionados na lista criada.

Após receber o log 'contatos inseridos na lista com sucesso', o seguinte endpoint pode ser acessado a partir de uma requisição `http` do tipo `GET`:

>`/axur/contact/domain-list`

Para requisições bem sucedidas o retorno deve ter o status `200` e o retorno deve ser na seguinte estrutura: 

```json
{
	"message": "Lista de contatos criada com sucesso!",
	"response": [
		{
			"domain": "buzzfeed.com",
			"quantity": 2
		},
		{
			"domain": "dailymail.co.uk",
			"quantity": 1
		},
		{
			"domain": "spotify.com",
			"quantity": 1
		}
    //(...)
  ]
}
```
Se acaso algum erro ocorrer na requisição, o status `500` será retornado com a seguinte mensagem: 

>`Ops! Algo deu errado, tente novamente!`

## Tecnologias utilizadas

[NodeJS](https://nodejs.org/en/)
[JavaScriptES6](https://www.w3schools.com/js/js_es6.asp)
[Express](https://expressjs.com/)
[Nodemon](https://www.npmjs.com/package/nodemon)
[Axios](https://axios-http.com/docs/intro)
[Async](https://www.npmjs.com/package/async)
[ESLint](https://eslint.org/docs/rules/)

## Desafios durante a implementação

Os principais desafios encontrados durante a implementação estiveram associados a utilização da API do Hubspot. O *rate limit* da API pode ser contornado utilizando-se o pacote *npm async* que inseriu um tempo de espera entre cada requisição na etapa de inserção dos contatos na plataforma do Hubspot. Outro desafio foi a necessidade de criação de várias contas de teste, uma vez que a plataforma bloqueava constantemente as requisições, acredito que acreditando ser algum tipo de ataque como *DDOS*. No geral, o desenvolvimento da aplicação foi tranquilo e sempre tentando implementar boas práticas de código e arquitetura limpa.

## Desenvolvedor

<a href="https://github.com/alexandremhm">**Matheus Alexandre**</a>, tem 31 anos, é pessoa desenvolvedora fullstack, de Belo Horizonte, Minas Gerais. É bacharel em Química Tecnológica pelo CEFET-MG. Além disso, estudou Desenvolvimento Web na Trybe.

