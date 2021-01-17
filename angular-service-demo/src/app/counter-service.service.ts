import { BehaviorSubject  } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  constructor() { }
  count = 0
  $count = new BehaviorSubject(this.count);
  reset() {
    this.count = 0
    this.$count.next(this.count)
  }
  increase(){
    this.$count.next(this.count++)
  }
  decrease() {
    this.$count.next(this.count--)
  }
}
