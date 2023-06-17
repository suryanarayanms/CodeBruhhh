import { Component } from '@angular/core';
import { JavaContentList, advanceJavaContentList, mySQLList, channels, OS } from '../contents-component/contents';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  Java=JavaContentList;
  advanceJava= advanceJavaContentList;
  mySQL = mySQLList;
  channels=channels;
  OS=OS;
}

