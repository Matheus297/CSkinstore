## Tabela de Conteúdos

- [Backend](#backend)
  - [Tecnologias Usadas](#tecnologias-usadas)
  - [Requisitos](#requisitos)
  - [Rotas](#rotas)
- [Frontend](#frontend)
  - [Estilização](#estilização)

## Backend

### Tecnologias Usadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Prisma**: ORM para interagir com o banco de dados de forma eficiente.
- **Fastify**: Framework para construção de APIs rápidas e leves.

### Requisitos

Para executar o backend, você precisará das seguintes ferramentas:

1. **Node.js 20+**: [Baixe e instale o Node.js](https://nodejs.org/).
2. **Yarn**: Gerenciador de pacotes. [Instale o Yarn](https://classic.yarnpkg.com/lang/en/docs/install/).
3. **pnpm**: Gerenciador de pacotes. [Instale o pnpm](https://pnpm.io/installation).

### Instalação

1. Navegue até a pasta `backend`:
   ```bash
   cd backend
Instale as dependências usando Yarn:
   ```bash
   yarn
   ````
e também use
   ```bash
   npm install
   ````

para iniciar
```bash
   npm run dev ou yarn dev
   ````
### Rotas

http://localhost:3001


[**GET**] /skins

Obtém todos os itens disponíveis.

[**GET**] /skin

Obtém itens filtrados com base em parâmetros de consulta.
Parâmetros:
- price: Preço do item.
- min: Valor minimo do item
- max: Valor máximo do item.
- name: Nome do item.
- category: Categoria do item (ex: sniper, assalt).
- float: Nível de desgaste do item (0 a 1).

[**POST**] /skin

Adiciona um novo item ao banco de dados.
```json
{
    "name": "AK-47 | Case Hardened (blue gem)",
    "image": "https://www.csgodatabase.com/images/skins/webp/AK-47_Case_Hardened.webp",
    "category": "assalt",
    "float": "0.1502939213",
    "rarity": "Classified",
    "price": 738.1,
    "pattern": 661
}
```
### Campos
- name: Nome do item (string).
- image: URL da imagem do item (preferencialmente no formato webp).
- category: Categoria do item (ex: assalt, sniper).
- float: Nível de desgaste do item (string, de 0 a 1).
- rarity: Raridade do item.
- price: Valor do item (número).
- pattern: Padrão do item (número), relevante para skins com múltiplos padrões.

  

## Frontend


http://localhost:3000

### Tecnologias Usadas

- Next.js: Framework React para renderização do lado do servidor e geração de sites estáticos.
- BulmaCSS: Framework CSS para estilização.
- Styled Components: Biblioteca para estilização em componentes React.
- Material-UI (MUI): Biblioteca de componentes React, usada para componentes como Slider.

### Instalação

1. Navegue até a pasta  saindo da pasta`backend`:
   ```bash
   cd backend
Instale as dependências usando Yarn:
   ```bash
   yarn
   ````
e também use
   ```bash
   npm install
   ````

para iniciar
```bash
   npm run dev ou yarn dev
   ````
### Estrutura do Projeto

- Contexto: A aplicação utiliza Context API para gerenciar o estado global e evitar chamadas desnecessárias.
- Organização das Pastas: As pastas estão organizadas para separar componentes, páginas e serviços. A página de serviço faz a chamada ao serviço e os dados são utilizados nos componentes.

### Estilização
- BulmaCSS: Utilizado para estilização básica e layout.
- Styled Components: Organiza o código CSS em componentes.
- MUI: Fornece componentes prontos como Slider para uma UI consistente e moderna.
