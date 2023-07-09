import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {

  @Input() blockData: any;
  question: string = "";
  answer: string = "";
  constructor() { }

  ngOnInit(): void {
    this.question = this.blockData.Object.Question;
    this.answer = this.blockData.Object.Answer;
  }

}
