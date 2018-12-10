import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gluten',
  templateUrl: './gluten.component.html',
  styleUrls: ['./gluten.component.css']
})
export class GlutenComponent implements OnInit {

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
