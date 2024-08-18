# [VUTTR API (Very Useful Tools to Remember)](https://bossabox.notion.site/Back-end-0b2c45f1a00e4a849eefe3b1d57f23c6)

## Descrição

Este projeto consiste na construção de uma API e banco de dados para a aplicação **VUTTR (Very Useful Tools to Remember)**, que funciona como um repositório simples para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags. A aplicação foi desenvolvida utilizando uma stack de tecnologia moderna e está de acordo com os padrões RESTful.

## Tecnologias Utilizadas

- **Bun**: Plataforma de desenvolvimento backend, alternativa mais rápida ao Node.js.
- **Hono**: Framework ultraleve para a criação de APIs e web applications em Bun.
- **Drizzle**: ORM simples e eficiente para interação com bancos de dados.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao código.
- **PostgreSQL**: Banco de dados relacional utilizado para persistência das informações.

## Funcionalidades

A API implementa as seguintes funcionalidades:

1. **Listar Ferramentas**: `GET /tools`  
   Retorna uma lista com todas as ferramentas cadastradas.

2. **Filtrar Ferramentas por Tag**: `GET /tools?tag={tag}`  
   Retorna uma lista de ferramentas que contenham a tag especificada.

3. **Cadastrar Nova Ferramenta**: `POST /tools`  
   Permite o cadastro de uma nova ferramenta no repositório.

4. **Remover Ferramenta por ID**: `DELETE /tools/{id}`  
   Remove uma ferramenta específica com base no seu ID.

## Funcionalidades Bônus

O projeto também conta com as seguintes funcionalidades adicionais:

- **Autenticação JWT**: Implementação de autenticação e autorização utilizando JSON Web Tokens.
- **Conteinerização**: O projeto pode ser facilmente executado em um ambiente Docker para maior portabilidade e facilidade de configuração.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Para mais informações ou dúvidas, entre em contato:

- **Nome:** Cláudio Alves
- **Email:** [claudio.avgo@gmail.com](mailto:claudio.avgo@gmail.com)
- **GitHub:** [claudioavgo](https://github.com/claudioavgo)
- **LinkedIn:** [claudioavgo](https://linkedin.com/in/claudioavgo)