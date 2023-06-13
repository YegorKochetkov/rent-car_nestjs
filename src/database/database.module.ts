import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'password',
      database: process.env.POSTGRES_DATABASE || 'postgres',
      entities: ['dist/**/entities/*{.ts,.js}'],
      migrations: ['src/migrations/*{.ts,.js}'],
      synchronize: process.env.NODE_ENV === 'local' || false,
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {
  constructor(dataSource: DataSource) {
    if (dataSource.isInitialized) {
      console.log('Data Source has been initialized!');
    } else {
      console.error('Error during Data Source initialization');
    }
  }
}
