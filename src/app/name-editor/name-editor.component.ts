import { Component, Output, EventEmitter } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormArray } from "@angular/forms";

@Component({
  selector: "app-name-editor",
  templateUrl: "./name-editor.component.html",
  styleUrls: ["./name-editor.component.css"]
})
export class NameEditorComponent {
  constructor(private fb: FormBuilder) {}

  @Output() submitForm = new EventEmitter();

  companyProfile = this.fb.group({
    companyName: ["", Validators.required],
    website: ["", Validators.required],
    description: ["", [Validators.required, Validators.minLength(100)]],
    address: this.fb.group({
      city: ["", Validators.required],
      district: ["", Validators.required],
      ward: ["", Validators.required],
      address: ["", Validators.required]
    }),
    welfares: this.fb.array([this.fb.control("", Validators.required)])
  });

  get welfares() {
    return this.companyProfile.get("welfares") as FormArray;
  }

  addWelfare() {
    this.welfares.push(this.fb.control(""));
  }

  onSubmit() {
    let data = { ...this.companyProfile.value };
    this.submitForm.emit(data);
  }
}
