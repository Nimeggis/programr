import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  show = false;
  showTitle() {
    if(this.show == false){
      this.show = true;
      this.button = 'Uh Nice...'
    }else{
      this.show = false;
      this.button = 'Open again'
    }
  }
  
  button = 'Click Me...';
  landing = 'Nice to see you';
  title = 'Welcome to';
  developers = 'Programr';
}
