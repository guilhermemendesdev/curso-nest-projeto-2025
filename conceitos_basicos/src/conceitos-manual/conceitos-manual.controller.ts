import { Controller, Get } from '@nestjs/common';

@Controller('conceitos-manual')
export class ConceitosManualController {
  @Get()
  handle(): string {
    return 'conceitos-manual';
  }
}
