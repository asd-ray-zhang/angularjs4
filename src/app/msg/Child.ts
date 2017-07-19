import {Component, EventEmitter, Input, Output} from '@angular/core';
@Component({
    selector: 'child',
    moduleId: 'child_id',
    template: `
        <h2>child {{content}}</h2>
    `
})
export class Child {
    @Input() content:string;
    @Output() updateNumberI:EventEmitter<number> = new EventEmitter();
    i:number = 0;
    constructor() {
        setInterval(()=> {
            this.updateNumberI.emit(++this.i);//往父组件发信息。
        }, 1000)
    }
}