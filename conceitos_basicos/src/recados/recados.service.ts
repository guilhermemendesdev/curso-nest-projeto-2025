import { Injectable, NotFoundException } from '@nestjs/common';
import { Recado } from './entities/recado.entity';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PessoasService } from 'src/pessoas/pessoas.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { RecadosUtils } from './recados.utils';

@Injectable()
export class RecadosService {
  constructor(
    @InjectRepository(Recado)
    private readonly recadoRepository: Repository<Recado>,
    private readonly pessoasRepository: PessoasService,
    private readonly recadosUtils: RecadosUtils,
  ) {}

  async findAll(paginationDto: PaginationDto) {
    console.log(this.recadosUtils.inverteString('Guilherme'));

    const { limit, offset } = paginationDto;

    const recados = await this.recadoRepository.find({
      take: limit,
      skip: offset,
      relations: ['de', 'para'],
      order: { id: 'desc' },
      select: {
        de: { id: true, nome: true },
        para: { id: true, nome: true },
      },
    });
    return recados;
  }

  async findOne(id: number) {
    const recado = await this.recadoRepository.findOne({
      where: {
        id,
      },
      relations: ['de', 'para'],
      select: {
        de: { id: true, nome: true },
        para: { id: true, nome: true },
      },
    });

    if (!recado)
      // throw new HttpException('Recado não encontado', HttpStatus.NOT_FOUND);
      throw new NotFoundException('Recado não encontrado');
    return recado;
  }

  async create(createRecadoDto: CreateRecadoDto) {
    const { deId, paraId, texto } = createRecadoDto;

    const de = await this.pessoasRepository.findOne(deId);
    const para = await this.pessoasRepository.findOne(paraId);

    const novoRecado = {
      texto,
      de,
      para,
      lido: false,
      data: new Date(),
    };

    const recado = this.recadoRepository.create(novoRecado);
    await this.recadoRepository.save(recado);
    return {
      ...recado,
      de: { id: recado.de.id },
      para: { id: recado.para.id },
    };
  }

  async update(id: number, updateRecadoDto: UpdateRecadoDto) {
    const recado = await this.findOne(id);

    recado.texto = updateRecadoDto?.texto ?? recado.texto;
    recado.lido = updateRecadoDto?.lido ?? recado.lido;

    await this.recadoRepository.save(recado);
    return recado;
  }

  async remove(id: number) {
    const recado = await this.recadoRepository.findOne({
      where: {
        id,
      },
    });

    if (!recado) throw new NotFoundException('Recado não encontrado');

    return await this.recadoRepository.remove(recado);
  }
}
