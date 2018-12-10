import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vshape',
  templateUrl: './vshape.component.html',
  styleUrls: ['./vshape.component.css']
})
export class VshapeComponent implements OnInit {

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
