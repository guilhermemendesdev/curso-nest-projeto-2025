import { Controller, Get, Param } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  @Get()
  findAll() {
    return 'Todos os recados';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Apenas UM recado:  ${id}`;
  }
}
