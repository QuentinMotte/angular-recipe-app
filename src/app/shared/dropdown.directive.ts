import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') show = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click') toggleOpen() {
    this.show = !this.show;
  }
}

