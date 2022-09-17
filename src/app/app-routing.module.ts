import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CollaborateurComponent} from './collaborateur/collaborateur.component';
import {ArticleComponent} from './article/article.component';
import { ClientComponent } from './client/client.component';


const routes: Routes = [
{path:'collaborateur',component:CollaborateurComponent},
{path:'article',component:ArticleComponent},
{path:'client',component:ClientComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
