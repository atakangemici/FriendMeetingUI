import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-questions-detail',
  templateUrl: './questions-detail.component.html',
  styleUrls: ['./questions-detail.component.scss']
})
export class QuestionsDetailComponent implements OnInit {
  url: boolean;
  appUrl: string;
  questions: object;
  subject: string;
  metin: string;
  reply: any[];
  replyOption: any[];
  questionForm: any[];
  replyName: string;
  questionFormShow: boolean;
  thanks: boolean;

  constructor(public http: HttpClient, public activatedRoute: ActivatedRoute) {
    this.url = this.activatedRoute.url['value']['1']['path'];
    this.appUrl = "https://www.activityapp.online/";

  }

  async getQuestion() {
    const response = await this.http.get(this.appUrl + '/api/app/get_questions/' + this.url).toPromise();
    this.questions = response;

    for (let i = 0; i < Object.keys(response).length; i++) {

      if (response[i]["subject"] != null) {
        this.subject = response[i]["subject"];
      }

    }

  }


  async addReply(questions) {
    questions.form.value.userId = this.url;

    this.http.post<any>(this.appUrl + '/api/app/add_reply', questions.form.value).subscribe(data => {
      const result = data;
      this.thanks = true;
    })
  }

  ngOnInit(): void {
    this.getQuestion();
  }

}
