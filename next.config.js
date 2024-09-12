// next.config.js

module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home',
          permanent: false, // ou `true` se for um redirecionamento permanente
        },
      ];
    },
  };
  