import { Injectable, NotFoundException } from '@nestjs/common';
import { Recado } from './entities/recado.entity';

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

  create(body: any) {
    this.lastID++;
    const id = this.lastID;
    const novoRecado = {
      id,
      ...body,
    };
    this.recados.push(novoRecado);
    return novoRecado;
  }

  update(id: string, body: any) {
    const recadoExisteIndex = this.recados.findIndex(item => item.id === +id);

    if (recadoExisteIndex < 0)
      throw new NotFoundException('Recado não encontrado');

    const recadoExiste = this.recados[recadoExisteIndex];

    this.recados[recadoExisteIndex] = {
      ...recadoExiste,
      ...body,
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
