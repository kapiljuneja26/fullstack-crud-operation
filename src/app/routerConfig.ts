// routerConfig.ts

import { Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';
import { LandingComponent } from './components/landing/landing.component';
import { RegisterComponent } from './components/register/register.component';

export const appRoutes: Routes = [
  { path: '',
    component: LandingComponent
  },
  { path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  { path: 'index',
    component: IndexComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'list',
    component:ListComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  }
];

