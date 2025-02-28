import { Repository } from 'typeorm';
import { CaseType } from '../entities/case-type.entity';
export declare class CaseTypeSeeder {
    private readonly caseTypeRepository;
    constructor(caseTypeRepository: Repository<CaseType>);
    seed(): Promise<void>;
}
