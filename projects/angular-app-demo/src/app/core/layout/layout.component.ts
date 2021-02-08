import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public sidebarMenuOpened = true;
  public controlSidebarMenuOpened = false;
  @ViewChild('contentWrapper', { static: false }) contentWrapper: ElementRef;
  
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.removeClass(document.querySelector('app-root'), 'login-page');
    this.renderer.removeClass(document.querySelector('app-root'),'register-page');
  }

  mainSidebarHeight(height: any) {
    // this.renderer.setStyle(this.contentWrapper.nativeElement,'min-height', height - 114 + 'px');
  }

  toggleControlSidebar() {
    debugger;
    if (this.controlSidebarMenuOpened) {
      this.renderer.addClass(document.querySelector('app-root'), 'control-sidebar-slide-open');
      this.controlSidebarMenuOpened = false;
    } else {
      this.renderer.removeClass(document.querySelector('app-root'), 'control-sidebar-slide-open');
      this.controlSidebarMenuOpened = true;
    }
  }

  toggleMenuSidebar(){
    if (this.sidebarMenuOpened) {
      this.renderer.removeClass(document.querySelector('app-root'), 'sidebar-open');
      this.renderer.addClass(document.querySelector('app-root'), 'sidebar-collapse');
      this.sidebarMenuOpened = false;
    } else {
      this.renderer.removeClass(document.querySelector('app-root'), 'sidebar-collapse');
      this.renderer.addClass(document.querySelector('app-root'), 'sidebar-open');
      this.sidebarMenuOpened = true;
    }
  }
}
