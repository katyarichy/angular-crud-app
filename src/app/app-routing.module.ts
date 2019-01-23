import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    data: { title: 'Users' }
  },
  {
    path: 'user-details/:id',
    component: UserDetailsComponent,
    data: { title: 'User Details' }
  },
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
