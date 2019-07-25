import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe';
  currentSection = 'recipes';

  onSectionChanged(event: {sectionName: string}){
    this.currentSection = event.sectionName;
  }
}
