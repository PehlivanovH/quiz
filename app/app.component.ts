import { Component } from '@angular/core';

import { QuizComponent } from "./quiz.component";

@Component({
    selector: 'my-app',
    directives: [QuizComponent],
    template: `<quiz></quiz>`
})
export class AppComponent {}
