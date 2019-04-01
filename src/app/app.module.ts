import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import {createCustomElement} from '@angular/elements';
import { FormlyWrapperComponentComponent } from './formly-wrapper-component/formly-wrapper-component.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {FormlyModule} from '@ngx-formly/core';
import {PanelWrapperComponent} from './panel-wrapper.component';
import {RepeatSectionComponent} from './repeat-section.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FormlyWrapperComponentComponent,
    PanelWrapperComponent,
    RepeatSectionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      wrappers: [{ name: 'panel', component: PanelWrapperComponent }],
      types: [{ name: 'repeat', component: RepeatSectionComponent }]
    })
  ],
  providers: [],
  entryComponents: [ButtonComponent, FormlyWrapperComponentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const customElement: any =  createCustomElement(ButtonComponent, {injector : this.injector});
    const customElementWrapper: any =  createCustomElement(FormlyWrapperComponentComponent, {injector : this.injector});

    customElements.define('app-button', customElement);
    customElements.define('app-formly-wrapper-component', customElementWrapper);

  }
}
