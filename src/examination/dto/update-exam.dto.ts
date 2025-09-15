// npm i class-validator class-transformer  แล้วเปิด ValidationPipe ใน main.ts
import { IsString, MinLength, IsOptional } from 'class-validator';
export class UpdateExamDto {
    @IsOptional() @IsString() @MinLength(2) name?: string;
    @IsOptional() @IsString() @MinLength(2) title?: string;
}