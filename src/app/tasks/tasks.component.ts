import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NgFor],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) userName!: string;

  tasks = [
    {
      id: '1',
      userId: 'u1',
      title: 'Task 1',
      summary: 'Description for Task 1',
      dueDate: '2024-07-01',
    },
    {
      id: '2',
      userId: 'u1',
      title: 'Task 2',
      summary: 'Prepare meeting notes for project Alpha',
      dueDate: '2024-07-05',
    },
    {
      id: '3',
      userId: 'u2',
      title: 'Task 3',
      summary: 'Fix UI bugs in user dashboard',
      dueDate: '2024-07-10',
    },
    {
      id: '4',
      userId: 'u2',
      title: 'Task 4',
      summary: 'Write unit tests for authentication module',
      dueDate: '2024-07-12',
    },
    {
      id: '5',
      userId: 'u3',
      title: 'Task 5',
      summary: 'Create API documentation for backend services',
      dueDate: '2024-07-15',
    },
    {
      id: '6',
      userId: 'u3',
      title: 'Task 6',
      summary: 'Review pull requests and merge changes',
      dueDate: '2024-07-18',
    },
    {
      id: '7',
      userId: 'u4',
      title: 'Task 7',
      summary: 'Update Angular components for new design',
      dueDate: '2024-07-20',
    },
    {
      id: '8',
      userId: 'u4',
      title: 'Task 8',
      summary: 'Optimize database queries for better performance',
      dueDate: '2024-07-25',
    },
    {
      id: '9',
      userId: 'u5',
      title: 'Task 9',
      summary: 'Deploy new version to staging environment',
      dueDate: '2024-07-28',
    },
    {
      id: '10',
      userId: 'u5',
      title: 'Task 10',
      summary: 'Conduct code review for frontend team',
      dueDate: '2024-07-30',
    },
  ];

  get userTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  trackTask(index: number, task: { id: string }): string {
    return task.id;
  }

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
