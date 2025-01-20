import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConceitosManualModule } from './conceitos-manual/conceitos-manual.module';
import { ConceitosAutomaticoModule } from './conceitos-automatico/conceitos-automatico.module';
import { RecadosModule } from './recados/recados.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoasModule } from './pessoas/pessoas.module';
import { SimpleMiddleware } from './common/middleware/simple.middleware';
import { OutroMiddleware } from './common/middleware/outro.middleware';
import { APP_FILTER } from '@nestjs/core';
import { ErrorExceptionFilter } from './common/filters/error-exception.filter';
import { LogsModule } from './logs/logs.module';

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
    LogsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: ErrorExceptionFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SimpleMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
    consumer.apply(OutroMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
