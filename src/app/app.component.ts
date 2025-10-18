import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // imports: [HeaderComponent, UserComponent, TasksComponent , NgIf , NgFor],
})
export class AppComponent {
  users = DUMMY_USERS;

  selectedUserId!: string;
  selectedUserName!: string;

  get hasName(): boolean {
    return !!this.selectedUserName?.trim();
  }

  OnSelectUser(id: string): void {
    this.selectedUserId = id;
    this.selectedUserName = this.users.find((u) => u.id === id)?.name ?? '';
  }

  changeUserName(): void {
    console.log('Before change:', this.users);
    this.users[0] = { ...this.users[0], name: 'Changed Name' };
    console.log('After change:', this.users);
  }
}
