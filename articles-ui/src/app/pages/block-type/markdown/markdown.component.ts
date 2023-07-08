import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent implements OnInit {

  @Input() blockData: any;

  blockContent: string = "";
  constructor() { }

  ngOnInit(): void {
    this.blockContent = this.blockData.Object.Text;
    console.log(this.blockContent);
  }

}
