import { IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { VehiculoXEmergenciaPaciente } from './VehiculoXEmergenciaPaciente';

@Entity({ name: 'vehiculo' })
export class Vehiculo {
  @PrimaryGeneratedColumn({ name: 'id_vehiculo', type: 'int', unsigned: true })
  id: number;

  @Column({ name: 'vehiculo', type: 'text' })
  @IsNotEmpty()
  @IsString()
  nombreVehiculo: string;

  @Column({ name: 'kilometraje', type: 'text' })
  @IsNotEmpty()
  @IsString()
  kilometraje: string;

  @Column({ name: 'fecha_creacion', type: 'datetime' })
  fechaCreacion: Date;

  @OneToMany(
    (type) => VehiculoXEmergenciaPaciente,
    (vehiculoXEmergenciaPaciente) => vehiculoXEmergenciaPaciente.vehiculo
  )
  vehiculoXEmergenciaPaciente: VehiculoXEmergenciaPaciente[];

}
