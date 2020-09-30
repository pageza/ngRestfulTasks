import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Setting variables for component
  // apptitle = 'Restful Tasks API';
  newTask: any;
  tasks: any =  [];
  taskSelected: any;
  edit: boolean;
  constructor(private _httpService: HttpService) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    // tslint:disable-next-line:no-unused-expression
    this.taskSelected;
    this.newTask = {title: '', description: ''};
    this.edit = false;
   }


  getTasksFromService() {
    const observable = this._httpService.getTasks();
    observable.subscribe(data => this.tasks = data);
  }
  getOneTaskFromService(task) {
    const observable = this._httpService.getOneTask(task);
    observable.subscribe(data => this.taskSelected = data);
  }
  postTask() {
    const observable = this._httpService.postToServer({data: this.newTask});
    observable.subscribe(data => console.log('posted: ', data));
    this.newTask = {title: '', description: ''};
  }
  deleteTask(taskID) {
    const observable = this._httpService.deleteTask(taskID);
    observable.subscribe(data => console.log('Deleted Task'));
  }
  editTask(taskSelected) {
    const observable = this._httpService.editTask(taskSelected);
    observable.subscribe(data => console.log('updated: ', data));
  }
}
