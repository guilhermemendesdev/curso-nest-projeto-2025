import { NestMiddleware } from '@nestjs/common';

export class OutroMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: Error | any) => void) {
    const authorization = req.headers?.authorization;

    if (authorization) {
      req['user'] = {
        nome: 'Guilherme',
        sobrenome: 'Mendes',
      };
    }

    res.setHeader('CABECALHO', 'Do Middleware');

    // Terminando a cadeia de chamadas
    // return res.status(404).send({
    //   message: 'Não encontrado',
    // });
    next();
  }
}
