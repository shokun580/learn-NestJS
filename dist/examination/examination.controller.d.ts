import { ExaminationService } from './examination.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
export declare class ExaminationController {
    private readonly examinationService;
    constructor(examinationService: ExaminationService);
    findAll(): import("./examination.service").Exam[];
    findOne(id: number): import("./examination.service").Exam;
    create(dto: CreateExamDto): import("./examination.service").Exam;
    update(id: number, dto: UpdateExamDto): import("./examination.service").Exam;
    remove(id: number): import("./examination.service").Exam;
}
