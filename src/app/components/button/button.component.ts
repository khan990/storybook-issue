import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() buttonText: string;
  @Input() buttonStyle:
        | 'clear'
        | 'outline'
        | 'solid'
        | 'default'
        | undefined = 'solid';
  @Input() disabled = false;
  @Input() expand: 'full' | undefined = undefined;
  @Input() isLoading = false;
  @Output() clickEvent: EventEmitter<MouseEvent> = new EventEmitter<
      MouseEvent
  >();

  constructor() {}

  onClick(event: MouseEvent): void {
    this.clickEvent.emit(event);
  }

}
