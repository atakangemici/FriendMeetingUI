import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-questions-detail',
  templateUrl: './questions-detail.component.html',
  styleUrls: ['./questions-detail.component.scss']
})
export class QuestionsDetailComponent implements OnInit {
  urlId: boolean;
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
    var url = this.activatedRoute.url['value']['1']['path'];
    var getUrlId = url.toString();
    var split1 = getUrlId.split("34");
    var split2 = split1[1].split("87");
    this.urlId = split2[0];
    this.appUrl = "https://localhost:44341/";

  }

  async getQuestion() {
    const response = await this.http.get(this.appUrl + 'api/app/get_questions/' + this.urlId).toPromise();
    this.questions = response;

    for (let i = 0; i < Object.keys(response).length; i++) {

      if (response[i]["subject"] != null) {
        this.subject = response[i]["subject"];
      }

    }

  }


  async addReply(questions) {
    questions.form.value.userId = this.urlId;

    this.http.post<any>(this.appUrl + 'api/app/add_reply', questions.form.value).subscribe(data => {
      const result = data;
      this.thanks = true;
    })
  }

  ngOnInit(): void {
    this.getQuestion();
  }

}
