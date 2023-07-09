import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';

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
  feedback: string = "";
  options: string[] = [];
  optionSelected: string = "";
  quizForm!: FormGroup;

  constructor(private fb: FormBuilder, private modal: NzModalService) { }

  onSubmit() {
    this.optionSelected = this.quizForm.get('choice')?.value;
    if (this.optionSelected === this.correctOption) {
      this.success();
    } else if (this.optionSelected === "") {
      this.info();
    } else {
      this.error();
    }
  }

  success(): void {
    this.modal.success({
      nzTitle: 'Correct Answer!'
    });
  }

  info(): void {
    this.modal.info({
      nzTitle: 'Please select an option!'
    });
  }

  error(): void {
    this.modal.error({
      nzTitle: 'Wrong Answer!',
      nzContent: this.feedback
    });
  }

  ngOnInit(): void {
    this.quizForm = this.fb.group({
      choice : ['', Validators.required]
    });
    this.question = this.blockData.Object.Question;
    this.correctOption = this.blockData.Object.CorrectOption;
    this.feedback = this.blockData.Object.FeedbackOnIncorrect;
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
