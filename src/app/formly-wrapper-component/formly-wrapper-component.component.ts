import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-wrapper',
  templateUrl: './formly-wrapper-component.component.html',
  styleUrls: ['./formly-wrapper-component.component.scss']
})
export class FormlyWrapperComponentComponent implements OnInit {
  @Input() input: any;
  @Input() name;
  @Input() init: any;
  @Output() submittedData = new EventEmitter<any>();
  title = 'formly';
  orderForm = new FormGroup({});

  // our model:
  order = {
  };

  onSubmit(orderInfo) {
    this.submittedData.emit({data: orderInfo, isCancel: 'n'});
  }

  onCancel() {
    this.submittedData.emit({isCancel: 'y'});
  }
  ngOnInit(): void {
    if (typeof(this.input) === 'string') {
      this.input = JSON.parse(this.input);
      this.order = JSON.parse(this.init);
    }
  }
}
