import { Component, OnInit } from '@angular/core';

interface SubMenuItem {
  label: string;
  active?: boolean; // New property
  routerLink?: string; // New property for router link
}

interface MenuItem {
  label: string;
  active?: boolean; // New property
  subMenuItems?: SubMenuItem[]; // Updated property
  routerLink?: string; // New property for router link
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
  menuStructure: MenuItem[] = [];



  activeSubMenu: number | null = null;
  activeSubMenuItem: number | null = null;
  activeMenu: number | null = null;
  expandMenu: boolean = false;
  initialMenuStructure: MenuItem[] = [];


  constructor() {

    this.activeMenu = 0; // Index of the "Home" menu item

  }

  ngOnInit(): void {
    // ... (other initialization code if needed)
    this.menuStructure = [
      {
        label: 'Home',
        active: true,
        subMenuItems: [
          { label: 'Sub-Feature 1 for Home', routerLink: '#', active: true },
          { label: 'Sub-Feature 2 for Home', routerLink: '#' },
          { label: 'Sub-Feature 3 for Home', routerLink: '#' }
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
    this.initialMenuStructure = this.menuStructure
  }

  // Function to handle submenu item click
  subMenuItemClick(menuIndex: number, subMenuIndex: number, routerLink?: string) {
    console.log("submenuitemclick")
    console.log("menuindex" + menuIndex)
    console.log("submenuindex" + subMenuIndex)

    this.menuStructure.forEach(menu => {
      if (menu?.subMenuItems) {
        menu.subMenuItems.forEach(subMenuItem => {
          subMenuItem.active = false; // Reset active status for all submenu items
        });
      }
      menu.active = false; // Reset active status for all main menu items
    });

    const menu = this.menuStructure[menuIndex];
    if (menu?.subMenuItems) {
      menu.subMenuItems.forEach((subMenuItem, index) => {
        subMenuItem.active = index === subMenuIndex;
      });
    }
    menu.active = true;
    console.log("menuStructure==>", this.menuStructure)
    this.activeMenu = menuIndex;
    if (routerLink) {
      // Navigate to the specified router link if provided
    }
  }


  toggleMenu() {
    if (this.activeSubMenu == null) {
      this.activeSubMenu = this.activeMenu;
    } else {
      this.activeSubMenu = null;
    }
    this.expandMenu = !this.expandMenu;
  }

  showSubMenu(index: number) {
    this.activeSubMenu = index;
  }

  menuClick(index: number) {
    if (this.activeMenu != index) {
      this.activeMenu = index;
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
      if (this.activeMenu == null || this.expandMenu == false) {
        this.activeSubMenu = null;
      } else {
        this.activeSubMenu = this.activeMenu;
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
