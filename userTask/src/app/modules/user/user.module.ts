import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
import { UserTableComponent } from '../../features/user/component/user-table/user-table.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
];
@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UserTableComponent],
})
export class UserModule {}
