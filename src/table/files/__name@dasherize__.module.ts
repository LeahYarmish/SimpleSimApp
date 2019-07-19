import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';

@NgModule({
  declarations: [ <%= classify(name) %>Component ],
})
export class <%= classify(name) %>Module { }