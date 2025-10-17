import { Injectable } from '@angular/core';
import { type NewTaskData } from './task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = [
    {
      id: '1',
      userId: 'u1',
      title: 'Setup project repository',
      summary: 'Initialize Git repository and configure project structure',
      dueDate: '2024-07-01',
    },
    {
      id: '2',
      userId: 'u1',
      title: 'Create login page',
      summary: 'Design and implement user login page with form validation',
      dueDate: '2024-07-02',
    },
    {
      id: '3',
      userId: 'u2',
      title: 'Implement authentication API',
      summary: 'Develop backend endpoints for user login and registration',
      dueDate: '2024-07-03',
    },
    {
      id: '4',
      userId: 'u2',
      title: 'Write unit tests for login',
      summary: 'Create unit tests for login functionality using Jest',
      dueDate: '2024-07-04',
    },
    {
      id: '5',
      userId: 'u3',
      title: 'Prepare project documentation',
      summary: 'Document project setup, architecture, and APIs',
      dueDate: '2024-07-05',
    },
    {
      id: '6',
      userId: 'u3',
      title: 'Code review for feature branch',
      summary: 'Review pull requests and provide feedback on new features',
      dueDate: '2024-07-06',
    },
    {
      id: '7',
      userId: 'u4',
      title: 'Optimize database queries',
      summary: 'Improve performance of user-related queries',
      dueDate: '2024-07-07',
    },
    {
      id: '8',
      userId: 'u4',
      title: 'Fix UI bugs',
      summary: 'Resolve layout issues on dashboard and profile pages',
      dueDate: '2024-07-08',
    },
    {
      id: '9',
      userId: 'u5',
      title: 'Prepare presentation for client',
      summary: 'Create slides for upcoming project demo',
      dueDate: '2024-07-09',
    },
    {
      id: '10',
      userId: 'u5',
      title: 'Deploy to staging environment',
      summary: 'Push latest build to staging server for testing',
      dueDate: '2024-07-10',
    },
    {
      id: '11',
      userId: 'u1',
      title: 'Design landing page',
      summary: 'Create mockups and layout for new landing page',
      dueDate: '2024-07-11',
    },
    {
      id: '12',
      userId: 'u1',
      title: 'Implement search feature',
      summary: 'Develop search functionality with filters and sorting',
      dueDate: '2024-07-12',
    },
    {
      id: '13',
      userId: 'u2',
      title: 'Fix backend bugs',
      summary: 'Resolve API errors and handle edge cases',
      dueDate: '2024-07-13',
    },
    {
      id: '14',
      userId: 'u2',
      title: 'Create integration tests',
      summary: 'Write tests for API endpoints integration',
      dueDate: '2024-07-14',
    },
    {
      id: '15',
      userId: 'u3',
      title: 'Update API documentation',
      summary: 'Add recent API changes to documentation',
      dueDate: '2024-07-15',
    },
    {
      id: '16',
      userId: 'u3',
      title: 'Conduct team meeting',
      summary: 'Discuss project progress and blockers',
      dueDate: '2024-07-16',
    },
    {
      id: '17',
      userId: 'u4',
      title: 'Refactor authentication module',
      summary: 'Improve code readability and maintainability',
      dueDate: '2024-07-17',
    },
    {
      id: '18',
      userId: 'u4',
      title: 'Review security vulnerabilities',
      summary: 'Audit code and dependencies for security issues',
      dueDate: '2024-07-18',
    },
    {
      id: '19',
      userId: 'u5',
      title: 'Deploy to production',
      summary: 'Push tested build to production server',
      dueDate: '2024-07-19',
    },
    {
      id: '20',
      userId: 'u5',
      title: 'Client follow-up',
      summary: 'Check client feedback and answer questions',
      dueDate: '2024-07-20',
    },
    {
      id: '21',
      userId: 'u1',
      title: 'Implement user profile page',
      summary: 'Develop profile editing and viewing functionality',
      dueDate: '2024-07-21',
    },
    {
      id: '22',
      userId: 'u1',
      title: 'Fix responsive layout',
      summary: 'Ensure UI works on mobile and tablet screens',
      dueDate: '2024-07-22',
    },
    {
      id: '23',
      userId: 'u2',
      title: 'Write e2e tests',
      summary: 'Create end-to-end tests for main user flows',
      dueDate: '2024-07-23',
    },
    {
      id: '24',
      userId: 'u2',
      title: 'Optimize images',
      summary: 'Compress and optimize images for faster load',
      dueDate: '2024-07-24',
    },
    {
      id: '25',
      userId: 'u3',
      title: 'Prepare sprint report',
      summary: 'Summarize completed tasks and upcoming items',
      dueDate: '2024-07-25',
    },
    {
      id: '26',
      userId: 'u3',
      title: 'Refactor navigation menu',
      summary: 'Clean up menu code and improve accessibility',
      dueDate: '2024-07-26',
    },
    {
      id: '27',
      userId: 'u4',
      title: 'Integrate payment gateway',
      summary: 'Connect Stripe API for online payments',
      dueDate: '2024-07-27',
    },
    {
      id: '28',
      userId: 'u4',
      title: 'Conduct usability testing',
      summary: 'Observe users interacting with new features',
      dueDate: '2024-07-28',
    },
    {
      id: '29',
      userId: 'u5',
      title: 'Set up monitoring',
      summary: 'Configure logs and alerts for production services',
      dueDate: '2024-07-29',
    },
    {
      id: '30',
      userId: 'u5',
      title: 'Team retrospective',
      summary: 'Discuss what went well and improvements for next sprint',
      dueDate: '2024-07-30',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
