import { Component } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';

@Component({
  selector: 'dxp-brandsite-repeat-section',
  styles: [
    `
      .disabled {
        cursor: not-allowed;
      }
    `
  ],
  template: `
    <div class="repeat-item" *ngFor="let field of field.fieldGroup; let i = index;">
    <div class="row">
      <div class="col-sm-12">
        <div class="btn-group btn-group-toggle pull-right" data-toggle="buttons">
          <label class="btn btn-outline-dark " (click)="moveDown(i)" title="Move Down">
            <i class="fas fa-arrow-down"></i>
          </label>
          <label class="btn btn-outline-dark" (click)="moveUp(i)" title="Move Up">
            <i class="fas fa-arrow-up"></i>
          </label>
        </div>
      </div>
    </div>
    <formly-group
        [model]="model[i]"
        [field]="field"
        [options]="options"
        [form]="formControl">
        <div class="row">
          <div class="col-sm-12">
            <button class="btn btn-outline-danger pull-right" type="button" (click)="remove(i)" title="Delete this item">
              <i class="fas fa-trash-alt"></i> Delete
            </button>
          </div>
        </div>
      </formly-group>
    </div>
    <div style="margin:30px 0;">
      <button class="btn btn-outline-info" type="button" (click)="add()"
      [disabled]="disableAddButton()" [ngClass]="{disabled: disableAddButton()}">
      <i class="fas fa-plus"></i>
      <ng-container *ngIf="field.fieldArray && field.fieldArray.templateOptions">
        {{field.fieldArray.templateOptions['addBtnText']}}
      </ng-container>
      </button>
    </div>
  `
})
export class RepeatSectionComponent extends FieldArrayType {
  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }

  disableAddButton() {
    if (
      this.field.fieldArray['templateOptions'] &&
      this.field.fieldArray['templateOptions']['max'] &&
      this.field.fieldGroup['length'] >= this.field.fieldArray['templateOptions']['max']
    ) {
      return true;
    } else {
      return false;
    }
  }

  // This method is responsible for moving block in up direction by level one
  moveUp(i) {
    if (i === 0) {
      return;
    }
    this.reorder(i, i - 1);
  }

  // This method is responsible for moving block in down direction by level one
  moveDown(i) {
    if (i === this.formControl.length - 1) {
      return;
    }
    this.reorder(i, i + 1);
  }

  // This method is responsible for arranging block/element when shifting operation is performed
  private reorder(oldI: number, newI: number) {
    const m = this.model[oldI];
    this.remove(oldI);
    this.add(newI, m);
  }
}
