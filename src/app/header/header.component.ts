import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() sectionChanged = new EventEmitter<{sectionName: string}>();
    
  onRecipesClick(){
    this.sectionChanged.emit({sectionName: 'recipes'});
  }

  onShopplingListClick(){
    this.sectionChanged.emit({sectionName: 'shopingList'});
  }

}