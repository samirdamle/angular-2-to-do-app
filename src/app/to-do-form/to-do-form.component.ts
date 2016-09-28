import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit {
  newToDo = '';
  newToDoForm = {};
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(val) {
    this.newToDoForm = val;
    console.dir(this.newToDoForm);
  }

  checkForErrors(ref){
    return (!ref.pristine) && (ref.errors) && (ref.errors.required == true);
  }
}
