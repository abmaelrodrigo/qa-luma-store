# Q.A Challenge Luma Store

Este é um desafio para que possamos ver as suas habilidades como QA/Tester.

Nesse desafio você deverá testar de forma automatizada o site Luma Store. O projeto a ser desenvolvido por você tem como objetivo exibir executar ações na loja conforme indicado nos casos de uso que estão logo abaixo.

[SPOILER] As instruções de entrega e apresentação do challenge estão no final deste Readme (=

### Antes de começar
 
- Considere como prazo limite da avaliação o período a partir do início do teste. Se, por algum motivo, não for possível concluir dentro deste prazo, avise a pessoa que o convidou para receber instruções sobre o que fazer.
- Documente todo o processo de investigação para o desenvolvimento da atividade (README.md no seu repositório); os resultados destas tarefas são tão importantes quanto o seu processo de pensamento e decisões à medida que as completa, por isso, tente documentar e apresentar as suas hipóteses e decisões na medida do possível.


#### Tecnologias:
- Ferramenta: Ghost Inspector, Selenium, Cypress, Robot Framework, ou outro de seu conhecimento
- Adicionais: Cucumber ou outros plugins necessários para configurar a ferramenta

## Teste

Neste desafio aplicaremos os conceitos de teste caixa preta, onde testaremos a página https://magento.softwaretestingboard.com

> Nota: utilize dados fictícios criados através do site https://randomuser.me

**Obrigatório 1** - Para realizar o teste precisamos escolher a ferramenta de teste. Explicar o por quê da escolha, as vantagens e desvantagens dos que não foram escolhidos.

**Obrigatório 2** - Você deverá atender aos seguintes casos de uso:

- Se a página está carregando corretamente a home page;
- Buscar por `shirt` no menu superior e revisar se a página de resultados carregou corretamente. Veja o diferencial 1 para incrementar este caso de uso;
- Adicionar um produto no carrinho
- Realizar checkout

### Diferenciais
Além do que foi solicitado, existem itens adicionais para incrementar o projeto final. Você também pode adicionar algum recurso não citado anteriormente.

- **Diferencial 1** - Buscar por `shirt` no menu superior e clicar no último resultado sugerido. Se possível, escute o retorno da requisição para saber o momento de clicar na interface;
- **Diferencial 2** - Criar uma conta na tela de Login/Cadastro. Observe que existe um captcha no formulário, então é necessário decidir como abordar este campo;
- **Diferencial 3** - Adicionar um produto **aleatório** do catalogo de moda masculina no carrinho;
- **Diferencial 4** - Adicionar comentário em um produto **aleatório** do catálogo de moda masculina no carrinho;
- **Diferencial 5** - Gerar um relatório automático do teste.

## Readme do Repositório

- Deve conter o título do projeto
- Uma descrição sobre o projeto em frase
- Deve conter uma lista com linguagem, framework e/ou tecnologias usadas
- Como instalar e usar o projeto (instruções)
- Não esqueça o [.gitignore](https://www.toptal.com/developers/gitignore)
- Se está usando github pessoal, referencie que é um challenge by coodesh:  

>  This is a challenge by [Coodesh](https://coodesh.com/)

## Finalização e Instruções para a Apresentação

1. Adicione o link do repositório com a sua solução no teste
2. Verifique se o Readme está bom e faça o commit final em seu repositório;
3. Envie e aguarde as instruções para seguir. Sucesso e boa sorte. =)

## Suporte

Use a [nossa comunidade](https://discord.gg/rdXbEvjsWu) para tirar dúvidas sobre o processo ou envie uma mensagem diretamente a um especialista no chat da plataforma. 


Use a [nossa comunidade](https://discord.gg/rdXbEvjsWu) para tirar dúvidas sobre o processo ou envie uma mensagem diretamente a um especialista no chat da plataforma. 

______________ apagar acima ^ 
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

# Linguagem, framework e/ou tecnologias usadas
Neste projeto foi utlizado o frameork Cypress.io, e os casos de teste foram criados utlizando a linguagem JavaScript. 

Para gerar dados de usuários, recorreu-se à API obtida em https://randomuser.me/ 

- **Por que utilizar o Cypress?** - Além de seu tempo de execução rápido e de sua simplicidade e facilidade de uso, o Cypress possui uma sintaxe amigável e uma interface de usuário  intuitiva. Para esta suite de testes em especial que utiliza  casos de teste end-to-end, resolvi optar pelo Cypress também por poder acompanhar na interface de usuário do Cypress a execução dos testes, verificar onde eles estavam falhando e como aprimorá-los. 

- **Por que não o Selenium?** - O Selenium pode ter uma curva de aprendizado mais íngreme devido à complexidade da API e da configuração. Além disso, como Selenium comunica com os navegadores externos por meio do WebDriver, pode ter tempos de execução mais lentos em comparação com o Cypress.

- **Por que não o  Robot Framework?** - O Robot Framework pode não ser tão eficiente em termos de desempenho quanto o Cypress ou o Selenium, especialmente para testes complexos ou em larga escala. Ademais, embora seja fácil de usar, Robot Framework pode ter algumas limitações em termos de flexibilidade e personalização em comparação com outras ferramentas de automação de teste.

# Como instalar e usar o projeto?

A. Após fazer o git clone deste projeto para sua máquina local, acesse o diretório do projeto e siga os seguintes passos: 

1. **Instalando o Cypress**: 
`npm install cypress --save-dev`

2. **Abrir o o painel interativo do Cypress**: 
`npx cypress open`

3. **Na página de boas vindas do Cypress**: clique em 'E2E Testing

4. Selecione o browser de sua preferência

5. Clique em 'Start E2E Testing'

6. Será aberta a aba Specs

7. Clique no caso de teste verifyLumaStore.cy 

B. Você pode também rodar o porjeto no modo headless

1. Após installar o Cypress, rode o seguinte código:
`npx cypress run`


# Casos te Teste

Os casos de teste deste projeto forma baseados nos seguintes requerimentos: 

1. Verificar se a página está carregando corretamente a home page.

2. Buscar por shirt no menu superior e revisar se a página de resultados carregou corretamente. 
    
    2.2 Buscar por shirt no menu superior e clicar no último resultado sugerido. 

3. Criar uma conta na tela de Login/Cadastro.

4. Adicionar um produto no carrinho.

    4.1 Adicionar um produto aleatório do catalogo de moda masculina no carrinho.

5. Realizar checkout.

6. Adicionar comentário em um produto aleatório do catálogo de moda masculina no carrinho.

## Status de cada caso de teste: 
1. Verificar se a página está carregando corretamente a home page: aprovado ✅

2. Buscar por shirt no menu superior e revisar se a página de resultados carregou corretamente. 
    
    2.2 Buscar por shirt no menu superior e clicar no último resultado sugerido: aprovado ✅

3. Criar uma conta na tela de Login/Cadastro: aprovado ✅

4. Adicionar um produto no carrinho

    4.1 Adicionar um produto aleatório do catalogo de moda masculina no carrinho: falhou ❌

    **Resultado atual:** O carrinho não atualiza em relação à quantidade adicionada, e não há qualuqer feedback ao usuário de que o produto foi adicionado com sucesso

5. Realizar checkout: BLOQUEADO 🟥

    **Resultado atual:** a função de adicionar ao carrinho está bloqueado o fluxo de Checkout

6. Adicionar comentário em um produto aleatório do catálogo de moda masculina no carrinho: aprovado ✅


## Relatório

Para gerar um relatório automático do teste, podemos utilizar o **Allure** 

1. Primeiramente, instalamos o Allure: 

    `brew install allure`

2. Em seguida, acesse a raiz do projeto e rode o seguinte comando: 

    `npm run test:allure`

O relatório de testes sera criado e ao final de toda a execução o mesmo será exibido no navegador

### Nota aos avaliadores: 

1. Um dos testes obrigatórios era a conlusão do checkout, porém não pude elaborar os casos de teste pois o carrinho está apresentando um bug: ao tentar adionar um produto o carrinho permance vazio. A página do carrinho também exibe que não há produtos adicionados. 

2. Em relação ao caso de teste de adicionar um comentário ao produto, nào há um feedback visual de que foi realizado com sucesso. Portanto, não foi possível realizar qualquer asserção. 


