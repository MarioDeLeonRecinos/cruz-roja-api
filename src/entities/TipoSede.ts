import { IsNotEmpty, IsString, Length } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Sede } from './Sede';

@Entity({ name: 'tipo_sede' })
export class TipoSede {
  @PrimaryGeneratedColumn({ name: 'id_tipo_sede', type: 'int', unsigned: true })
  id: number;

  @Column({ name: 'tipo', type: 'varchar', length: '20' })
  @IsNotEmpty()
  @IsString()
  @Length(0, 20)
  nombreTipoSede: string;

  @OneToMany(
    (type) => Sede,
    (sede) => sede.tipoSede
  )
  sedes: Sede[];
}
