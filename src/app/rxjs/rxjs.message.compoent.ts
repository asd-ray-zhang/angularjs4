import { Component} from '@angular/core';
import {MessageService} from './MessageService';

@Component({
    selector: 'rxjs-test2',
    template: `<span>{{message}}</span> `
})
export class RxjsMessageComponent {
    private message: any = '3232323';
    constructor(public srv: MessageService) {

    }

    ngOnInit() {
         this.srv.get().subscribe((result) => {
            this.message = result;

            console.log('get message:  '+this.message);
        })
    }
}