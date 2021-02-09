import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { LoginComponent } from './user/components/login/login.component';
import { ProfileComponent } from './user/components/profile/profile.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'events', loadChildren: () => import('./event-tracker/event-tracker.module').then(m => m.EventTrackerModule)},
      { path: 'profile', component: ProfileComponent },
      { path: '404', component: NotFoundComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/events', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
