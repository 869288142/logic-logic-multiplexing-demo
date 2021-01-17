import { Component } from '@angular/core';
import { CounterService } from './counter-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor( counterService: CounterService) {
    this.counterService = counterService
    this.$count = this.counterService.$count
  }
  counterService: CounterService
  $count
  reset() {
    this.counterService.reset()
  }
  increase(){
    this.counterService.increase()
  }
  decrease() {
    this.counterService.decrease()
  }
}
