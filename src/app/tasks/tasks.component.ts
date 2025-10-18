import { Component, inject, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
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
