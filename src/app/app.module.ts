import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from "./app.component";
import { NameEditorComponent } from "./name-editor/name-editor.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SubmitDataComponent } from './submit-data/submit-data.component';

@NgModule({
  declarations: [AppComponent, NameEditorComponent, SubmitDataComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
