"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const platform_fastify_1 = require("@nestjs/platform-fastify");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
    await app.listen(3000, '0.0.0.0');
}
bootstrap().catch((error) => {
    console.error('Error during bootstrap', error);
    process.exit(1);
});
//# sourceMappingURL=main.js.map