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
}

  // table.component.ts
// table.component.ts
// app.module.ts or your module file
// table.component.ts

function showTable(tableName: string): void {
    const subTables = document.querySelectorAll('.sub-table');
    subTables.forEach((table) => {
        (table as HTMLElement).style.display = 'none';
    });

    const selectedModulesTable = document.getElementById(`${tableName}-modules-table`) as HTMLElement;
    const selectedContentTable = document.getElementById('module-content-table') as HTMLElement;
    if (selectedModulesTable && selectedContentTable) {
        selectedModulesTable.style.display = 'table';
        selectedContentTable.style.display = 'table';
    }

    const moduleContent = document.querySelector('#module-content-table tbody') as HTMLElement;
    moduleContent.innerHTML = '';
}

function showModuleContent(row: HTMLElement, moduleName: string): void {
    const highlightedRows = document.querySelectorAll('.highlighted');
    highlightedRows.forEach((highlightedRow) => {
        highlightedRow.classList.remove('highlighted');
    });

    row.classList.add('highlighted');

    const moduleContent = document.querySelector('#module-content-table tbody') as HTMLElement;
    moduleContent.innerHTML = `<tr><td class="module-content">Sample content for ${moduleName}</td></tr>`;
}