"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
require("dotenv/config");
const case_type_entity_1 = require("../entities/case-type.entity");
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT || '5432', 10),
    username: process.env.DATABASE_USER || 'your_user',
    password: process.env.DATABASE_PASSWORD || 'your_password',
    database: process.env.DATABASE_NAME || 'labi_case_db',
    entities: [case_type_entity_1.CaseType],
    migrations: ['dist/migrations/*.js'],
    synchronize: false,
    logging: process.env.NODE_ENV === 'development',
});
//# sourceMappingURL=typeorm-cli.config.js.map