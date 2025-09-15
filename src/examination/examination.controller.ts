import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ExaminationService } from './examination.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
 
@Controller('examination')
export class ExaminationController {
    constructor(private readonly examinationService: ExaminationService) { }
    @Get()
    findAll() {
        return this.examinationService.findAll();
    }
    @Get(':id') findOne(@Param('id', ParseIntPipe) id: number) {
        return this.examinationService.findById(id);
    }

    @Post() create(@Body() dto: CreateExamDto) {
        return this.examinationService.create(dto);
    }

    @Patch(':id') update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateExamDto) {
        return this.examinationService.update(id, dto);
    }

    @Delete(':id') remove(@Param('id', ParseIntPipe) id: number) {
        return this.examinationService.remove(id);
    }
}
