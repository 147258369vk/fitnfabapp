import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cleaneating',
  templateUrl: './cleaneating.component.html',
  styleUrls: ['./cleaneating.component.css']
})
export class CleaneatingComponent implements OnInit {

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
