import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent implements OnInit {

  @Input() blockData: any;

  question: string = "";
  correctOption: string = "";
  incorrectOptions: string[] = [];
  options: string[] = [];
  optionSelected: string = "";
  constructor() { }

  onOptionChange(event: any) {
    console.log(event);
  }

  ngOnInit(): void {
    this.question = this.blockData.Object.Question;
    this.correctOption = this.blockData.Object.CorrectOption;
    this.options.push(this.correctOption);
    const remainingOptions = this.blockData.Object.IncorrectOptions;
    for (let i = 0; i < remainingOptions.length; i++) {
      this.options.push(remainingOptions[i]);
    }
    // Shuffle the options
    this.options = this.shuffle(this.options);
  }

  shuffle = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
}
