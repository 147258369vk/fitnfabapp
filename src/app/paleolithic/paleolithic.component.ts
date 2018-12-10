import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paleolithic',
  templateUrl: './paleolithic.component.html',
  styleUrls: ['./paleolithic.component.css']
})
export class PaleolithicComponent implements OnInit {

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
