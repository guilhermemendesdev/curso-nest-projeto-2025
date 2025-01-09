import { Injectable, NotFoundException } from '@nestjs/common';
import { Recado } from './entities/recado.entity';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RecadosService {
  constructor(
    @InjectRepository(Recado)
    private readonly recadoRepository: Repository<Recado>,
  ) {}

  private lastID = 1;
  private recados: Recado[] = [
    {
      id: 1,
      texto: 'Este é um recado teste',
      de: 'João',
      para: 'Maria',
      lido: false,
      data: new Date(),
    },
  ];

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

  update(id: number, updateRecadoDto: UpdateRecadoDto) {
    const recadoExisteIndex = this.recados.findIndex(item => item.id === id);

    if (recadoExisteIndex < 0)
      throw new NotFoundException('Recado não encontrado');

    const recadoExiste = this.recados[recadoExisteIndex];

    this.recados[recadoExisteIndex] = {
      ...recadoExiste,
      ...updateRecadoDto,
    };
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
