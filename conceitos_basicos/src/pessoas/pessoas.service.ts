import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pessoa } from './entities/pessoa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PessoasService {
  constructor(
    @InjectRepository(Pessoa)
    private readonly pessoaRepository: Repository<Pessoa>,
  ) {}

  async create(createPessoaDto: CreatePessoaDto) {
    try {
      const dadosPessoa = {
        email: createPessoaDto.email,
        nome: createPessoaDto.nome,
        passwordHash: createPessoaDto.password,
      };

      const novaPessoa = this.pessoaRepository.create(dadosPessoa);
      await this.pessoaRepository.save(novaPessoa);
      return novaPessoa;
    } catch (err) {
      if (err.code === '23505')
        throw new ConflictException('E-mail já está cadastrado.');

      throw err;
    }
  }

  async findAll() {
    const pessoas = await this.pessoaRepository.find({
      order: {
        createdAt: 'desc',
      },
    });

    return pessoas;
  }

  async findOne(id: number) {
    const pessoa = await this.pessoaRepository.findOne({
      where: {
        id,
      },
    });

    if (!pessoa) throw new NotFoundException('Pessoa não existe');

    return pessoa;
  }

  async update(id: number, updatePessoaDto: UpdatePessoaDto) {
    const dadosPessoa = {
      nome: updatePessoaDto?.nome,
      passwordHash: updatePessoaDto?.password,
    };

    const pessoa = await this.pessoaRepository.preload({
      id,
      ...dadosPessoa,
    });

    if (!pessoa) throw new NotFoundException('Pessoa não encontrada');

    return this.pessoaRepository.save(pessoa);
  }

  async remove(id: number) {
    const pessoa = await this.pessoaRepository.findOne({
      where: {
        id,
      },
    });

    if (!pessoa) throw new NotFoundException('Pessoa não encotraada');

    return this.pessoaRepository.remove(pessoa);
  }
}
