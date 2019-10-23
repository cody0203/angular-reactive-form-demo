import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-submit-data",
  templateUrl: "./submit-data.component.html",
  styleUrls: ["./submit-data.component.css"]
})
export class SubmitDataComponent implements OnInit {
  @Input() submitData;

  ngOnInit() {
    console.log(this.submitData);
  }
}
