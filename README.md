# [VUTTR API (Very Useful Tools to Remember)](https://bossabox.notion.site/Back-end-0b2c45f1a00e4a849eefe3b1d57f23c6)

## Descrição

Este projeto consiste na construção de uma API e banco de dados para a aplicação **VUTTR (Very Useful Tools to Remember)**, que funciona como um repositório simples para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags. A aplicação foi desenvolvida utilizando uma stack de tecnologia moderna e está de acordo com os padrões RESTful.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento backend.
- **Express**: Framework para a criação de APIs em Node.js.
- **Mongoose**: Biblioteca de modelagem de dados para MongoDB e Node.js.
- **MongoDB**: Banco de dados NoSQL utilizado para persistência das informações.
- **Swagger**: Ferramenta para documentação da API.

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

## Documentação da API

A documentação completa da API foi gerada utilizando o Swagger e pode ser acessada diretamente no endpoint `/api-docs`.

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