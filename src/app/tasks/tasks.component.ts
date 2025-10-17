import { Component, inject, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NgFor, NgIf } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData, Task } from './task/task.model';
import { CardComponent } from '../shared/card/card.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NgFor, NewTaskComponent, NgIf, CardComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {

  //#region 

private tasksService = inject(TasksService)
  //#endregion

  @Input({ required: true }) userId!: string;
  @Input({ required: true }) userName!: string;

  isAddingTask: boolean = false;

  get userTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  trackTask(index: number, task: { id: string }): string {
    return task.id;
  }

  onAddNewTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
