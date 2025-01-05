import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

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

  @Post()
  create(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return {
      id,
      ...body,
    };
  }
}
