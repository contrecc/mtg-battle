const development = process.env.NODE_ENV === 'development';

const server = development ? 'http://localhost:3000' : 'https://cccmtgbattle.herokuapp.com';

module.exports =  server;