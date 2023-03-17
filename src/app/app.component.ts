import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-select';

  checkboxValues: boolean[] = [false, false,false,false,false ];

  selectAll: boolean = false;

  selectAllCheckbox() {
  for (let i = 0; i < this.checkboxValues.length; i++) {
    this.checkboxValues[i] = this.selectAll;
  }
  console.log(this.selectAllCheckbox);
}

  updateSelectAll() {
  this.selectAll = this.checkboxValues.every(val => val);
  console.log(this.updateSelectAll)
}


}
