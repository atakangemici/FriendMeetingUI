import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsDetailComponent } from './questions-detail/questions-detail.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  { path: "", component: HomeComponent},
  { path: "questions/:id", component: QuestionsDetailComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
