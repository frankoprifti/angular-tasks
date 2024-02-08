import { Injectable, Output } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mock-tacks';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:1998/tasks'

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
  deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(`${this.apiUrl}/${id}`)
  }
  updateTaskReminder(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task)
  }
  addTask(task: any): Observable<Task> {
    return this.http.post<Task>(`${this.apiUrl}`, task)
  }
}
