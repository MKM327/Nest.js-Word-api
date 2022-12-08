import { Module } from '@nestjs/common';
import { WordController } from 'src/Controllers/word.controller';
import { WordService } from 'src/Services/WordService';
@Module({
    imports: [],
    controllers: [WordController],
    providers: [WordService],
})
export class AppModule { }
