import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  showAddTask: boolean = false;
  subscription?: Subscription;

  text: string = '';
  day: string = '';
  reminder: boolean = false;

  constructor(private ui: UiService) {
    this.subscription = this.ui.onToggle().subscribe(val => this.showAddTask = val)
  }

  ngOnInit(): void {

  }
  onSubmit() {
    if (!this.text) {
      alert('Please add a task')
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    }

    this.onAddTask.emit(newTask);
    this.ui.toggleAddTask();

    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
