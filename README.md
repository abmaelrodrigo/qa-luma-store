# Q.A Challenge Luma Store
>  This is a challenge by [Coodesh](https://coodesh.com/)

# Descrição do projeto
Este é um desafio técnico da Coodesh utlizado para avaliar as habilidades do autor em relação a testes automatizados.

Aqui aplicaremos os conceitos de teste caixa preta, onde testaremos a página https://magento.softwaretestingboard.com. 

Neste projeto serão cobertos os seguintes aspectos do site: 
- Se a página está carregando corretamente a home page;
- Buscar por `shirt` no menu superior e revisar se a página de resultados carregou corretamente;
- Adicionar um produto no carrinho;
- Realizar checkout.

# Linguagem, framework e tecnologias usadas
Neste projeto foi utlizado o framework Cypress.io, e os casos de teste foram criados utilizando a linguagem JavaScript, em conjunto com o padrão de projetos Page Objects.

Para gerar dados de usuários, recorreu-se à API obtida em https://randomuser.me/.

- **Por que utilizar o Cypress?** - Além de seu tempo de execução rápido e de sua simplicidade e facilidade de uso, o Cypress possui uma sintaxe amigável e uma interface de usuário  intuitiva. Para esta suite de testes em especial que utiliza  casos de teste end-to-end, resolvi optar pelo Cypress também por poder acompanhar na  em sua interface de usuário a execução dos testes, verificar onde eles estavam falhando e como aprimorá-los. 

- **Por que não o Selenium?** - O Selenium apresenta algumas características importantes, como ser mais flexível em termos de linguagens de programação suportadas, e suporta uma ampla gama de navegadores. Porém, ele pode ter uma curva de aprendizado mais íngreme devido à complexidade da API e da configuração. Além disso, como Selenium comunica com os navegadores externos por meio do WebDriver, pode ter tempos de execução mais lentos em comparação com o Cypress.

- **Por que não o  Robot Framework?** - O Robot Framework tem sua sintaxe legível e fácil de usar, além de sua extensa biblioteca, facilitando a criação de testes. Entretanto, ele pode não ser tão eficiente em termos de desempenho quanto o Cypress ou o Selenium, especialmente para testes complexos ou em larga escala. Ademais, embora seja fácil de usar, Robot Framework pode ter algumas limitações em termos de flexibilidade e personalização em comparação com outras ferramentas de automação de teste.

# Como instalar e usar o projeto?

A. Após fazer o git clone deste projeto para sua máquina local, acesse o diretório do projeto e siga os seguintes passos: 

1. **Instale o Cypress**: 

    `npm install cypress --save-dev`

2. **Abra o o painel interativo do Cypress**: 

    `npx cypress open`

3. **Na página de boas vindas do Cypress**: clique em 'E2E Testing'

4. Selecione o browser de sua preferência

5. Clique em 'Start E2E Testing'

6. Será aberta a aba Specs

7. Clique no caso de teste verifyLumaStore.cy 


B. Você pode também rodar o projeto no modo headless

1. Após installar o Cypress, rode o seguinte código:

    `npx cypress run`


# Casos te Teste

Os casos de teste deste projeto foram baseados nos seguintes requerimentos: 

1. Verificar se a página está carregando corretamente a homepage.

2. Buscar por shirt no menu superior e revisar se a página de resultados carregou corretamente. 
    
    2.2 Buscar por shirt no menu superior e clicar no último resultado sugerido. 

3. Criar uma conta na tela de Login/Cadastro.

4. Adicionar um produto no carrinho.

    4.1 Adicionar um produto aleatório do catalogo de moda masculina no carrinho.

5. Realizar checkout.

6. Adicionar comentário em um produto aleatório do catálogo de moda masculina no carrinho.

## Status de cada caso de teste: 
1. Verificar se a página está carregando corretamente a homepage: aprovado ✅

2. Buscar por shirt no menu superior e revisar se a página de resultados carregou corretamente. 
    
    2.2 Buscar por shirt no menu superior e clicar no último resultado sugerido: aprovado ✅

3. Criar uma conta na tela de Login/Cadastro: aprovado ✅

4. Adicionar um produto no carrinho

    4.1 Adicionar um produto aleatório do catalogo de moda masculina no carrinho: falhou ❌

    **Resultado atual:** O carrinho não atualiza em relação à quantidade adicionada, e não há qualquer feedback ao usuário de que o produto foi adicionado com sucesso.

5. Realizar checkout: BLOQUEADO 🟥

    **Resultado atual:** a função de adicionar ao carrinho está bloqueando o fluxo de Checkout.

6. Adicionar comentário em um produto aleatório do catálogo de moda masculina no carrinho: aprovado ✅


## Relatório

Para gerar um relatório automático do teste, podemos utilizar o **Allure** 

1. Primeiramente, instalamos o Allure: 

    `brew install allure`

2. Em seguida, acesse a raiz do projeto e rode o seguinte comando: 

    `npm run test:allure`

O relatório de testes será criado e ao final de toda a execução o mesmo será exibido no navegador

### Nota aos avaliadores: 

1. Um dos testes obrigatórios era a conclusão do checkout, porém não foi possível elaborar os casos de teste, pois o carrinho está apresentando um bug: ao tentar adicionar um produto, o carrinho permanece vazio. A página do carrinho também informa que não há produtos adicionados. 

2. Em relação ao caso de teste de adicionar um comentário ao produto, não há um feedback visual de que a ação foi realizada com sucesso. Portanto, não foi possível realizar qualquer asserção. 


