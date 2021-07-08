import { Injectable } from '@angular/core';
import { 
    TodoServiceClient
 } from './generated/todo-service_pb_service';
import { EmptyRequest,Todos,Todo } from './generated/todo-service_pb';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  client: TodoServiceClient;
  constructor() {
    this.client = new TodoServiceClient('http://localhost:8080');
  }
  getHero(): Promise <String> {
    return new Promise((resolve, reject) => {
      const req = new EmptyRequest();
      this.client.getTodos(req,(err, response) => {
        if (err) {
          console.log("errrrrrrrrrrrror")
            console.log(err);
          return reject(err);
        }
        console.log(response?.getTodoList);
        resolve("yes");
      });
    });
  }
}