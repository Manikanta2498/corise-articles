import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateNewArticleService } from './create-new-article.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-create-new-article',
  templateUrl: './create-new-article.component.html',
  styleUrls: ['./create-new-article.component.css']
})
export class CreateNewArticleComponent implements OnInit {

  validateForm!: FormGroup;
  articleTitle: string = '';
  articleContent: string = '';
  articleId: number = 0;
  markdownFormat: string = `{
		"Type": "Markdown",
		"Object": {
			"Text": "# This is a sample text in Markdown format."
		}
	}`;

  multipleChoiceFormat: string = `{
		"Type": "MCQ",
		"Object": {
			"Question": "Question text goes here?",
			"CorrectOption": "Option 1",
			"IncorrectOptions": [
				"Option 2",
				"Option 3",
				"Option 4"
			],
			"FeedbackOnIncorrect": "Instructional text goes here."
		}
	}`;

  flashcardFormat: string = `{
		"Type": "FlashCard",
		"Object": {
			"Question": "Question text goes here?",
			"Answer": "Answer text goes here."
		}
	}`;

  sampleArticle: string = `[\n\t` + this.markdownFormat + `,\n\t` + this.multipleChoiceFormat + `,\n\t` + this.flashcardFormat + `\n]`;

  copyToClipboardFormats = [
    {
      buttonLabel: 'Copy Markdown Format',
      format: this.markdownFormat,
      copyAlert: 'Markdown format copied to clipboard.'
    },
    {
      buttonLabel: 'Copy Multiple Choice Format',
      format: this.multipleChoiceFormat,
      copyAlert: 'Multiple Choice format copied to clipboard.'
    },
    {
      buttonLabel: 'Copy Flashcard Format',
      format: this.flashcardFormat,
      copyAlert: 'Flashcard format copied to clipboard.'
    }
  ];

  showInstructionsModal(): void {
    this.modal.info({
      nzTitle: `Instructions for creating new Article`,
      nzContent: `
        <p>Article is an array of blocks. A block can be of type Markdown, Multiple Choice, or Flashcard.</p>
        <p><i>Follow these steps:</i></p>
        <p>1. Give your article a title.</p>
        <p>2. Copy the format of the block type you want to create.</p>
        <p>3. Paste the format in the text area below.</p>
        <p>4. Replace the sample text with your own content.</p>
        <p>5. Click the "Create Article" button.</p>
      `
    });
  }

  onClipboardCopy(copyAlert: string) {
    this.message.success(copyAlert);
  }

  submitForm(): void {
    this.articleTitle = this.validateForm.value.articleTitle;
    this.articleContent = this.validateForm.value.articleContent;
    this.createArticleService.createNewArticle(this.articleTitle, this.articleContent).subscribe(
      data => {
        this.articleId = data.ID;
        this.notification.create(
          'success',
          'Hurray!',
          'Article with title "' + this.articleTitle + '" created successfully.'
        );
        setTimeout(() => {
          // Refresh the web page.
          window.location.reload();
        }, 2000);

      }
    );
  }

  constructor(private message: NzMessageService,
              private fb: FormBuilder,
              private createArticleService: CreateNewArticleService,
              private notification: NzNotificationService,
              private modal: NzModalService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      articleTitle: [null, [Validators.required]],
      articleContent: [null, [Validators.required]]
    });
  }

}
