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

  ngOnInit(){ 
    this.taskSelected
    this.newTask = {title:"",description:""}
    this.edit = false
   }


  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      this.tasks = data;
    });
  }
  getOneTaskFromService(task){
    let observable = this._httpService.getOneTask(task);
    observable.subscribe(data => this.taskSelected = data)
  }
  postTask(){
    let observable = this._httpService.postToServer({data: this.newTask});
    observable.subscribe(data => console.log('posted: ', data))
    this.newTask = {title:"", description:""}
  }
  deleteTask(taskID){
    let observable = this._httpService.deleteTask(taskID)
    observable.subscribe(data => console.log('Deleted Task'))
  }
  editTask(){
    let observable = this._httpService.editTask(this.taskSelected)
    observable.subscribe(data => console.log('updated: ', data))
  }
}
