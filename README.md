# Projeto CS:GO Skins

## Backend

### Tecnologias Usadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Prisma**: ORM para interagir com o banco de dados.
- **Fastify**: Framework web para Node.js, rápido e eficiente.

### Requisitos

1. **Node.js**: Versão 20+.
2. **Yarn**: Gerenciador de pacotes.
3. **pnpm**: Gerenciador de pacotes.

### Instalação

1. Navegue até a pasta `backend`:
   ```bash
   cd backend
Instale as dependências usando Yarn:
bash
Copiar código
yarn
Ou, se preferir npm:
bash
Copiar código
npm install
Rotas
GET /skins

Descrição: Obtém todos os itens disponíveis.
GET /skin

Descrição: Obtém itens filtrados com base em parâmetros de consulta.
Parâmetros:
price: Preço do item.
name: Nome do item.
category: Categoria do item (ex: sniper, assalt).
float: Nível de desgaste do item (0 a 1).
POST /skin

Descrição: Adiciona um novo item ao banco de dados.
Corpo da Requisição:
json
Copiar código
{
    "name": "AK-47 | Case Hardened (blue gem)",
    "image": "https://www.csgodatabase.com/images/skins/webp/AK-47_Case_Hardened.webp",
    "category": "assalt",
    "float": "0.1502939213",
    "rarity": "Classified",
    "price": 738.1,
    "pattern": 661
}
Campos:
name: Nome do item (string).
image: URL da imagem do item (preferencialmente no formato webp).
category: Categoria do item (ex: assalt, sniper).
float: Nível de desgaste do item (string, de 0 a 1).
rarity: Raridade do item.
price: Valor do item (número).
pattern: Padrão do item (número), relevante para skins com múltiplos padrões.
Frontend
Tecnologias Usadas
Next.js: Framework React para renderização do lado do servidor e geração de sites estáticos.
BulmaCSS: Framework CSS para estilização.
Styled Components: Biblioteca para estilização em componentes React.
Material-UI (MUI): Biblioteca de componentes React, usada para componentes como Slider.
Instalação
Navegue até a pasta do frontend (fora da pasta backend):
bash
Copiar código
cd frontend
Instale as dependências:
bash
Copiar código
npm install
Estrutura do Projeto
Contexto: A aplicação utiliza Context API para gerenciar o estado global e evitar chamadas desnecessárias.
Organização das Pastas: As pastas estão organizadas para separar componentes, páginas e serviços. A página de serviço faz a chamada ao serviço e os dados são utilizados nos componentes.
Estilização
BulmaCSS: Utilizado para estilização básica e layout.
Styled Components: Organiza o código CSS em componentes.
MUI: Fornece componentes prontos como Slider para uma UI consistente e moderna.
