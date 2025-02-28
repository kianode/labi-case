// backend/src/config/database.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';

const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres', // ✅ Måste vara definierat
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT || '5432', 10),
  username: process.env.DATABASE_USER || 'your_user',
  password: process.env.DATABASE_PASSWORD || 'your_password',
  database: process.env.DATABASE_NAME || 'labi_case_db',
  entities: [__dirname + '/../entities/*.entity.{ts,js}'],
  migrations: [__dirname + '/../migrations/*.{ts,js}'],
  synchronize: false,
  autoLoadEntities: true,
};

export default databaseConfig;
