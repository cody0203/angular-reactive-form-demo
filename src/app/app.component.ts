import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  isSubmitted: boolean = false;
  data: {};

  handleSubmitForm(data) {
    this.data = data;
    this.isSubmitted = true;
  }
}
