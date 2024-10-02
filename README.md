# E-Commerce Admin

Este projeto é o backend e CMS de uma aplicação full-stack de e-commerce. Ele gerencia produtos, categorias, pedidos e outras funcionalidades administrativas, utilizando NestJS, Prisma, PostgreSQL e integração com o Stripe.

## Recursos Principais

- **Gestão de Produtos**: Criação, edição e exclusão de produtos.
- **Categorias e Filtros**: Organização dos produtos por categorias, cores e tamanhos.
- **Billboards**: Sistema para gerenciar banners e vitrines por categoria.
- **Pedidos**: Visualização e gestão de pedidos realizados.
- **Gráficos de Vendas**: Visualização de métricas e gráficos de vendas.
- **Integração com Cloudinary**: Upload de imagens de produtos.
- **Múltiplos Vendedores**: Suporte para gerenciamento de múltiplos vendedores.

## Tecnologias Utilizadas

- **NestJS**: Framework de backend escalável para a criação de APIs.
- **Prisma**: ORM para interações com o banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados relacional.
- **Stripe**: Integração para processamento de pagamentos.
- **Cloudinary**: Serviço de hospedagem de imagens.

## Pré-requisitos

- Node.js versão 14.x ou superior.
- PostgreSQL configurado.
- Stripe API configurado.

## Configuração

### Clone o Repositório

```bash
git clone https://github.com/Humberto08/ecommerce-admin.git
```
### Instale as Dependências
No diretório do projeto, execute o comando:

```bash
npm install
```
### Configuração do Ambiente
Crie um arquivo .env com as seguintes variáveis de ambiente:

```bash
DATABASE_URL="postgresql://seu-usuario:senha@localhost:5432/ecommerce-admin"
STRIPE_API_KEY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
FRONTEND_STORE_URL=http://localhost:3001
```
### Gere o Cliente Prisma e Migre o Banco de Dados

```bash
npx prisma generate
npx prisma db push
```
### Iniciar o Servidor de Desenvolvimento
Após configurar o ambiente, você pode iniciar o servidor com:

```bash
npm run dev
```
O servidor estará rodando em http://localhost:3000.

## Integração com o Front-End
Este projeto é utilizado em conjunto com a aplicação [ecommerce-store](https://github.com/Humberto08/ecommerce-store), que consome a API fornecida por este backend para exibir os produtos, processar pedidos e gerenciar o front-end da loja online.

## Funcionalidades
- Gerenciamento de Produtos: Crie, edite e remova produtos, gerencie estoque e visualize vendas.
- Billboards (Vitrines): Customize banners para cada categoria de produto.
- Filtros: Crie filtros de produto por cor e tamanho para uma melhor navegação dos clientes.
- Pedidos: Gerencie e acompanhe o status dos pedidos realizados.
- Integração com Stripe: Processamento de pagamentos seguro e eficiente.
- Cloudinary: Para upload e gestão de imagens dos produtos.

##
<div id='contatos' align="center">
  <p align="center">Made with 💜 by Humberto Luciano</p>
  <div id="contatos" align="center">
    <a href="https://www.linkedin.com/in/humberto-luciano/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
</div>
