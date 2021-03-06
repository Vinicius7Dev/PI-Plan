import {
  Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import Admin from '../../../users/typeorm/entities/Admin';

// Representação da entidade tarefa no banco de dados
@Entity('todo')
class ToDo {
  @PrimaryColumn('uuid')
  id: string;

  @Column('uuid')
  admin_id: string;

  @ManyToOne(() => Admin)
  @JoinColumn({ name: 'admin_id' })
  admin: Admin;

  @Column('boolean')
  done: boolean;

  @Column()
  title: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      // Gerando o ID automáticamente se o objeto
      // instanciando ainda não estiver salvo no banco
      this.id = uuidv4();
    }
  }
}

export default ToDo;
