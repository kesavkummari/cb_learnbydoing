import { Component, OnInit } from '@angular/core';

interface SubMenuItem {
  label: string;
}

interface MenuItem {
  label: string;
  subMenuItems: SubMenuItem[];
}

@Component({
  selector: 'app-vertical-menu3',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.css']
})
export class VerticalMenuComponent3 implements OnInit {
  topOffsets: { [key: string]: number } = {
    'Home': 22,
    'Profile': 76,
    'Settings': 130
    // Add more menu items and their corresponding offsets as needed
  };
  menuStructure: MenuItem[] = [
    {
      label: 'Home',
      subMenuItems: [
        { label: 'Sub-Feature 1 for Home' },
        { label: 'Sub-Feature 2 for Home' },
        { label: 'Sub-Feature 3 for Home' }
      ]
    },
    {
      label: 'Profile',
      subMenuItems: [
        { label: 'Sub-Feature A for Profile' },
        { label: 'Sub-Feature B for Profile' },
        { label: 'Sub-Feature C for Profile' }
      ]
    },
    {
      label: 'Settings',
      subMenuItems: [
        { label: 'Sub-Setting 1 for Settings' },
        { label: 'Sub-Setting 2 for Settings' },
        { label: 'Sub-Setting 3 for Settings' }
      ]
    }
    // Add more menu items with their submenus as needed
  ];



  activeSubMenu: number | null = null;
  clickedMenu: number | null = null;
  expandMenu: boolean = false;

  constructor() {
    this.clickedMenu = 0; // Index of the "Home" menu item
    // this.activeSubMenu = 0; // Index of the "Home" menu item
  }

  ngOnInit(): void {
    // ... (other initialization code if needed)
  }

  toggleMenu() {
    if (this.activeSubMenu == null) {
      this.activeSubMenu = this.clickedMenu;
    } else {
      this.activeSubMenu = null;
    }
    this.expandMenu = !this.expandMenu;
  }

  showSubMenu(index: number) {
    this.activeSubMenu = index;
  }

  menuClick(index: number) {
    if (this.clickedMenu != index) {
      this.clickedMenu = index;
    }
    this.activeSubMenu = index;
  }

  hideSubMenu(index: number, event: MouseEvent, subMenu?: boolean) {
    let isHovered: boolean;
    if (subMenu) {
      isHovered = false;
    } else {
      isHovered = this.isHovered(index, event);
    }
    if (!isHovered) {
      if (this.clickedMenu == null || this.expandMenu == false) {
        this.activeSubMenu = null;
      } else {
        this.activeSubMenu = this.clickedMenu;
      }
    }
  }

  isHovered(index: number, event: MouseEvent): boolean {
    const menuElements = document.getElementsByClassName(this.menuStructure[index].label);
    for (let i = 0; i < menuElements.length; i++) {
      const menuElement = menuElements[i] as HTMLElement;
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
}
