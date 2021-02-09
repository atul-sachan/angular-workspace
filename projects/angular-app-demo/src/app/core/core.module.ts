import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from '@angular/router';
import { MainSidebarComponent } from './layout/main-sidebar/main-sidebar.component';
import { MessagesDropdownMenuComponent } from './layout/header/messages-dropdown-menu/messages-dropdown-menu.component';
import { NotificationsDropdownMenuComponent } from './layout/header/notifications-dropdown-menu/notifications-dropdown-menu.component';
import { UserDropdownMenuComponent } from './layout/header/user-dropdown-menu/user-dropdown-menu.component';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    MainSidebarComponent,
    MessagesDropdownMenuComponent,
    NotificationsDropdownMenuComponent,
    UserDropdownMenuComponent,
    BreadcrumbComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [LayoutComponent, NotFoundComponent]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<NgModule> {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
