import { Component } from '@angular/core';

@Component({
  selector: 'app-middle-segment',
  templateUrl: './middle-segment.component.html',
  styleUrls: ['./middle-segment.component.css']
})
export class MiddleSegmentComponent {
  images: string[] = [
    '../assets/Screenshot (5).png',
    '../assets/download.jfif',
    '../assets/whopper.jfif',
    '../assets/EP_05102016_PeruvianStyleRoastChicken_recipe_.jpg',
    '../assets/combo offer.jfif',
    '../assets/Fried-Chicken-Wing.jpg',
    '../assets/mojito.jpg',
    '../assets/desert.jpg',
  ];
}
