import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { RecadosService } from './recados.service';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { AddHeaderInterceptor } from 'src/common/interceptors/add-header.interceptor';
import { TimingConnectionInterceptor } from 'src/common/interceptors/timing-connection.interceptor';
import { ErrorHandlingInterceptor } from 'src/common/interceptors/error-handling.interceptor';
import { AuthTokenInterceptor } from 'src/common/interceptors/auth-token.interceptor';
import { IsAdminGuard } from 'src/common/guards/is-admin.guard';
import { ReqDataParam } from 'src/common/params/req-data-param.decorator';

@Controller('recados')
@UseInterceptors(AuthTokenInterceptor, ErrorHandlingInterceptor)
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  @Get()
  @UseInterceptors(AddHeaderInterceptor)
  findAll(
    @Query() paginationDto: PaginationDto,
    @ReqDataParam('headers') reqPersonalizada,
  ) {
    console.log('reqPersonalizada', reqPersonalizada);
    return this.recadosService.findAll(paginationDto);
  }

  @UseGuards(IsAdminGuard)
  @Get(':id')
  @UseInterceptors(TimingConnectionInterceptor)
  findOne(@Param('id') id: number) {
    return this.recadosService.findOne(id);
  }

  @Post()
  create(@Body() createRecadoDto: CreateRecadoDto) {
    return this.recadosService.create(createRecadoDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateRecadoDto: UpdateRecadoDto) {
    return this.recadosService.update(id, updateRecadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.recadosService.remove(id);
  }
}
