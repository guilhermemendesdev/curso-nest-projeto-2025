import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConceitosManualModule } from './conceitos-manual/conceitos-manual.module';
import { ConceitosAutomaticoModule } from './conceitos-automatico/conceitos-automatico.module';
import { RecadosModule } from './recados/recados.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoasModule } from './pessoas/pessoas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      autoLoadEntities: true, // Carrega entidades sem precisar especificá-las
      synchronize: true, // Sincroniza com o DB. Não deve ser usado em produção
    }),
    ConceitosManualModule,
    ConceitosAutomaticoModule,
    RecadosModule,
    PessoasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
