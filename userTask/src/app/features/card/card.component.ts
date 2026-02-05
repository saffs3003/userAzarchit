import { Component } from '@angular/core';
import { User } from '../../core/services/user.service';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() user?: User;
  constructor(private router: Router) {}

  userDetails(userId: number) {
    this.router.navigate(['/detail', userId]);
  }
}
