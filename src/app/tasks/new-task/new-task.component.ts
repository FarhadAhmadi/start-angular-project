import {
  Component,
  EventEmitter,
  inject,
  Input,
  input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private taskService = inject(TasksService);

  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDueDate: string = '';

  onCancel(): void {
    this.close.emit();
  }
  onCreateTask(): void {
    if (!this.enteredTitle.trim()) {
      return;
    }

    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate,
      },
      this.userId
    );

    this.close.emit();
  }

  private clearForm(): void {
    this.enteredTitle = '';
    this.enteredSummary = '';
    this.enteredDueDate = '';
  }
}
