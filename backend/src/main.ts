import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CaseTypeSeeder } from './seeds/case-type.seed';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  // Skapa applikationen med Fastify-adaptern
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  // Kör seed-fil för testdata
  const seeder = app.get(CaseTypeSeeder);
  await seeder.seed();

  // Starta servern (justera port och host efter behov)
  await app.listen(3000, '0.0.0.0');
}

bootstrap().catch((error) => {
  console.error('Error during bootstrap', error);
  process.exit(1);
});
