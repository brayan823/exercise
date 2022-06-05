import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { CoffeeController } from './coffee/coffee.controller';
import { Coffee } from './coffee/entities/coffee.entity';
import { CoffeeModule } from './coffee/coffe.module';
import { CoffeeService } from './coffee/coffee.service';
import { TeaModule } from './tea/tea.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'mvst-coffee-tea-challenge-db',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: false,
    }),
    CoffeeModule,
    TeaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
