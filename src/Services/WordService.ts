/*eslint-disable */
const fs = require('fs');
import { Injectable } from '@nestjs/common';
@Injectable()
export class WordService {
    getWord(): string {
        const words = fs.readFileSync('words.txt').toString().split('\n');
        return words[(Math.random() * words.length) | 0];
    }
    getWords(count: Number): string[] {
        const words = fs.readFileSync('words.txt').toString().split('\n');
        var result: string[] = [];
        for (let i = 0; i < count; i++)
            result.push(words[(Math.random() * words.length) | 0]);

        return result;
    }
}