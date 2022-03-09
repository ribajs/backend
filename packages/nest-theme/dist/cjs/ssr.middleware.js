"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SsrMiddleware = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const ssr_service_1 = require("./ssr.service");
const node_ssr_1 = require("@ribajs/node-ssr");
let SsrMiddleware = class SsrMiddleware {
    constructor(config, ssr, cacheManager) {
        this.config = config;
        this.ssr = ssr;
        this.cacheManager = cacheManager;
        this.log = new common_1.Logger(this.constructor.name);
        const theme = config.get('theme');
        if (!theme) {
            throw new Error('Theme config not defined!');
        }
        this.theme = theme;
    }
    async use(req, res, next) {
        if (!req.route) {
            return next('req.route is not set!');
        }
        const routeSettings = this.getRouteSettingsByRoute(req.route.path);
        if (!routeSettings) {
            return next('routeSettings is not set!');
        }
        try {
            const cacheOptions = routeSettings.cache ||
                this.theme.cache || { ttl: 200 };
            const cacheKey = req.url;
            const render = async () => {
                const sharedContext = await this.ssr.getSharedContext(req, this.theme.templateVars);
                this.log.debug(`START: Render page component: ${routeSettings.component} for ${req.url}`);
                const renderResult = await this.ssr.renderComponent({
                    componentTagName: routeSettings.component,
                    sharedContext,
                    output: 'store',
                });
                this.log.debug(`END: Render page component: ${routeSettings.component} for ${req.url}`);
                return renderResult;
            };
            this.cacheManager.get(cacheKey, async (error, result) => {
                if (error) {
                    this.log.error(error);
                    return next((0, node_ssr_1.handleError)(error, result?.output));
                }
                if (result) {
                    this.log.debug(`Cache used`);
                    return res.send(result.html);
                }
                try {
                    result = await render();
                }
                catch (error) {
                    return next((0, node_ssr_1.handleError)(error, result?.output));
                }
                this.cacheManager.set(cacheKey, result, cacheOptions);
                if (result.output) {
                    this.ssr.logOutput(result.output);
                }
                res.send(result.html);
                if (global.gc) {
                    this.log.debug(`run garbage collector`);
                    global.gc();
                }
                return;
            });
        }
        catch (error) {
            this.log.error(error);
            return next((0, node_ssr_1.handleError)(error));
        }
    }
    getRouteSettingsByRoute(routePath) {
        const routes = this.theme.routes || [];
        return routes.find((route) => {
            return route.path.includes(routePath);
        });
    }
};
SsrMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [config_1.ConfigService,
        ssr_service_1.SsrService, Object])
], SsrMiddleware);
exports.SsrMiddleware = SsrMiddleware;
//# sourceMappingURL=ssr.middleware.js.map