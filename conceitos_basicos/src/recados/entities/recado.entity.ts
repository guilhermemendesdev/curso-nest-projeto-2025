import { Pessoa } from 'src/pessoas/entities/pessoa.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('recados')
export class Recado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  texto: string;

  // Muitos recados podem ser enviados por uma única pessoa (emissor)
  @ManyToOne(() => Pessoa)
  // Especifica a coluna "de" que armazena o ID da pessoa que enviou o recado
  @JoinColumn({ name: 'de' })
  de: Pessoa;

  @ManyToOne(() => Pessoa)
  @JoinColumn({ name: 'para' })
  para: Pessoa;

  @Column({ default: false })
  lido: boolean;

  @Column()
  data: Date;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
