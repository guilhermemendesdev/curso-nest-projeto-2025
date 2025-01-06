import { Injectable } from '@nestjs/common';

@Injectable()
export class RecadosService {
  getAll(limit: string, offset: string) {
    return `Retorna todos os recados. Limit: ${limit} e Offset: ${offset}`;
  }
}
