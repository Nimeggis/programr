import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'programr';
  button = 'Open';
  show = false;
  showTitle() {
    if(this.show == false){
      this.show = true;
      this.button = 'Close'
    }else{
      this.show = false;
      this.button = 'Open'
    }
  }

  landing = 'Nice to see you';
  title = 'Welcome to';
  developers = 'Programr';
}
