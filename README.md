# Desafio Elogroup
Desafio de Programação - Elogroup - Formulário

### Usuário Gupy: lucasbg@protonmail.com
### Nome: Lucas Gama

## Descrição
Neste projeto há o seguinte formulário:

![formulario](/images/formulario.png)

Ao submeter o formulário, os dados passam por um processo de validação, verificando se:
1. O campo nome possui pelo menos um sobrenome;
2. O telefone está no formato 99 - 99999999;
3. As redes sociais estão desmarcadas se não possuir redes sociais.

As opções no formato de checkbox (as redes sociais) são salvas em um Array para o envio no formato JSON.

![array](/images/array.png)

O envio é feito via POST para o endpoint http://localhost:8080.
O servidor retorna os dados recebidos e o botão "Enviar" é desabilitado.

## Arquivos
index.html - É a página principal do formulário que deve ser carregada no navegador.
styles.css , elogroup.js - Arquivos de CSS e JavaScript carregados pelo index.html.
server.js - Script para o servidor com NodeJS, permitindo que o client se comunique com endpoint.

## Pré-requisitos
NodeJS e o frameWork Express.
Com o NodeJS instalado, basta executar o comando dentro da pasta principal:

```
npm install express
```

e em seguida,

```
node server.js
```

O servidor está funcionando e pronto para receber os dados do formulário.

## Execução
Com o servidor funcionando, basta executar o arquivo index.html no navegador.
