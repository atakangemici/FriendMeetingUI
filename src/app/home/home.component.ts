import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'friends';
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
    this.http.post<any>('https://localhost:44341/api/app/register', user.form.value).subscribe(data => {
      this.userId = data;
      this.questionForm = true;

    })
  }

  Login(user) {
    this.http.post<any>('https://localhost:44341/api/app/login', user.form.value).subscribe(data => {
      this.userId = data;
      this.questionForm = true;

    })
  }

  addQuestion(question) {
    question.form.value.user_id = this.userId;
    this.http.post<any>('https://localhost:44341/api/app/add_question', question.form.value).subscribe(data => {
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
    this.questionDetail = "http://localhost:4200/questions-detail/" + this.userId;
  }

  ngOnInit(): void {
  }

}
