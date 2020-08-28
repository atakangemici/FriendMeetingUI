import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-replys',
  templateUrl: './replys.component.html',
  styleUrls: ['./replys.component.scss']
})
export class ReplysComponent implements OnInit {
  url: number;

  constructor(public http: HttpClient, public activatedRoute: ActivatedRoute,private route:Router) {

  }

  getReplysDetail (){
    this.route.navigateByUrl("/replysdetail/" + 2);

  }

  ngOnInit(): void {
  }

}
