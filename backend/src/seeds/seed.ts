import 'dotenv/config';
import dataSource from '../config/typeorm-cli.config';
import { CaseTypeSeeder } from './case-type.seed';
import { CaseType } from '../entities/case-type.entity';

const seedDatabase = async () => {
  console.log('🌱 Running database seeders...');

  await dataSource.initialize(); // ✅ Initiera TypeORM korrekt

  const caseTypeRepository = dataSource.getRepository(CaseType); // ✅ Hämta repository på rätt sätt
  const caseTypeSeeder = new CaseTypeSeeder(caseTypeRepository); // ✅ Instansiera `CaseTypeSeeder`
  
  await caseTypeSeeder.seed(); // ✅ Kör seed-metoden
  await dataSource.destroy(); // ✅ Stäng anslutningen efteråt

  console.log('✅ Database seeding complete!');
};

seedDatabase().catch((error) => {
  console.error('❌ Failed to seed database:', error);
});
