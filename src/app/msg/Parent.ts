import {Component,Input} from '@angular/core';
@Component({
    selector: 'parent',
    moduleId: 'parent_id',
    template: `
        <h1>parent{{j}}</h1>
        <child (updateNumberI)="numberIChange($event)" [content]="i"></child>
    `
})
export class Parent {

    i:number = 0;
    j:number = 0;

    constructor() {
        setInterval(()=> {
            this.i++;//[content]="i"给子组件传递消息。
        }, 1000)
    }

    numberIChange(j:number){//处理子组件的信息
        this.j = j;
    }
}