import { Component } from '@angular/core';

@Component({
  selector: 'app-contents-component',
  templateUrl: './contents-component.component.html',
  styleUrls: ['./contents-component.component.css']
})
export class ContentsComponentComponent {
  topic!:string;
  youtube!:string;
  w3school!:string;
  description!:string;
}
