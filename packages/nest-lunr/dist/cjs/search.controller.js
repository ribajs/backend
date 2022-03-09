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
exports.SearchController = void 0;
const common_1 = require("@nestjs/common");
const lunr_service_1 = require("./lunr.service");
const swagger_1 = require("@nestjs/swagger");
let SearchController = class SearchController {
    constructor(lunr) {
        this.lunr = lunr;
    }
    search(res, namespace, query, limit = 50) {
        let result;
        try {
            result = this.lunr.search(namespace, query);
            if (result.length >= limit) {
                result = result.slice(0, limit);
            }
        }
        catch (error) {
            throw error;
        }
        if (!result) {
            throw new common_1.NotFoundException(`[Lunr] No index namespace "${namespace}" found!`);
        }
        return res.json(result);
    }
    searchAll(res, query, limit = 50) {
        let result;
        try {
            result = this.lunr.searchAll(query);
            if (result.length >= limit) {
                result = result.slice(0, limit);
            }
        }
        catch (error) {
            throw error;
        }
        return res.json(result);
    }
};
__decorate([
    (0, common_1.Get)('/:namespace/:query'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('namespace')),
    __param(2, (0, common_1.Param)('query')),
    __param(3, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, Object]),
    __metadata("design:returntype", void 0)
], SearchController.prototype, "search", null);
__decorate([
    (0, common_1.Get)('/:query'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('query')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", void 0)
], SearchController.prototype, "searchAll", null);
SearchController = __decorate([
    (0, swagger_1.ApiTags)('search'),
    (0, common_1.Controller)('api/search'),
    __metadata("design:paramtypes", [lunr_service_1.LunrService])
], SearchController);
exports.SearchController = SearchController;
//# sourceMappingURL=search.controller.js.map