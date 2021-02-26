const { getDate } = require('./container');

const routes = async (fastify, options) => {
  fastify.get('/date', (request, reply) => {
    reply.send(getDate());
  });
};

module.exports = routes;
