import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',

  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  collapsed = false;

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
