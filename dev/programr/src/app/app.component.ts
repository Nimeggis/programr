import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'programr';
  show = false;
  showTitle() {
    if(this.show == false){
      this.show = true;
    }else{
      this.show = false;
    }
  }

  landing = 'Nice to see you';
  title = 'Welcome to';
  developers = 'Programr';
}
