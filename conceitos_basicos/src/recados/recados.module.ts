import { forwardRef, Module } from '@nestjs/common';
import { RecadosController } from './recados.controller';
import { RecadosService } from './recados.service';
import { Recado } from './entities/recado.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoasModule } from 'src/pessoas/pessoas.module';
import { RecadosUtils, RecadosUtilsMock } from './recados.utils';

@Module({
  imports: [
    TypeOrmModule.forFeature([Recado]),
    forwardRef(() => PessoasModule),
  ],
  controllers: [RecadosController],
  providers: [
    RecadosService,
    {
      provide: RecadosUtils, // Token
      useValue: new RecadosUtilsMock(),
      // useClass: RecadosUtils
    },
  ],
  exports: [
    {
      provide: RecadosUtils,
      useClass: RecadosUtils,
    },
  ],
})
export class RecadosModule {}
