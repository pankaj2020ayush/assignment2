import { Component } from '@angular/core';
import { CdkDragDrop, transferArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';

interface Assignment {
  name: string;
  clients: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  assignments: Assignment[] = [
    { name: 'Assignment 1', clients: ['Client 1', 'Client 2', 'Client 3'] },
    { name: 'Assignment 2', clients: ['Client 4', 'Client 5', 'Client 6'] },
    { name: 'Assignment 3', clients: ['Client 7', 'Client 8', 'Client 9'] }   
  ];
 
  addAssignment() {
    const newAssignment: Assignment = {
      name: `Assignment ${this.assignments.length + 1}`,
      clients: [`Client ${this.assignments.length * 3 + 1}`, `Client ${this.assignments.length * 3 + 2}`, `Client ${this.assignments.length * 3 + 3}`]
    };
    this.assignments.push(newAssignment);
  }
 

  dropAssignment(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.assignments, event.previousIndex, event.currentIndex);
  }

  onClientsChanged() {
    console.log('Client list changed');
  }
  
}
