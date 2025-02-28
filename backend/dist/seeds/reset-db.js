"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const typeorm_cli_config_1 = require("../config/typeorm-cli.config");
const resetDatabase = async () => {
    console.log('🚀 Resetting database...');
    await typeorm_cli_config_1.default.initialize();
    await typeorm_cli_config_1.default.dropDatabase();
    await typeorm_cli_config_1.default.synchronize();
    await typeorm_cli_config_1.default.runMigrations();
    await typeorm_cli_config_1.default.destroy();
    console.log('✅ Database reset complete!');
};
resetDatabase().catch((error) => {
    console.error('❌ Failed to reset database:', error);
});
//# sourceMappingURL=reset-db.js.map