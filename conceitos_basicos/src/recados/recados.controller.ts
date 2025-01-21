import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
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
import { RecadosUtils } from './recados.utils';
import { RemoveSpacesRegex } from 'src/common/regex/remove-spaces.regex';
import { OnlyLowerCaseLettersRegex } from 'src/common/regex/only-lowercase-letters.regex';
import {
  ONLY_LOWERCASE_LETTERS_REGEX,
  REMOVE_SPACES_REGEX,
} from './recados.constants';

@Controller('recados')
@UseInterceptors(AuthTokenInterceptor, ErrorHandlingInterceptor)
export class RecadosController {
  constructor(
    private readonly recadosService: RecadosService,
    private readonly recadosUtils: RecadosUtils,
    @Inject(REMOVE_SPACES_REGEX)
    private readonly removeSpacesRegex: RemoveSpacesRegex,
    @Inject(ONLY_LOWERCASE_LETTERS_REGEX)
    private readonly onlyLowercaseLettersRegex: OnlyLowerCaseLettersRegex,
  ) {}

  @Get()
  @UseInterceptors(AddHeaderInterceptor)
  findAll(@Query() paginationDto: PaginationDto) {
    console.log(this.removeSpacesRegex.execute('REMOVE OS ESPACOS'));
    console.log(
      this.onlyLowercaseLettersRegex.execute(
        'REMOVE OS ESPACOS letra minúscula',
      ),
    );
    return this.recadosService.findAll(paginationDto);
  }

  @UseGuards(IsAdminGuard)
  @Get(':id')
  @UseInterceptors(TimingConnectionInterceptor)
  findOne(@Param('id') id: number) {
    console.log(this.recadosUtils.inverteString('Guilherme'));
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
