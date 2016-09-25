import { Component, OnInit } from '@angular/core';
import { ToDo } from "../shared/to-do/to-do";
import { ToDoComponent } from "../to-do/to-do.component";
import { ToDoService } from "../shared/to-do/to-do.service";

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  toDos: ToDo[];

  constructor(private toDoService:ToDoService) { }

  ngOnInit() {
    const self = this;

    this.toDoService.getToDos(0, 20).then(function(data){
      self.toDos = data;
    });
    
  }

}
