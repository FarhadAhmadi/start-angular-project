import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancelNewTask = new EventEmitter<void>();
  @Output() createNewTask = new EventEmitter<NewTaskData>();

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDueDate: string = '';

  onCancel() {
    this.cancelNewTask.emit();
  }
  onCreateTask() {
    if (!this.enteredTitle.trim()) {
      return;
    }

    this.createNewTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    });

    // reset signals
    this.enteredTitle = '';
    this.enteredSummary = '';
    this.enteredDueDate = '';
  }
}
