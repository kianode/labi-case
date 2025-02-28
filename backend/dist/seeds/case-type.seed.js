"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseTypeSeeder = void 0;
class CaseTypeSeeder {
    caseTypeRepository;
    constructor(caseTypeRepository) {
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
        await this.caseTypeRepository.save(testData);
        console.log('✅ Seedning av case_types klar!');
    }
}
exports.CaseTypeSeeder = CaseTypeSeeder;
//# sourceMappingURL=case-type.seed.js.map