import pg from 'pg';

const { Pool } = pg;

// Ajuste as credenciais conforme a sua instalação local do PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'maria',
    password: 'amods',
    port: 7777,
});

export default pool;
