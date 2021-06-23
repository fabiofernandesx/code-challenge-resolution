import AvailabilitySchema from '../../Infrastructure/DbSchemas/AvailabilitySchema';
import { ScheduleRepository } from '../../Interfaces/ScheduleRepository';
import { Availability } from '../../Models/Availability';
import { EntityRepository, MoreThanOrEqual, Repository } from 'typeorm';

@EntityRepository(AvailabilitySchema)
class TypeOrmScheduleRepository extends Repository<AvailabilitySchema> implements ScheduleRepository {
  getAvailableDates(fromDate: Date): Promise<Availability[]> {
    return this.find({ AvailableDate: MoreThanOrEqual(fromDate) });
  }
}
export default TypeOrmScheduleRepository;
