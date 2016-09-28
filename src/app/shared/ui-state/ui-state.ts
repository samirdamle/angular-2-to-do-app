export class UIState {
    private _state = {};
    
    constructor(){}

    setState(key, value){
        this._state = Object.assign({}, this._state, {key: value});
        return Object.assign({}, this._state);
    }
}

export var initialUIState: UIState = new UIState();