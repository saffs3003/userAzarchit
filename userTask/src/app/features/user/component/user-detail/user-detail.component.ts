import { Component, Input } from '@angular/core';
import { User, UserService } from '../../../../core/services/user.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [NgIf],
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
  isloading = false;
  iserror = false;

  ngOnInit() {
    this.isloading = true;
    const userid = Number(this.route.snapshot.params['id']);
    this.userService.getUserById(userid).subscribe({
      next: (data) => {
        this.user = data;
        this.isloading = false;
      },
      error: (error) => {
        console.error('Error fetching user:', error);
        this.isloading = false;
        this.iserror = true;
      },
    });
  }
  goBack() {
    this.router.navigate(['/']);
  }
  retry() {
    this.ngOnInit();
  }
}
