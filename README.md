# pesquisa_site_compra
Repositório para testes de pesquisa em site de compra. 

Documento de [Casos de testes](https://github.com/marriely/pesquisa_site_compra/blob/master/casos_de_testes.md)

Teste foi realizado usando o framework cypress(https://www.cypress.io/) com a linguagem JavaScrit.

Para executar o projeto local precisa ter cypress instalados.

`npm install cypress`

Para entender um pouco da estrutua dos subdiretórios do cypress:
* fixtures = basicamente são dados fixos para utilizarmos em nossos testes
* integration = onde ficarão nossos testes
* plugins =  permitem que você toque, modifique ou estenda o comportamento interno do cypress
* support = commandos personalizados e importação de arquivos



Para iniciar o teste junto com uma interface gráfica você pode usar o comando abaixo dentro do diretório do projeto.

`npm run cypress:open`

Irá mostra essa interface gráfica com os testes, ai só escolher qual spec(teste) irá executar.

[![Exemplo cypress gráfico](https://cdn-images-1.medium.com/max/800/1*LolhBhXNFHk0ne-Q1qIDRg.png)]

Para iniciar o teste no modo headless (sem interface gráfica) execute o comandoo abaixo

`npm run cypress`

Após a execução do teste será criado o diretório EVIDENCIA, onde está o arquivo gerado com o resultado do pesquisa de produto (site visita, descrição do produto e valor do produto).
Esse arquivo é gerado em cada execução dos testes, ele registra os dados do último teste.
