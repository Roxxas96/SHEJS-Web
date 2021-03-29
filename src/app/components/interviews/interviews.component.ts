import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.scss'],
})
export class InterviewsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
