import { TestBed } from '@angular/core/testing';

import { CreateNewArticleService } from './create-new-article.service';

describe('CreateNewArticleService', () => {
  let service: CreateNewArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateNewArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
