# Spotify Playlist Manager

Este projeto é uma aplicação frontend desenvolvida com React que utiliza a API do Spotify para gerenciar playlists. Com esta aplicação, o usuário pode visualizar suas playlists, realizar buscas de músicas para adicionar em suas playlists, criar novas playlists, editar detalhes de playlists existentes e remover follows de playlists seguidas.

## Tecnologias Utilizadas

- **React**: Biblioteca principal para construção da interface do usuário.
- **Vite**: Ferramenta utilizada para configurar o ambiente de desenvolvimento e otimizar a aplicação.
- **React Material UI**: Biblioteca de componentes estilizados para React, com suporte à customização através da propriedade `sx`.
- **React Infinite Scroll Component**: Biblioteca utilizada para implementar o infinite scroll para o carregamento dinâmico de playlists.
- **React Router DOM**: Biblioteca para gerenciamento de rotas e navegação entre páginas da aplicação.

## Funcionalidades

- **Autenticação com o Spotify**: O usuário precisa autorizar a aplicação a acessar seus dados e playlists.
- **Visualização de Playlists**: Mostra as playlists do usuário (as que ele segue e as que ele criou) com suporte a infinite scroll.
- **Editar Playlists**: Permite editar detalhes das playlists criadas pelo usuário, como nome e descrição.
- **Remover Follow de Playlists**: Opção de deixar de seguir playlists.
- **Criar Nova Playlist**: Página dedicada para criar uma nova playlist, permitindo a adição de músicas baseadas em pesquisas.
- **Pesquisar Músicas**: A API retorna músicas relacionadas à query de pesquisa, e o usuário pode adicioná-las à playlist.
- **Redirecionamento para o Spotify**: Após criar uma playlist, o usuário é redirecionado para o Spotify para escutar a playlist.

## Aprendizados e Práticas

Durante o desenvolvimento deste projeto, foram praticados e reforçados conceitos importantes como:

- **HTTP Methods**: GET, POST, PUT e DELETE com a API do Spotify.
- **React Hooks**: Uso intensivo de `useState`, `useEffect` e `useContext`.
- **Navegação entre Páginas**: Implementação de rotas e navegação com `react-router-dom`.
- **Infinite Scroll**: Carregamento dinâmico de playlists conforme o usuário rola a página.

## API Endpoints usados

- **GET** perfil do usuário: https://api.spotify.com/v1/me
- **GET** playlists do usuário: https://api.spotify.com/v1/me/playlists
- **GET** buscar por uma search query: https://api.spotify.com/v1/search
- **POST** criar playlist: https://api.spotify.com/v1/users/{user_id}/playlists
- **POST** adicionar músicas na playlist: https://api.spotify.com/v1/playlists/{playlist_id}/tracks
- **PUT** atualiza detalhes da playlist: https://api.spotify.com/v1/playlists/{playlist_id}
- **DELETE** unfollow uma playlist: https://api.spotify.com/v1/playlists/{playlist_id}/followers

**Documentação da API do Spotify**: https://developer.spotify.com/documentation/web-api

## Estrutura do Projeto

```
.
├── public
├── src
│   ├── assets
│   ├── components
│   ├── context
│   ├── controllers
│   ├── pages
│   ├── services
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── README.md
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Instalação e Execução

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/maduMelo/spotify-app.git
   cd spotify-app
   ```

2. **Instale as Dependências**:
   ```bash
   npm install
   ```

3. **Configure as Variáveis de Ambiente**:
   Crie um arquivo `.env` na raiz do projeto e configure suas credenciais da API do Spotify:
   ```env
   VITE_CLIENT_ID=<SEU_CLIENT_ID>
   VITE_CLIENT_SECRET=<SEU_CLIENT_SECRET>
   VITE_REDIRECT_URI=<SEU_REDIRECT_URI>
   ```

4. **Execute a Aplicação**:
   ```bash
   npm run dev
   ```

5. **Abra no Navegador**:
   Acesse a aplicação em `http://localhost:5173`.

