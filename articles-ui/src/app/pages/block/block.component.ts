import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  @Input() blockData: any;

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
