import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {  }

  postToServer(newTask){
    return this._http.post('/tasks', newTask)
  }

  getTasks(){
    return this._http.get('/tasks')
  }

  getOneTask(task){
    return this._http.get('/tasks/'+task)
  }
  deleteTask(taskID){
    return this._http.delete('tasks/'+taskID)
  }
  editTask(task){
    console.log(task._id);
    
    return this._http.put('/tasks/'+task._id, task)
  }
}
