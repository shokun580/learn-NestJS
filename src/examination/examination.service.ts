import { Injectable, NotFoundException } from '@nestjs/common';
export interface Exam { id: number; name: string; title: string; }
@Injectable()
export class ExaminationService {
    private exams: Exam[] = [
        { id: 1, name: 'math', title: 'คณิตศาสตร์' },
        { id: 2, name: 'thai', title: 'ภาษาไทย' },
    ];
    private nextId = 3;

    findAll() {
        return this.exams;
    }
    findById(id: number) {
        const item = this.exams.find(e => e.id === id);
        if (!item) throw new NotFoundException('Exam not found');
        return item;
    }
    create(data: { name: string; title: string }) {
        const exam: Exam = { id: this.nextId++, ...data };
        this.exams.push(exam);
        return exam;
    }

    update(id: number, data: Partial<Omit<Exam, 'id'>>) {
        const exam = this.findById(id);
        Object.assign(exam, data);
        return exam;
    }

    remove(id: number) {
        const idx = this.exams.findIndex(e => e.id === id);
        if (idx === -1) throw new NotFoundException('Exam not found');
        const [deleted] = this.exams.splice(idx, 1);
        return deleted;
    }
}
