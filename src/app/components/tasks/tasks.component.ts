import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];


  constructor(private taskService: TaskService) {

  }
  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks =>
      this.tasks = tasks);
  }
  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== id))
  }
  toggleAction(task: Task): void {
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe()
  }
  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe((newTask) => this.tasks.push(newTask));
  }
}
