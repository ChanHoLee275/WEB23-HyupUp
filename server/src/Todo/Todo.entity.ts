import Users from '../Users/Users.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'TODO' })
export default class Todo {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id!: number;

  @Column({ name: 'STATUS', type: 'boolean' })
  status!: boolean;

  @ManyToOne(() => Users, (users) => users.id)
  @JoinColumn({ name: 'USER_ID' })
  users!: Users;
}
