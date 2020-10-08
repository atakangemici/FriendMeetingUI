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
  userId: number;
  questionDetail: string;
  loginForm: boolean;
  subjectHide: boolean;
  url: boolean;
  appUrl : string;

  constructor(public http: HttpClient, public activatedRoute: ActivatedRoute,private route:Router,private alerts: AlertsService) {
    this.url = false;
    this.appUrl = "http://www.activityapp.online/";
  }

  loginFormShow() {
    this.loginForm = true;
  }

  userAdd(user) {
    this.http.post<any>(this.appUrl +'/api/app/register', user.form.value).subscribe(data => {
      if(data){
        this.userId = data;
        localStorage.setItem('user', JSON.stringify(this.userId));

        this.alerts.setMessage('All the fields are required','success');
      }
      else{
        this.alerts.setMessage('All the fields are required','error');

      }
        
    })
  }

  Login(user) {
    this.http.post<any>(this.appUrl +'/api/app/login', user.form.value).subscribe(data => {
      this.userId = data;
      localStorage.setItem('user', JSON.stringify(this.userId));


    })
  }

  addQuestion(question) {
    question.form.value.user_id = this.userId;
    this.http.post<any>(this.appUrl +'/api/app/add_question', question.form.value).subscribe(data => {
      let response = data;
      this.question = null;
      this.subjectHide = true;
      this.question_type = null;
    })
  }

  async eventStart() {
    const response = await this.http.get(this.appUrl + '/api/app/delete_questions/'+ this.userId).toPromise();

    this.questionFormShow = true;
  }

  complate() {
    this.questionDetail = "http://localhost:4200/questions/" + this.userId;
  }

  
  getReply(){
    this.route.navigateByUrl("/replys");

  }

  ngOnInit(): void {
  }

}
