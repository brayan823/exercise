import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TeaService } from './tea.service';
import { TeaController } from './tea.controller';
import { Tea } from './entities/tea.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tea])],
  controllers: [TeaController],
  providers: [TeaService],
})
export class TeaModule {}
