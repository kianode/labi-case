import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// Importera dina moduler, controllers och services
// import { YourModule } from './your-module/your.module';

@Module({
  imports: [
    // Ladda .env-fil och gör variablerna globala
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env', // Standard är detta, men kan ändras om du har olika miljöer
    }),
    // Konfigurera TypeORM med dina Postgres-uppgifter
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT || '5432', 10),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // OBS: Endast för utveckling! Använd migrations i produktion.
    }),
    // Lägg till andra moduler här, t.ex.
    // YourModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
