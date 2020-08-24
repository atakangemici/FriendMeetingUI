import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions-detail',
  templateUrl: './questions-detail.component.html',
  styleUrls: ['./questions-detail.component.scss']
})
export class QuestionsDetailComponent implements OnInit {
  url : boolean;
  constructor(public activatedRoute : ActivatedRoute) {
    this.url = false;

   }

  ngOnInit(): void {
  }

}
