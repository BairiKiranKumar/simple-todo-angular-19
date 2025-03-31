import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tasks',
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  tasks = [
    {
      id: 1, taskName: 'Task 1', isCompleted: false, isEditing: false
    },
    {
      id: 2, taskName: 'Task 2', isCompleted: false, isEditing: false
    },
    {
      id: 3, taskName: 'Task 3', isCompleted: true, isEditing: false
    }
  ]

  taskEntered: string = ''

  addTask(): void {
    const newTask = {
      id: this.tasks.length + 1,
      taskName: this.taskEntered,
      isCompleted: false,
      isEditing: false
    }
    this.tasks.push(newTask)
  }

  completeTask(task: any): void {
    task.isCompleted = !task.isCompleted
  }

  deleteTask(task: any): void {
    this.tasks = this.tasks.filter((t) => t.id !== task.id)
  }

  editTaskName(task: any): void {
    task.isEditing = !task.isEditing
  }
}
