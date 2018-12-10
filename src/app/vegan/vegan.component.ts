import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vegan',
  templateUrl: './vegan.component.html',
  styleUrls: ['./vegan.component.css']
})
export class VeganComponent implements OnInit {

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
