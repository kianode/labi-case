import { DataSource } from 'typeorm';
import 'dotenv/config';
import { CaseType } from '../entities/case-type.entity'; // ✅ Direktimport av entiteter

export default new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT || '5432', 10),
  username: process.env.DATABASE_USER || 'your_user',
  password: process.env.DATABASE_PASSWORD || 'your_password',
  database: process.env.DATABASE_NAME || 'labi_case_db',
  entities: [CaseType], // ✅ Direktimport istället för sträng-sökväg
  migrations: ['dist/migrations/*.js'], // ✅ Anpassat för production build
  synchronize: false,
  logging: process.env.NODE_ENV === 'development',
});
