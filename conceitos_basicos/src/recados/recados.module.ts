import { forwardRef, Module } from '@nestjs/common';
import { RecadosController } from './recados.controller';
import { RecadosService } from './recados.service';
import { Recado } from './entities/recado.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoasModule } from 'src/pessoas/pessoas.module';
import { RecadosUtils } from './recados.utils';
import { RegexFactory } from 'src/common/regex/regex.factory';
import {
  ONLY_LOWERCASE_LETTERS_REGEX,
  REMOVE_SPACES_REGEX,
} from './recados.constants';

@Module({
  imports: [
    TypeOrmModule.forFeature([Recado]),
    forwardRef(() => PessoasModule),
    // MyDynamicModule.register({
    //   apiKey: 'Aqui vem a API KEY',
    //   apiUrl: 'http://blablabla.bla',
    // }),
  ],
  controllers: [RecadosController],
  providers: [
    RecadosService,
    RecadosUtils,
    RegexFactory,
    {
      provide: REMOVE_SPACES_REGEX,
      useFactory: (RegexFactory: RegexFactory) => {
        // Meu código/Lógica
        return RegexFactory.create('RemoveSpacesRegex');
      }, // Factory
      inject: [RegexFactory], //Injetando na factory na ordem
    },
    {
      provide: ONLY_LOWERCASE_LETTERS_REGEX,
      useFactory: (RegexFactory: RegexFactory) => {
        // Meu código/Lógica
        return RegexFactory.create('OnlyLowercaseLettersRegex');
      }, // Factory
      inject: [RegexFactory], //Injetando na factory na ordem
    },
  ],
  exports: [RecadosUtils],
})
export class RecadosModule {}
