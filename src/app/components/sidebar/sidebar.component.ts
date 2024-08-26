import { Component, Input, OnInit } from '@angular/core';
import { MENU_ITEMS, MenuItem } from './sidebar-constant';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() isSidebarOpen: boolean = false;

  /**
   * Defines the menu items to be displayed in the sidebar.
   */
  menuItems: MenuItem[] = MENU_ITEMS;
  constructor() {}

  ngOnInit() {}

  /**
   * Toggles the visibility state of the sidebar.
   * If the sidebar is open, it will be closed, and vice versa.
   */
  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
