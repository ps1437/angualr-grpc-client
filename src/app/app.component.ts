import { Component } from '@angular/core';
import {EmptyRequest,Todo,Todos} from './generated/todo-service_pb';
import {TodoService,TodoServiceClient} from './generated/todo-service_pb_service';
import {grpc} from "@improbable-eng/grpc-web";
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grpc-client-ng';
  constructor(private appsevie: ApiService){}

  ngOnInit() {
this.appsevie.getHero();
  }
}
