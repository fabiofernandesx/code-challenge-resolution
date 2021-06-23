import { MigrationInterface, QueryRunner } from 'typeorm';

export class initialData1624285785816 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "INSERT INTO availability (Id, MedicalCentre, AvailableDate) VALUES(0, 'MedicalCentreAlpha', '10/25/2021');"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
