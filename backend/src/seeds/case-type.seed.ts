import { Repository } from 'typeorm';
import { CaseType } from '../entities/case-type.entity';

export class CaseTypeSeeder {
  private readonly caseTypeRepository: Repository<CaseType>;

  constructor(caseTypeRepository: Repository<CaseType>) {
    this.caseTypeRepository = caseTypeRepository;
  }

  async seed() {
    const existing = await this.caseTypeRepository.count();
    if (existing > 0) {
      console.log('✅ Testdata finns redan. Ingen seed behövs.');
      return;
    }

    const testData = [
      { name: 'A', description: 'Beskrivning av ärendetyp A' },
      { name: 'B', description: 'Beskrivning av ärendetyp B' },
      { name: 'C', description: 'Beskrivning av ärendetyp C' },
    ];

    await this.caseTypeRepository.save(testData); // ✅ `save()` istället för `insert()`
    console.log('✅ Seedning av case_types klar!');
  }
}
