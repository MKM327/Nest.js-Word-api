import fs from 'fs';
import { Injectable } from '@nestjs/common';
@Injectable()
export class WordService {
    getWord(): string {
        const data = fs.readFileSync('./words.txt', 'utf8');
        return data;
    }
}