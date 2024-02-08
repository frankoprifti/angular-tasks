import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent implements OnInit {
  @Input() task?: Task;
  @Output() action = new EventEmitter();
  @Output() toggleAction = new EventEmitter<Task>();

  faTimes = faTimes;
  constructor() {

  }
  ngOnInit(): void {

  }

  deleteTask() {
    this.action.emit();
  }
  onToggle(task: Task) {
    this.toggleAction.emit(task)
  }
}
