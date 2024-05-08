import { Component } from '@angular/core';
import { StoreData } from 'src/app/Models/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  storeData: StoreData;
  statusOfImage?: boolean;
  constructor() {
    this.storeData = new StoreData("Tahaluf", "https://th.bing.com/th/id/OIP.HHpagHxJksDXaM-8tSIAVQAAAA?rs=1&pid=ImgDetMain", ['Irbid', 'Amman', 'Egypt', 'Abu dhabi'])
  }

  toggleImage() {
    this.statusOfImage = !this.statusOfImage;
  }
}
