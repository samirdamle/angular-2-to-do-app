import { Injectable } from '@angular/core';
import { ToDo } from './to-do'; 

@Injectable()
export class ToDoService {
  toDos:ToDo[];

  constructor() { 
    this.populateToDos();
  }

  private populateToDos(){
    this.toDos = [
      {
        title: 'Get milk',
        completed: false
      },
      {
        title: 'Feed dog',
        completed: false
      },
      {
        title: 'Watch TV',
        completed: true
      },
      {
        title: 'Play with dog',
        completed: false
      },
      {
        title: 'Read book',
        completed: false
      },
      {
        title: 'Check mail',
        completed: true
      }
    ];
  }

  getToDos(skip: number, limit:number){
    skip = skip || 0;
    limit = limit || 10;
    const sendToDos = this.toDos.slice(skip, Math.min(skip + limit, this.toDos.length));
    //const sendToDos = this.toDos.slice(0, 3);
    return Promise.resolve(sendToDos);
  }

}
