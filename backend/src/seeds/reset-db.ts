// backend/src/seeds/reset-db.ts
import 'dotenv/config';
import dataSource from '../config/typeorm-cli.config';

const resetDatabase = async () => {
  console.log('🚀 Resetting database...');

  await dataSource.initialize();
  await dataSource.dropDatabase(); // 🧹 Raderar databasen
  await dataSource.synchronize(); // 📌 Skapar tabeller enligt entiteter
  await dataSource.runMigrations(); // 🚀 Kör migrationer
  await dataSource.destroy();

  console.log('✅ Database reset complete!');
};

resetDatabase().catch((error) => {
  console.error('❌ Failed to reset database:', error);
});
