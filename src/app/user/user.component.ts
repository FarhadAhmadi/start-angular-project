import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter();

  get imagePath(): string {
    return 'assets/users/' + this.user.avatar;
  }

  ngOnInit() {
    console.log('✅ UserComponent initialized for:', this.user.name);
  }

  ngOnChanges() {
    console.log('♻️ UserComponent changed for:', this.user.name);
  }

  onSelectUser(): void {
    this.select.emit(this.user.id);
  }
}
