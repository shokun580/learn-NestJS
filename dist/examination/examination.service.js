"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExaminationService = void 0;
const common_1 = require("@nestjs/common");
let ExaminationService = class ExaminationService {
    exams = [
        { id: 1, name: 'math', title: 'คณิตศาสตร์' },
        { id: 2, name: 'thai', title: 'ภาษาไทย' },
    ];
    nextId = 3;
    findAll() {
        return this.exams;
    }
    findById(id) {
        const item = this.exams.find(e => e.id === id);
        if (!item)
            throw new common_1.NotFoundException('Exam not found');
        return item;
    }
    create(data) {
        const exam = { id: this.nextId++, ...data };
        this.exams.push(exam);
        return exam;
    }
    update(id, data) {
        const exam = this.findById(id);
        Object.assign(exam, data);
        return exam;
    }
    remove(id) {
        const idx = this.exams.findIndex(e => e.id === id);
        if (idx === -1)
            throw new common_1.NotFoundException('Exam not found');
        const [deleted] = this.exams.splice(idx, 1);
        return deleted;
    }
};
exports.ExaminationService = ExaminationService;
exports.ExaminationService = ExaminationService = __decorate([
    (0, common_1.Injectable)()
], ExaminationService);
//# sourceMappingURL=examination.service.js.map