import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <p>
      button works! {{ name }}
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnInit {
  @Input() name: string
  constructor() { }

  ngOnInit() {
  }

}
