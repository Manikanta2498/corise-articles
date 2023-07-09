import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ArticleComponent } from './pages/article/article.component';
import { BlockComponent } from './pages/block/block.component';

import { MarkdownModule } from 'ngx-markdown';
import { MultipleChoiceComponent } from './pages/block-type/multiple-choice/multiple-choice.component';
import { MarkdownComponent } from './pages/block-type/markdown/markdown.component';
import { FlashcardComponent } from './pages/block-type/flashcard/flashcard.component';
import { CreateNewArticleComponent } from './pages/create-new-article/create-new-article.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ArticleComponent,
    BlockComponent,
    MultipleChoiceComponent,
    MarkdownComponent,
    FlashcardComponent,
    CreateNewArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    ClipboardModule,
    NzLayoutModule,
    NzMenuModule,
    NzRadioModule,
    NzCardModule,
    NzFormModule,
    NzButtonModule,
    NzModalModule,
    NzIconModule,
    NzCollapseModule,
    NzGridModule,
    NzMessageModule,
    NzNotificationModule,
    MarkdownModule.forRoot()
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
