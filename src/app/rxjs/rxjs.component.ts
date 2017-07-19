import { Component,EventEmitter,Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {MessageService} from './MessageService';

// @Component({
//   selector: 'rxjs-test',
//   templateUrl: './rxjs.component.html'
// })
// export class RxjsComponent {
//   name = 'ray.zhang';
// }



@Component({
    selector: 'rxjs-test',
    template: `<input type="text"> `
})

export class RxjsComponent {
    private alive: boolean = true;
    @Output() changed:EventEmitter<number> = new EventEmitter<number>();
    constructor(public srv: MessageService) {

    }
    ngOnInit() {
        const node = document.querySelector('input[type=text]');


        // 第二个参数 input 是事件名，对于input元素有一个 oninput 事件用于接受用户输入
        const input$ = Observable.fromEvent(node, 'input');//创建一个监听者，并定阅input事件
        // input$.subscribe({//定阅一个事件
        //   next: (event: any) => console.log(`You just typed ${event.target.value}!`),//当输入一个事件，会调用next
        //   error: (err) => console.log(`Oops... ${err}`),//异常处理
        //   complete: () => console.log(`Complete!`)//完成处理。
        // });

        /**
         *  Observable对触发 oninput 事件作出反应，将值以参数的形式传递给observer的 next()。
            map() 根据 event.target.value 的内容返回一个新的 Observable，并调用 next() 传递给下一个observer。
            filter() 如果值长度 >=2 的话，则返回一个新的 Observable，并调用 next() 传递给下一个observer。
            最后，将结果传递给 subscribe 订阅块。
            你只要记住每一次 operator 都会返回一个新的 Observable，不管 operator 有多少个，最终只有最后一个 Observable 会被订阅。
            如下：
         */
        input$.takeWhile(() => this.alive)//通过takeWhile来判断是否跑定阅的next||complete，若complete，退出事件。
            .map((event: any) => event.target.value)
            .filter(value => value.length >= 2)//过滤条件
            .subscribe({
                next: (value=>{
                    this.srv.send('value:  '+value);
                    console.log(value);
                }),
                complete: ()=> console.log('complement....')
            });//value => { console.log(value); })//定阅

        const click$ = Observable.fromEvent(node, 'click');//创建一个监听者，并定阅input事件
        click$.subscribe({
            next: (event: any) => {
                console.log('click');
                this.changed.emit(22222);
            },
            error: (err) => console.error('click error'),
            complete: () => console.log('complement....')
        });

        setTimeout(() => {
            //debugger;
            console.log('settimeout.....');
            //this.alive = false;
        }, 10000);
    }

    ngOnDestroy() {
        console.log('ngOnDestroy......');
        this.alive = false;
    }
}