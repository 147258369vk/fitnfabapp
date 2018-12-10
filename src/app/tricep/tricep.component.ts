import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tricep',
  templateUrl: './tricep.component.html',
  styleUrls: ['./tricep.component.css']
})
export class TricepComponent implements OnInit {

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
