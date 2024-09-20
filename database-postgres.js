import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listMakes() {
    const makes = await sql`select * from makes`;
    return makes;
  }

  async createMakes(makes) {
    const id = randomUUID();
    console.log('id', id);
    const tipo = makes.tipo;
    const cor = makes.cor;
    const marca = makes.marca;
    
    await sql`insert into makes (id, tipo, cor, marca)
    values (${id}, ${tipo}, ${cor}, ${marca})`
  }

  async updateMakes(id, makes) {
    const tipo = makes.tipo;
    const cor = makes.cor;
    const marca = makes.marca;

    await sql`update makes set 
        tipo = ${tipo},
        cor = ${cor},
        marca = ${marca}
        where id = ${id}
    `;
  }

  async deleteMakes(id) {
    await sql`delete from makes where id = ${id}`
  }
}
