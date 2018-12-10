import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flexibledieting',
  templateUrl: './flexibledieting.component.html',
  styleUrls: ['./flexibledieting.component.css']
})
export class FlexibledietingComponent implements OnInit {

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
