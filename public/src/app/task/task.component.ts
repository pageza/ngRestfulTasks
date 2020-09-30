import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() taskToShow: any;
  @Output() taskToEdit = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.taskToShow);
  }
  callParent() {
    this.taskToEdit.emit(this.taskToShow);
  }
}

