import { Injectable, NotFoundException } from '@nestjs/common';
import { Recado } from './entities/recado.entity';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PessoasService } from 'src/pessoas/pessoas.service';

@Injectable()
export class RecadosService {
  constructor(
    @InjectRepository(Recado)
    private readonly recadoRepository: Repository<Recado>,
    private readonly pessoasRepository: PessoasService,
  ) {}

  async findAll() {
    const recados = await this.recadoRepository.find();
    return recados;
  }

  async findOne(id: number) {
    const recado = await this.recadoRepository.findOne({
      where: {
        id,
      },
    });

    if (!recado)
      // throw new HttpException('Recado não encontado', HttpStatus.NOT_FOUND);
      throw new NotFoundException('Recado não encontrado');
    return recado;
  }

  async create(createRecadoDto: CreateRecadoDto) {
    const novoRecado = {
      ...createRecadoDto,
      lido: false,
      data: new Date(),
    };
    const recado = this.recadoRepository.create(novoRecado);
    return await this.recadoRepository.save(recado);
  }

  async update(id: number, updateRecadoDto: UpdateRecadoDto) {
    const updatePartialRecadoDto = {
      lido: updateRecadoDto?.lido,
      texto: updateRecadoDto?.texto,
    };
    const recado = await this.recadoRepository.preload({
      id,
      ...updatePartialRecadoDto,
    });

    if (!recado) throw new NotFoundException('Recado não encontrado');

    return await this.recadoRepository.save(recado);
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
