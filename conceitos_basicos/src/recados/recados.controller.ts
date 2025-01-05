import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  @Get()
  findAll(@Query() pagination: any) {
    const { limit = 10, offset = 10 } = pagination;
    return `Retorna todos os recados. Limit=${limit} e offset=${offset}`;
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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Essa rota APAGA o registro com o ID ${id}`;
  }
}
