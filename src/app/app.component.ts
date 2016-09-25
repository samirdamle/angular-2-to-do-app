import { Component } from '@angular/core';
import { ToDoService } from "./shared/to-do/to-do.service";
import { ToDoListComponent } from "./to-do-List/to-do-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ToDoService]
})
export class AppComponent {
  title = 'My To Do List';
  constructor(){

  }
}
