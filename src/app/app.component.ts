import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'friends';
  questionForm: boolean;
  userFormShow: boolean;
  password: string;
  user_name: string;
  question: string;
  question_type: string;
  userId: number;
  questionDetail : string;

  constructor(public http: HttpClient) {

  }

  userAdd(user) {
    this.http.post<any>('https://localhost:44341/api/app/add_user', user.form.value).subscribe(data => {
      this.userId = data;
      this.questionForm = true;

    })
  }

  addQuestion(question) {
    question.form.value.user_id = this.userId;
    this.http.post<any>('https://localhost:44341/api/app/add_question', question.form.value).subscribe(data => {
      let response = data;
      this.question = "";
      this.question_type = "";
    })
  }

  eventStart() {
    this.userFormShow = true;
  }

  complate(){
    this.questionDetail = "http://localhost:4200/question-detail/" + this.userId;
  }

}
