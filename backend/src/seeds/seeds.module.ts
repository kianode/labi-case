// backend/src/seeds/seeds.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaseType } from '../entities/case-type.entity';
import { CaseTypeSeeder } from './case-type.seed';

@Module({
  imports: [TypeOrmModule.forFeature([CaseType])], // ✅ Importerar repository
  providers: [CaseTypeSeeder], // ✅ Registrerar seedern som en provider
  exports: [CaseTypeSeeder], // ✅ Gör seedern tillgänglig i AppModule
})
export class SeedsModule {}
