import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosManualService {
  handle(): string {
    return 'Conceitos Manual Service concluida.';
  }
}
