import { Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersListComponent
  },
  {
    path: 'users/create',
    component: UsersFormComponent
  },
  {
    path: 'users/edit/:id',
    component: UsersFormComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }

];
