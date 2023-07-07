import { Component } from '@angular/core';
import {Router} from "@angular/router"
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  articlesList = [];

  constructor(private router: Router,
              private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getAllArticles().subscribe({
      next: data => {
        this.articlesList = data;
      }
    });
  }
}
