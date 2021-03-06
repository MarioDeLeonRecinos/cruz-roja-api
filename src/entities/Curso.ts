import { IsNotEmpty, IsString, Length } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CursoXVoluntario } from './CursoXVoluntario';

@Entity({ name: 'curso' })
export class Curso {
  @PrimaryGeneratedColumn({ name: 'id_curso', type: 'int', unsigned: true })
  id: number;

  @Column({ name: 'curso_name', type: 'varchar', length: '30' })
  @IsNotEmpty()
  @IsString()
  @Length(0, 30)
  cursoName: string;

  @OneToMany(
    (type) => CursoXVoluntario,
    (cursoXVoluntario) => cursoXVoluntario.curso
  )
  cursosXVoluntarios: CursoXVoluntario[];
}
