import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertsService } from 'angular-alert-module';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Activty';
  questionFormShow: boolean;
  userFormShow: boolean;
  password: string;
  user_name: string;
  name_surename: string;
  question: string;
  subject: string;
  question_type: string;
  userId: number;  questionsUrl: string;
  loginForm: boolean;
  subjectHide: boolean;
  url: boolean;
  appUrl: string;
  user: object;
  homePage: boolean;

  constructor(public http: HttpClient, public activatedRoute: ActivatedRoute, private route: Router, private alerts: AlertsService) {
    this.url = false;
    this.appUrl = "https://www.activityapp.online/";
    this.user = JSON.parse(localStorage.getItem('user'));

    if (this.user) {
      this.homePage = true;
    }
    else {
      this.homePage = false;

    }

  }

  loginFormShow() {
    this.loginForm = true;
  }

  userAdd(user) {
    this.http.post<any>(this.appUrl + 'api/app/register', user.form.value).subscribe(data => {
      this.questionsUrl = null;

      if (data) {
        this.userId = data;
        this.user = JSON.parse(localStorage.getItem('user'));

        localStorage.setItem('user', JSON.stringify(this.userId));

        this.alerts.setMessage('All the fields are required', 'success');
      }
      else {
        this.alerts.setMessage('All the fields are required', 'error');

      }

    })
  }

  Login(user) {
    this.http.post<any>(this.appUrl + 'api/app/login', user.form.value).subscribe(data => {
      this.userId = data;
      localStorage.setItem('user', JSON.stringify(this.userId));
      this.user = JSON.parse(localStorage.getItem('user'));
      this.questionsUrl = null;

    })
  }

  addQuestion(question) {
    this.user = JSON.parse(localStorage.getItem('user'));

    question.form.value.user_id = this.user;
    this.http.post<any>(this.appUrl + 'api/app/add_question', question.form.value).subscribe(data => {
      let response = data;
      this.question = null;
      this.subjectHide = true;
      this.question_type = null;
    })
  }

  async eventStart() {
    this.user = JSON.parse(localStorage.getItem('user'));

    const response = await this.http.get(this.appUrl + 'api/app/delete_questions/' + this.user).toPromise();

    this.questionFormShow = true;
    this.homePage = false;

  }

  complate() {
    this.user = JSON.parse(localStorage.getItem('user'));

    this.questionsUrl = "https://activty.herokuapp.com//questions/12468862934" + this.user + "87842331254";
  }


  getReply() {
    this.route.navigateByUrl("/replys");

  }

  signOut() {
    localStorage.removeItem('userId');
    localStorage.clear();
    this.user = null;
    this.loginForm = false;
    this.questionFormShow = false;
    this.homePage = false;

  }

  ngOnInit(): void {
  }

}
