import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carbcycle',
  templateUrl: './carbcycle.component.html',
  styleUrls: ['./carbcycle.component.css']
})
export class CarbcycleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Hack: Scrolls to top of Page after page view initialized
    let top = document.getElementById('top');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }
}
