import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'password',
      database: process.env.DB_NAME || 'postgres',
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
