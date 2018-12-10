import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mediterranean',
  templateUrl: './mediterranean.component.html',
  styleUrls: ['./mediterranean.component.css']
})
export class MediterraneanComponent implements OnInit {

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
