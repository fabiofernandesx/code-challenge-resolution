import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('availability')
class AvailabilitySchema extends BaseEntity {
  @PrimaryColumn() Id: number;
  @Column() MedicalCentre: string;
  @Column() AvailableDate: Date;
}

export default AvailabilitySchema;
