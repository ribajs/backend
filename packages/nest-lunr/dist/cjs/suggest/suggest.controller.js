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
exports.SuggestController = void 0;
const common_1 = require("@nestjs/common");
const suggest_service_1 = require("./suggest.service");
const swagger_1 = require("@nestjs/swagger");
let SuggestController = class SuggestController {
    constructor(suggest) {
        this.suggest = suggest;
    }
    async suggestion(res, namespace, word) {
        let result;
        try {
            result = this.suggest.suggest(namespace, word);
        }
        catch (error) {
            throw error;
        }
        return res.json(result);
    }
    async allSuggestions(res, word) {
        let result;
        try {
            result = this.suggest.suggestAll(word);
        }
        catch (error) {
            throw error;
        }
        return res.json(result);
    }
};
__decorate([
    (0, common_1.Get)('/:namespace/:word'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('namespace')),
    __param(2, (0, common_1.Param)('word')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], SuggestController.prototype, "suggestion", null);
__decorate([
    (0, common_1.Get)('/:word'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('word')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], SuggestController.prototype, "allSuggestions", null);
SuggestController = __decorate([
    (0, swagger_1.ApiTags)('suggestions'),
    (0, common_1.Controller)('api/suggest'),
    __metadata("design:paramtypes", [suggest_service_1.SuggestService])
], SuggestController);
exports.SuggestController = SuggestController;
//# sourceMappingURL=suggest.controller.js.map