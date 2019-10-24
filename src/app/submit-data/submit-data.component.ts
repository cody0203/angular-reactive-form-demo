import { Component, Input } from "@angular/core";

@Component({
  selector: "app-submit-data",
  templateUrl: "./submit-data.component.html",
  styleUrls: ["./submit-data.component.css"]
})
export class SubmitDataComponent {
  @Input() submitData;
  address = ['Tỉnh/Thành phố', 'Quận/Huyện', 'Phường/Xã', 'Địa chỉ']

  sortNull(): any {}
}
