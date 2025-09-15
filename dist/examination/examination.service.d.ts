export interface Exam {
    id: number;
    name: string;
    title: string;
}
export declare class ExaminationService {
    private exams;
    private nextId;
    findAll(): Exam[];
    findById(id: number): Exam;
    create(data: {
        name: string;
        title: string;
    }): Exam;
    update(id: number, data: Partial<Omit<Exam, 'id'>>): Exam;
    remove(id: number): Exam;
}
