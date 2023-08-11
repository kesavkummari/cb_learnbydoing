import { Component } from '@angular/core';

@Component({
  selector: 'app-vertical-menu2',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.css']
})
export class VerticalMenuComponent2 {
  activeSubMenu: string | null = null;
  clickedMenu: string | null = 'Home';
  expandMenu: boolean = false;


  toggleMenu() {
    if (this.activeSubMenu == null) {
      this.activeSubMenu = this.clickedMenu;
    } else {
      this.activeSubMenu = null;
    }
    this.expandMenu = !this.expandMenu;
  }

  showSubMenu(subMenuId: string) {
    this.activeSubMenu = subMenuId;
  }

  menuClick(menuId: string) {
    if (this.clickedMenu != menuId) {
      this.clickedMenu = menuId;
    }
    this.activeSubMenu = menuId;
  }

  hideSubMenu(subMenuId: string, event: MouseEvent, subMenu?: boolean) {
    let isHovered: boolean;
    if (subMenu) {
      isHovered = false;
    }
    else
      isHovered = this.isHovered(subMenuId, event);
    if (!isHovered) {
      if (this.clickedMenu == null || this.expandMenu == false) {
        this.activeSubMenu = null;
      } else {
        this.activeSubMenu = this.clickedMenu;
      }
    }
  }


  isHovered(subMenuId: string, event: MouseEvent): boolean {
    const menuElement = document.getElementById(subMenuId);
    if (menuElement) {
      const rect = menuElement.getBoundingClientRect();
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      if (
        mouseX >= rect.left &&
        mouseX <= rect.right &&
        mouseY >= rect.top &&
        mouseY <= rect.bottom
      ) {
        return true;
      }
    }
    return false;
  }

  // subMenuFeatures: string[] = [];
  // setSubMenuContent(menuId: string | null) {
  //   if (menuId === 'Home') {
  //     this.subMenuFeatures = [
  //       'Sub-Feature 1 for Home',
  //       'Sub-Feature 2 for Home',
  //       'Sub-Feature 3 for Home'
  //     ];
  //   } else if (menuId === 'Profile') {
  //     this.subMenuFeatures = [
  //       'Sub-Feature A for Profile',
  //       'Sub-Feature B for Profile',
  //       'Sub-Feature C for Profile'
  //     ];
  //   } else if (menuId === 'Settings') {
  //     this.subMenuFeatures = [
  //       'Sub-Setting 1 for Settings',
  //       'Sub-Setting 2 for Settings',
  //       'Sub-Setting 3 for Settings'
  //     ];
  //   }
  // }
}
