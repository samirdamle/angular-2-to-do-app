import { Component, OnInit } from '@angular/core';
import { ToDo } from '../shared/to-do/to-do';

@Component({
  //moduleId: module.id,
  selector: 'to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor(toDo:ToDo) {
    
   }

  ngOnInit() {
  }

}
