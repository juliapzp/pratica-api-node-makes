import { sql } from './db.js'

sql`
  CREATE TABLE makes (
      id text PRIMARY KEY,
      tipo character varying(255),
      cor character varying(255),
      marca character varying(255)
  );
`.then(() => {
  console.log('tabela criada');
})