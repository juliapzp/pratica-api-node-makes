import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabasePostgres;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
// 
server.post('/makes', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createMakes(body);
    return reply.status(201).send();
})

// READ
server.get('/makes', async () => {
    const makes = await databasePostgres.listMakes();
    return makes;
});

// UPDATE
server.put('/makes/:id', async (request, reply) => {
    const makesID = request.params.id;
    const body = request.body;
    await databasePostgres.updateMakes(makesID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/makes/:id', async (request, reply) => {
    const makesID = request.params.id;
    await databasePostgres.deleteMakes(makesID);

    return reply.status(204).send();
})

server.listen({
    port: 3333
});
