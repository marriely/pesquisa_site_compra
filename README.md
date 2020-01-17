# pesquisa_site_compra
Repositório para testes de pesquisa em site de compra

Teste foi realizado usando o framework cypress(https://www.cypress.io/)

Para executar o projeto local precisa ter cypress instalados.

`npm install cypress`

Para iniciar o teste junto com uma interface gráfica você pode usar o comando abaixo dentro do diretório do projeto.

`npm run cypress:open`

Irá mostra essa interface gráfica com os testes, ai só escolher qual spec(teste) irá executar.

[![Exemplo cypress gráfico](https://cdn-images-1.medium.com/max/800/1*LolhBhXNFHk0ne-Q1qIDRg.png)]

Para iniciar o teste no modo headless (sem interface gráfica) execute o comandoo abaixo
`npm run cypress`

Após a execução do teste é criado o diretório EVIDENCIA, onde está o arquivo gerado com o resultado do pesquisa de produto. Esse arquivo é zerado em cada execução, ele registra os dados do último teste.
