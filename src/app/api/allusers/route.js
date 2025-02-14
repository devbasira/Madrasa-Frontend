import { NextResponse } from "next/server";
const { Pool } = require('pg');


const pool = new Pool({
    connectionString: 'postgresql://neondb_owner:npg_o5da2kPxicFT@ep-empty-frost-a8sqrwsj-pooler.eastus2.azure.neon.tech/neondb?sslmode=require',
    ssl: {
      rejectUnauthorized: false,
    },
  });

export async function GET(req) {
    

    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM users');
        client.release();
        // res.status(200).json(result.rows);
        return NextResponse.json(result.rows)
      } catch (err) {
        return NextResponse.json({err:'error'})
      }
}