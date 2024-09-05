# React + Vite

npm install

npm run dev

# Manutencao

\_\_\_TAREFAS GERAIS - 0,5ptos (0,25 cada)

- os botoes devem ficar fixos na tela, no top "0".
- todas as imagens devem estar baixadas dentro da pasta assets podendo alterar o tema do json se quiserem

\_\_\_GIT - 2,0ptos (1,0 cada)

- clone este repositório para o seu próprio, deixando apenas uma pasta root para futura manutenção de implantação.
- o versionamento de branchs deve corresponder ao conhecimento adquirido nas 2 aulas anteriores, onde a nomenclatura dos commits e das branchs devem condizer a feature realizada e ser efetuado os merges pra dev, ao final para main.

\_\_\_PRODUTOS - 1,5ptos (0,3cada)

- Devem ser incluidos mais 3 produtos relacionados no arquivo json
- o json esta faltando os itens Categoria e o status
- No Card dos produtos o fundo deve contrastar com o fundo do body, estao iguais as cores e uma bolinha vermelha deve aparecer se o status for false e verde se for true, isto pois vermelho representa mostruario e verde para venda.
- o componente Card deve ser desestruturado e o nome das propriedades usados diretamente no corpo do arquivo.
- o flex wrap para os cards em row deve ser aplicado

\_\_\_API - 2,0ptos (0,5 cada)

- o flex wrap para os cards em row deve ser aplicado
- um componente separado do Card de produtos deve ser criado especifico para name, status, species, type, gender e image.
- para o console.log("Esta pagina nao contem este personagem"), deve ser criado um componente de alerta ou aviso
- na documentacao da api ha mais um parametro chamado name na url, e mais um input para filtro por nome, deve ser incluido ao lado do de paginas.

  ---Feature para nota total(10) => se sobrar tempo, no map do card com os personagens o index deve ser usado e implementado um modal q abra com um unico personagem e suas informacoes, o react-tilt ou o react-draggable devem ser usados.

\_\_\_MAPA - 1,0pto

- usando o leaftlet e o react-leaft-let, fazer um mapa com a localizacao do Senai.

- IMPORTS para debug de mapa, instalar o leaflet-defaulticon-compatibility

import 'leaflet/dist/leaflet.css';

import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

import "leaflet-defaulticon-compatibility";

https://react-leaflet.js.org/

https://www.npmjs.com/package/react-draggable

https://www.npmjs.com/package/react-tilt

https://vitejs.dev/

\_\_\_GRÁFICOS E REACT ROUTER DOM - 2,0ptos (1,0 e 1,0 cada)

- Usando o react router dom, criar uma rota para acessar uma nova página contendo 2 gráficos de sua escolha referentes a biblioteca recharts.
- Usando a mesma biblioteca criar os paths especificos para cada parte do projeto que esta separado por renderização condicional, conferir a documentação do react router. Siga a arquitetura do projeto para nao haverem complicações.

https://recharts.org/en-US/

https://reactrouter.com/en/main/start/tutorial
