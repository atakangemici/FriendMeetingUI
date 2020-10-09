import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsDetailComponent } from './questions-detail/questions-detail.component';
import { HomeComponent } from './home/home.component';
import { ReplysComponent } from './replys/replys.component';
import { ReplysdetailComponent } from './replysdetail/replysdetail.component';


const routes: Routes = [

  { path: "", component: HomeComponent},
  { path: 'questions/:id' , component: QuestionsDetailComponent},
  { path: "replys", component: ReplysComponent},
  { path: "replysdetail/:id", component: ReplysdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
