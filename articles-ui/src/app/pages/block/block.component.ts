import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  @Input() blockData: any;

  constructor() { }

  // getBlockContent(blockData: any) {
  //   // Check blockData.Type and create blockContent accordingly
  //   if (blockData.Type === 'Markdown') {
  //     this.blockType = 'Markdown';
  //     this.blockContent = blockData.Object.Text;
  //   } else if (blockData.Type === 'MCQ') {
  //     this.blockType = 'MCQ';
  //     this.blockContent = blockData.Object.Question;
  //   }
  // }

  ngOnInit(): void {
  }

}
