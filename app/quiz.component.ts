import { Component, OnInit } from '@angular/core';
import {NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

import './rxjs-operators';
import { JService } from "./jservice";
import { Question } from "./question";

@Component({
    selector: 'quiz',
    providers: [JService],
    templateUrl: 'app/quiz.component.html',
    directives: [NgSwitch, NgSwitchCase, NgSwitchDefault]
})
export class QuizComponent implements OnInit {
    constructor(private jservice: JService) {}

    question = '';
    correctAnswer = '';
    userAnswer = '';
    error: String;
    answerResult: String;

    ngOnInit() {
        this.loadQuestion();
    }

    submitAnswer() {
        if( this.userAnswer.length == 0 || 
            this.correctAnswer.toUpperCase().search(this.userAnswer.toUpperCase()) == -1) {
            this.answerResult = 'wrong';
        }
        else {
            this.answerResult = 'correct';
        } 
    }

    fillQuestion(response: any) {
        this.question = response.question;
        this.correctAnswer = response.answer;
    }

    loadQuestion() {
        this.jservice.getRandomQuestion()
            .subscribe(response => this.fillQuestion(response),
                error => this.error = error);

        this.userAnswer = '';
        this.answerResult = '';
    }
}
