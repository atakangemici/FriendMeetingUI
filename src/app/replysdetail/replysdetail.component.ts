import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-replysdetail',
  templateUrl: './replysdetail.component.html',
  styleUrls: ['./replysdetail.component.scss']
})
export class ReplysdetailComponent implements OnInit {
  replys: object;
  user: object;
  appUrl: string;
  subject: string;
  respondentName: string;

  constructor(public http: HttpClient, private route: ActivatedRoute) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.appUrl = "https://www.activityapp.online/";


  }
  async getReplys() {
    let user = {};
    user["id"] = this.replys;

    this.http.post<any>(this.appUrl + '/api/app/get_replys', user).subscribe(data => {
      if (data.length > 0) {
        this.replys = data;
        this.subject = data[0]["subject"];
        this.respondentName = data[0]["respondent_name"];
      }
      else {
        this.http.post<any>(this.appUrl + '/api/app/get_replys', user).subscribe(data => {
          if (data.length > 0) {
            this.replys = data;
            this.subject = data[0]["subject"];
            this.respondentName = data[0]["respondent_name"];
          }
        })
      }
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.replys = params['id'];
    });



    this.getReplys();
  }


}
