import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Activty';
  questionForm: boolean;
  userFormShow: boolean;
  password: string;
  user_name: string;
  name_surename: string;
  question: string;
  subject: string;
  question_type: string;
  userId: number;
  questionDetail: string;
  loginForm: boolean;
  subjectHide: boolean;
  url: boolean;

  constructor(public http: HttpClient, public activatedRoute: ActivatedRoute) {
    this.url = false;

  }

  loginFormShow() {
    this.loginForm = true;
  }

  userAdd(user) {
    this.http.post<any>('https://activty.herokuapp.com/api/app/register', user.form.value).subscribe(data => {
      this.userId = data;
      this.questionForm = true;

    })
  }

  Login(user) {
    this.http.post<any>('https://activty.herokuapp.com/api/app/login', user.form.value).subscribe(data => {
      this.userId = data;
      this.questionForm = true;

    })
  }

  addQuestion(question) {
    question.form.value.user_id = this.userId;
    this.http.post<any>('https://activty.herokuapp.com/api/app/add_question', question.form.value).subscribe(data => {
      let response = data;
      this.question = "";
      this.subjectHide = true;
      this.question_type = "";
    })
  }

  eventStart() {
    this.userFormShow = true;
  }

  complate() {
    this.questionDetail = "https://activty.herokuapp.com/questions-detail/" + this.userId;
  }

}
