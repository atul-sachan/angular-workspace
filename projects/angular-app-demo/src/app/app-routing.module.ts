import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // {
      //   path: 'profile',
      //   component: ProfileComponent,
      // },
      // {
      //   path: 'blank',
      //   component: BlankComponent,
      // },
      {
        path: '', loadChildren:() => import("./book-tracker/book-tracker.module").then(m=> m.BookTrackerModule)
      },
    ],
  },
  // {
  //   path: 'welcome',
  //   component: WelcomeComponent,
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  // },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
