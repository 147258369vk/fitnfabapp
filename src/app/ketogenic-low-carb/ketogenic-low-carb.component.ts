import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ketogenic-low-carb',
  templateUrl: './ketogenic-low-carb.component.html',
  styleUrls: ['./ketogenic-low-carb.component.css']
})
export class KetogenicLowCarbComponent implements OnInit {

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
