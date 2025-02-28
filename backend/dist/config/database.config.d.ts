import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';
declare const databaseConfig: TypeOrmModuleOptions;
export default databaseConfig;
