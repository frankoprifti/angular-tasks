import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit {
  @Input() text?: string;
  @Input() color?: string;

  @Output() action = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onClick() {
    this.action.emit();
  }
}
