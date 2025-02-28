import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './config/database.config';
import { CaseType } from './entities/case-type.entity';
import { SeedsModule } from './seeds/seeds.module';
import { CaseTypeSeeder } from './seeds/case-type.seed';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot(databaseConfig), // ✅ Använd konfigurationen från database.config.ts
    TypeOrmModule.forFeature([CaseType]),
    SeedsModule,
  ],
  providers: [CaseTypeSeeder],
})
export class AppModule {}
