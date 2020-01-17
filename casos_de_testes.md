## Casos de teste



#### Realizar busca por produto válido [3 opções sugeridas]
	Dado que eu estou no site de compra
	Quando eu realizo a busca por um produto válido ‘Smartphone Samsung Galaxy A70 ‘
	Então eu vejo o resultado do produto pesquisado
	
#### Realizar busca pela tecla enter
	Dado que eu estou no site de compra
	Quando eu realizo a busca por um produto utilizando a tecla enter
	Então eu vejo o resultado do produto pesquisado
	
#### Realizar busca pelo botão de pesquisa
	Dado que eu estou no site de compra
	Quando eu realizo a busca por um produto utilizando o botão de pesquisa
	Então eu vejo o resultado do produto pesquisado
	
#### Realizar busca por parte do nome do produto
	Dado que eu estou no site de compra
	Quando eu realizo a busca por parte do nome do produto ‘Galaxy A70’
	Então eu vejo o resultado do produto pesquisado
	
#### Realizar busca em branco
	Dado que eu estou no site de compra
	Quando eu realizo a busca sem informar nada
	Então a busca não é feita
	
#### Realizar a busca com produto que não existe
	Dado que eu estou no site de compra
	Quando eu realizo a busca por um produto que não existe na loja
	Então é exibido uma mensagem que o item não foi encontrado
	
#### Alterar descrição do produto pesquisado para realizar nova pesquisa
	Dado que eu estou no site de compra
	E já realizei uma pesquisa de produto
	Quando eu altero a descrição da pesquisa realizada
	Então é exibido um novo resultado do item pesquisado
	
#### Alterar pesquisa usando as categorias de produto
	Dado que eu estou no site de compra
	E já realizei uma pesquisa de produto
	Quando eu altero a pesquisa usando as categorias de produto
	Então é exibido um novo resultado do item pesquisado
	
#### Limpar busca feita por categoria
	Dado que eu estou no site de compra
	E já realizei uma pesquisa de produto usando a categoria
	Quando eu limpo as categorias pesquisadas
	Então é exibido a página de pesquisa que foi acessada
	
#### Acessar produto pesquisado
	Dado que eu estou no site de compra na página de pesquisa
	Quando eu clico em um produto do resultado da pesquisa
	Então é exibida a página do produto com toda a sua descrição.

