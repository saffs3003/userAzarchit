import { Component, Input } from '@angular/core';
import { User, UserService } from '../../../../core/services/user.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent {
  @Input() user?: User;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit() {
    const userid = Number(this.route.snapshot.params['id']);
    this.userService.getUserById(userid).subscribe((data) => {
      this.user = data;
    });
  }
  goBack() {
    this.router.navigate(['/']);
  }
}
