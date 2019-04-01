import {Component, Input, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-wrapper-component',
  templateUrl: './formly-wrapper-component.component.html',
  styleUrls: ['./formly-wrapper-component.component.scss']
})
export class FormlyWrapperComponentComponent implements OnInit{
  @Input() input: any;
  @Input() name: string;
  title = 'formly';
  orderForm = new FormGroup({});

  // our model:
  order = {
  };




  // our field configuration. Keys should match our model:
  // orderFields: FormlyFieldConfig[] = [
  //   {
  //     wrappers: [
  //       'panel'
  //     ],
  //     templateOptions: {
  //       label: 'Content Item Grid'
  //     },
  //     fieldGroup: [
  //       {
  //         key: 'align',
  //         type: 'select',
  //         templateOptions: {
  //           label: 'Header Alignment',
  //           description: 'Sets alignment of header elements (Eyebrow, Title, Description)',
  //           options: [
  //             {
  //               label: 'Left',
  //               value: 'left'
  //             },
  //             {
  //               label: 'Right',
  //               value: 'right'
  //             },
  //             {
  //               label: 'Center',
  //               value: 'center'
  //             }
  //           ]
  //         }
  //       },
  //       {
  //         key: 'column',
  //         type: 'select',
  //         templateOptions: {
  //           label: 'Number of Columns in Grid',
  //           description: 'Sets the number of columns in the grid',
  //           options: [
  //             {
  //               label: '1',
  //               value: 1
  //             },
  //             {
  //               label: '2',
  //               value: 2
  //             },
  //             {
  //               label: '3',
  //               value: 3
  //             },
  //             {
  //               label: '4',
  //               value: 4
  //             },
  //             {
  //               label: '5',
  //               value: 5
  //             },
  //             {
  //               label: '6',
  //               value: 6
  //             }
  //           ]
  //         }
  //       },
  //       {
  //         key: 'grid-description',
  //         type: 'input',
  //         templateOptions: {
  //           label: 'Grid Description',
  //           description: 'Description text to be displayed in the header'
  //         }
  //       },
  //       {
  //         key: 'grid-eyebrow-text',
  //         type: 'input',
  //         templateOptions: {
  //           label: 'Grid Eyebrow Text',
  //           description: 'Eyebrow text to be displayed in the header'
  //         }
  //       },
  //       {
  //         key: 'grid-title',
  //         type: 'input',
  //         templateOptions: {
  //           label: 'Grid Title',
  //           description: 'Title text to be displayed in the header'
  //         }
  //       },
  //       {
  //         key: 'grid-title-url',
  //         type: 'input',
  //         templateOptions: {
  //           label: 'Grid Title URL',
  //           description: 'Link to destination for title text in header'
  //         }
  //       },
  //       {
  //         key: 'title-target',
  //         type: 'checkbox',
  //         templateOptions: {
  //           label: 'Open in new tab ?',
  //           description: 'Link to destination for title text in header'
  //         }
  //       }
  //     ]
  //   }
  // ];

  onSubmit(orderInfo) {
    console.log(orderInfo);
  }

  ngOnInit(): void {
    console.log('========== 138 =======', this.input);
  }

}
