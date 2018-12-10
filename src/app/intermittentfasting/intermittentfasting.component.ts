import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intermittentfasting',
  templateUrl: './intermittentfasting.component.html',
  styleUrls: ['./intermittentfasting.component.css']
})
export class IntermittentfastingComponent implements OnInit {

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
