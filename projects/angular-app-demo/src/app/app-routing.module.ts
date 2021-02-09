import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      {
        path: 'events',
        loadChildren: () => import('./event-tracker/event-tracker.module').then(m => m.EventTrackerModule)
      },
      { path: '404', component: NotFoundComponent }
    ]
  },
  { path: '', redirectTo: '/app/events', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
