import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, transferArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.scss'
})
export class AssignmentComponent {
  // @Input() assignment: any;
  // @Output() clientsChanged = new EventEmitter<any>();

  @Input() id!: number;
  @Input() assignment: any;
  @Output() clientDropped = new EventEmitter<{ client: any, assignmentId: number }>();


  dropClient(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    // this.clientDropped.emit(); 
  }

  onClientDropped(event: CdkDragDrop<any[]>) {
    const client = event.item.data;
    this.clientDropped.emit({ client, assignmentId: this.id });
  }

}
