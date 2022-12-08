import { Controller, Get, Req, Param } from '@nestjs/common';
import { WordService } from 'src/Services/WordService';
import { Request } from 'express';

/* eslint-disable */
@Controller('words')
export class WordController {
    constructor(private wordService: WordService) { }
    @Get()
    getWord(@Req() req: Request): string {
        return this.wordService.getWord();
    }
    @Get('/count/:id')
    getWords(@Param() params): string[] {
        return this.wordService.getWords(Number(params.id));
    }

}
