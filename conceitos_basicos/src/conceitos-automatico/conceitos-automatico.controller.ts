import { Controller, Get } from '@nestjs/common';

@Controller('conceitos-automatico')
export class ConceitosAutomaticoController {
  @Get()
  handle(): string {
    return 'conceitos-automatico';
  }
}
