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
exports.NoteController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const note_model_1 = require("../model/note.model");
const Note_schemas_1 = require("../schemas/Note.schemas");
let NoteController = class NoteController {
    constructor(model) {
        this.model = model;
    }
    async create(body) {
        body.createdAt = new Date();
        return this.model.save(body);
    }
    async getById(id) {
        const note = await this.model.findOne({ where: { id } });
        if (!note) {
            throw new common_1.NotFoundException(`not found id ${id}`);
        }
        return note;
    }
    async getAll() {
        const list = await this.model.find();
        return { data: list };
    }
    async update(id, body) {
        const note = await this.model.findOne({ where: { id } });
        if (!note) {
            throw new common_1.NotFoundException(`not found id ${id}`);
        }
        await this.model.update({ id }, body);
        return this.model.findOne({ where: { id } });
    }
    async delete(id) {
        const note = await this.model.findOne({ where: { id } });
        if (!note) {
            throw new common_1.NotFoundException(`not found idd ${id}`);
        }
        await this.model.delete(id);
        return `Note was successfully deleted`;
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Note_schemas_1.NoteSchema]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "getById", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "getAll", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Note_schemas_1.NoteSchema]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "delete", null);
NoteController = __decorate([
    (0, common_1.Controller)('/note'),
    __param(0, (0, typeorm_1.InjectRepository)(note_model_1.NoteModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NoteController);
exports.NoteController = NoteController;
//# sourceMappingURL=note.controller.js.map