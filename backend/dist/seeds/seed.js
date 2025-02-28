"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const typeorm_cli_config_1 = require("../config/typeorm-cli.config");
const case_type_seed_1 = require("./case-type.seed");
const case_type_entity_1 = require("../entities/case-type.entity");
const seedDatabase = async () => {
    console.log('🌱 Running database seeders...');
    await typeorm_cli_config_1.default.initialize();
    const caseTypeRepository = typeorm_cli_config_1.default.getRepository(case_type_entity_1.CaseType);
    const caseTypeSeeder = new case_type_seed_1.CaseTypeSeeder(caseTypeRepository);
    await caseTypeSeeder.seed();
    await typeorm_cli_config_1.default.destroy();
    console.log('✅ Database seeding complete!');
};
seedDatabase().catch((error) => {
    console.error('❌ Failed to seed database:', error);
});
//# sourceMappingURL=seed.js.map