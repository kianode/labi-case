// backend/src/data-source.ts
import 'dotenv/config';
import { DataSource } from 'typeorm';
import { CaseType } from './entities/case-type.entity'; // Kontrollera att denna sökväg är korrekt

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT || '5432', 10),
  username: process.env.DATABASE_USER || 'your_user',
  password: process.env.DATABASE_PASSWORD || 'your_password',
  database: process.env.DATABASE_NAME || 'labi_case_db',
  entities: ['src/entities/*.ts'], // ✅ Se till att TypeORM hittar rätt entiteter
  migrations: ['src/migrations/*.ts'], // ✅ Sökvägen till migrationer
  synchronize: false, // Använd migrations istället
  logging: true,
});
