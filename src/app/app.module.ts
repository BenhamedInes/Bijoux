import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { ShowArticleComponent } from './article/show-article/show-article.component';
import { AddEditArticleComponent } from './article/add-edit-article/add-edit-article.component';
import { ShowCollaboComponent } from './collaborateur/show-collabo/show-collabo.component';
import { AddEditCollaboComponent } from './collaborateur/add-edit-collabo/add-edit-collabo.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientComponent } from './client/client.component';
import { ShowClientComponent } from './client/show-client/show-client.component';
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    CollaborateurComponent,
    ShowArticleComponent,
    AddEditArticleComponent,
    ShowCollaboComponent,
    AddEditCollaboComponent,
    ClientComponent,
    ShowClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
