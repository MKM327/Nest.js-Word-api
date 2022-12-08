import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WordController } from './Controllers/word.controller';
import { WordService } from './Services/WordService';
@Module({
  imports: [],
  controllers: [AppController, WordController],
  providers: [AppService, WordService],
})
export class AppModule { }
