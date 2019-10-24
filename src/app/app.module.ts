import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material'
import { registerLocaleData } from '@angular/common';

import { AppComponent } from "./app.component";
import { NameEditorComponent } from "./name-editor/name-editor.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SubmitDataComponent } from './submit-data/submit-data.component';
import localeVi from '@angular/common/locales/vi';
registerLocaleData(localeVi, 'vi');

@NgModule({
  declarations: [AppComponent, NameEditorComponent, SubmitDataComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule    
  ],
  providers: [{provide: LOCALE_ID, useValue: 'vi'} ],
  bootstrap: [AppComponent]
})
export class AppModule {}
