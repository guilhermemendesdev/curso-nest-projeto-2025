import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConceitosManualModule } from './conceitos-manual/conceitos-manual.module';
import { ConceitosAutomaticoModule } from './conceitos-automatico/conceitos-automatico.module';
import { RecadosModule } from './recados/recados.module';

@Module({
  imports: [ConceitosManualModule, ConceitosAutomaticoModule, RecadosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
