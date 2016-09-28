import { Injectable } from '@angular/core';
import { UIState, initialUIState } from '../ui-state/ui-state';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class StoreService {
  private _uiState: Subject<UIState> = new BehaviorSubject(initialUIState);

  constructor() { }

  updateUIState(key, value): Observable<any> {
    //this._uiState.setState(1, false);
    return new Observable();
  }

}
