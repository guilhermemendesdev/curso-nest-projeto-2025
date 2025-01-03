import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosAutomaticoService {
  handle(): string {
    return 'Conceitos Automatico Service concluída.';
  }
}
