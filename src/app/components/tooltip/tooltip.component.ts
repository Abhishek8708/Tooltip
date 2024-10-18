import { NgClass, NgIf } from '@angular/common';
import { Component, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
  ],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {
  @Input() hoverTooltipText: string = '';
  @Input() clickTooltipText: string = '';
  isTooltipVisible: boolean = false;
  tooltipMessage: string = '';

  constructor(private elementRef: ElementRef) {}

  toggleTooltip() {
    if (this.isTooltipVisible && this.tooltipMessage === this.clickTooltipText) {
      this.isTooltipVisible = false;
    } else {
      this.tooltipMessage = this.clickTooltipText;
      this.isTooltipVisible = true;
    }
  }

  showTooltip() {
    if (!this.isTooltipVisible) {
      this.tooltipMessage = this.hoverTooltipText;
      this.isTooltipVisible = true;
    }
  }

  hideTooltip() {
    if (this.tooltipMessage === this.hoverTooltipText) {
      this.isTooltipVisible = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (this.tooltipMessage === this.clickTooltipText && !this.elementRef.nativeElement.contains(event.target)) {
      this.isTooltipVisible = false;
    }
  }
}
