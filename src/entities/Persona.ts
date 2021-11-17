import {
  Column,
  Entity,
  Unique,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsNumber, Length, MaxLength } from 'class-validator';

export const UNIQUE_USER_EMAIL_CONSTRAINT = 'unique_user_email_constraint';

@Entity({ name: 'persona' })
@Unique(UNIQUE_USER_EMAIL_CONSTRAINT, ['email'])
export class Persona {
  @PrimaryGeneratedColumn({ name: 'id_persona', type: 'bigint', unsigned: true })
  id: string;

  @Column({ name: 'persona_username', type: 'varchar', length: '30' })
  @Length(3, 30)
  username: string;

  @Column({ name: 'persona_firstName', type: 'varchar', length: '40' })
  @Length(3, 40)
  firstName: string;

  @Column({ name: 'persona_lastName', type: 'varchar', length: '40' })
  @Length(3, 40)
  lastName: string;

  @Column({ name: 'persona_genero', type: 'varchar', length: '1', nullable: false })
  @IsNotEmpty()
  @Length(1, 1)
  genero: string | null;

  @Column({ name: 'persona_edad', type: 'smallint' })
  @IsOptional()
  @IsNumber()
  edad: number;

  @Column({ name: 'person_email', type: 'varchar', length: '60', nullable: true })
  @IsOptional()
  @MaxLength(60)
  @IsEmail()
  email: string | null;

  @Column({ name: 'persona_estado', type: 'boolean', default: true })
  @IsNotEmpty()
  @IsBoolean()
  estado: boolean;
}