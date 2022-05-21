import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  import { User } from 'src/users/entities/user.entity';

@Entity()
export class task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    descrition: string;

    @Column()
    done: boolean;

    @ManyToOne(type => User)
    @JoinColumn({ name: "user_id" })
    user: User;


}

