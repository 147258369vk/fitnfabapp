import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoulder',
  templateUrl: './shoulder.component.html',
  styleUrls: ['./shoulder.component.css']
})
export class ShoulderComponent implements OnInit {

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
