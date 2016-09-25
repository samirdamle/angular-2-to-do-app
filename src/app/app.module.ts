import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ToDoComponent } from './to-do/to-do.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

class Greeter{
  greet (name: string) {
    return 'Hello ' + name;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Greeter],
  bootstrap: [AppComponent]
})
export class AppModule {
  greeter: Greeter;

  constructor(greeter: Greeter){
    this.greeter = greeter;
  }
 }
