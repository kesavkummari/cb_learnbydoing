// table.component.ts
import { Component, NgModule } from '@angular/core';

@Component({
    selector: 'course-table',
    templateUrl: './course-table.component.html',
    styleUrls: ['./course-table.component.css']
})
export class CouseTableComponent {
    isModuleContentVisible: boolean = false;
    selectedModuleName: string | null = null; 

  // table.component.ts
// table.component.ts
// app.module.ts or your module file
// table.component.ts

    
    osModules: string[] = [
        'OS Module 1',
        'OS Module 2',
        'OS Module 3',
        'OS Module 4',
        'OS Module 5'
    ];

    awsModules: string[] = [
        'AWS Module 1',
        'AWS Module 2',
        'AWS Module 3',
        'AWS Module 4',
        'AWS Module 5'
    ];

    devopsModules: string[] = [
        'DevOps Module 1',
        'DevOps Module 2',
        'DevOps Module 3',
        'DevOps Module 4',
        'DevOps Module 5'
    ];

    showTable(tableName: string): void {
        // Hide all sub-tables
        const subTables = document.querySelectorAll('.sub-table') as NodeListOf<HTMLElement>;
        subTables.forEach((table) => {
            table.style.display = 'none';
        });

        // Show the selected sub-table
        const selectedModulesTable = document.getElementById(`${tableName}-modules-table`);
        if (selectedModulesTable) {
            selectedModulesTable.style.display = 'table';
        }

        // Clear the module content
        const moduleContent = document.querySelector('#module-content-table tbody') as HTMLElement;
        moduleContent.innerHTML = '';

        this.isModuleContentVisible = false;
        this.selectedModuleName = null;
    }

    showModuleContent(moduleName: string): void {
        // Remove highlighting from all rows
        const highlightedRows = document.querySelectorAll('.highlighted');
        highlightedRows.forEach((highlightedRow) => {
            highlightedRow.classList.remove('highlighted');
        });

        // Highlight the selected row
        const moduleContent = document.querySelector('#module-content-table tbody') as HTMLElement;
        moduleContent.innerHTML = `<tr><td class="module-content">${this.getSampleData(moduleName)}</td></tr>`;
        
        this.selectedModuleName = moduleName;
        this.isModuleContentVisible = true;
    }

    getSampleData(moduleName: string): string {
        // Add sample data based on the selected module
        switch (moduleName) {
            case 'OS Module 1':
                return 'Sample data for OS Module 1';
            case 'OS Module 2':
                return 'Sample data for OS Module 2';
            case 'AWS Module 1':
                return 'Sample data for AWS Module 1';
            case 'AWS Module 2':
                return 'Sample data for AWS Module 2';
            case 'DevOps Module 1':
                return 'Sample data for DevOps Module 1';
            case 'DevOps Module 2':
                return 'Sample data for DevOps Module 2';
            default:
                return '';
        }
    }
}

