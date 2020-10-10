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
  questionsUrl: string;
  loginForm: boolean;
  subjectHide: boolean;
  url: boolean;
  appUrl: string;

  constructor(public http: HttpClient, public activatedRoute: ActivatedRoute) {
    this.url = false;
    this.appUrl = "https://www.activityapp.online/"
    // this.appUrl = "https://localhost:44341/"

  }

  loginFormShow() {
    this.loginForm = true;
  }

  userAdd(user) {
    this.http.post<any>(this.appUrl + 'api/app/register', user.form.value).subscribe(data => {
      this.userId = data;
      this.questionForm = true;

    })
  }

  Login(user) {
    this.http.post<any>(this.appUrl + 'api/app/login', user.form.value).subscribe(data => {
      this.userId = data;
      this.questionForm = true;

    })
  }

  addQuestion(question) {
    question.form.value.user_id = this.userId;
    this.http.post<any>(this.appUrl + 'api/app/add_question', question.form.value).subscribe(data => {
      let response = data;
      this.question = "";
      this.subjectHide = true;
      this.question_type = "";
    })
  }

  eventStart() {
    this.userFormShow = true;
  }


}
