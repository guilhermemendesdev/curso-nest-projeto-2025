import { Injectable, NotFoundException } from '@nestjs/common';
import { Recado } from './entities/recado.entity';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';

@Injectable()
export class RecadosService {
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

  findAll() {
    return this.recados;
  }

  findOne(id: string) {
    const recado = this.recados.find(item => item.id === +id);

    if (!recado)
      // throw new HttpException('Recado não encontado', HttpStatus.NOT_FOUND);
      throw new NotFoundException('Recado não encontrado');
    return recado;
  }

  create(createRecadoDto: CreateRecadoDto) {
    this.lastID++;
    const id = this.lastID;
    const novoRecado = {
      id,
      ...createRecadoDto,
      lido: false,
      data: new Date(),
    };
    this.recados.push(novoRecado);
    return novoRecado;
  }

  update(id: string, updateRecadoDto: UpdateRecadoDto) {
    const recadoExisteIndex = this.recados.findIndex(item => item.id === +id);

    if (recadoExisteIndex < 0)
      throw new NotFoundException('Recado não encontrado');

    const recadoExiste = this.recados[recadoExisteIndex];

    this.recados[recadoExisteIndex] = {
      ...recadoExiste,
      ...updateRecadoDto,
    };
  }

  remove(id: string) {
    const recadoExisteIndex = this.recados.findIndex(item => item.id === +id);

    if (recadoExisteIndex < 0)
      throw new NotFoundException('Recado não encontrado');

    const recado = this.recados[recadoExisteIndex];

    this.recados.splice(recadoExisteIndex, 1);

    return recado;
  }
}
