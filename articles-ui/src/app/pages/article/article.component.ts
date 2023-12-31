import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from './article.service';
import { window } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articleId: number = 0;
  articleData: any = "";
  blocksData: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private articleService: ArticleService) {
    this.activatedRoute.params.subscribe(params => {
      this.articleId = params['id'];
      this.updateArticle();
    });
  }

  updateArticle(): void {
    this.articleService.getArticle(this.articleId).subscribe({
      next: data => {
        this.blocksData = JSON.parse(data.Blocks);
        console.log('blocksData: ' + this.blocksData);
      }
    });
  }

  ngOnInit(): void {
    this.updateArticle();
  }

}
