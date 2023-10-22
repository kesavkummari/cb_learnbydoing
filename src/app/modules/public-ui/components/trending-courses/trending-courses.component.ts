import { Component } from '@angular/core';

@Component({
  selector: 'trending-courses',
  templateUrl: './trending-courses.component.html',
  styleUrls: ['./trending-courses.component.css']
})
export class TrendingCoursesComponent {
  toggleTable() {
    const tableContainer = document.getElementById("table-container");
    const tableIntenseContainer = document.getElementById("table-container-intense");
    if (tableContainer) {
      // Toggle the visibility of the table
      if (tableContainer.style.display === "none" || tableContainer.style.display === "") {
        tableContainer.style.display = "block";
        if(tableIntenseContainer)
        tableIntenseContainer.style.display = "none";
      } else {
        tableContainer.style.display = "none";
        if(tableIntenseContainer)
        tableIntenseContainer.style.display = "none";
      }
    }
  } 
  toggleTable_intense() {
  const tableContainer = document.getElementById("table-container");
    const tableIntenseContainer = document.getElementById("table-container-intense");
    console.log("Intense Table Function")
    if (tableIntenseContainer) {
      // Toggle the visibility of the table
      if (tableIntenseContainer.style.display === "none" || tableIntenseContainer.style.display === "") {
        tableIntenseContainer.style.display = "block";
        if(tableContainer)
        tableContainer.style.display="none";
      } else {
        tableIntenseContainer.style.display = "none";
        if(tableContainer)
        tableContainer.style.display="none"
      }
    }
  } 
  
}