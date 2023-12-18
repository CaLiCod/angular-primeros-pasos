import { NgModule } from '@angular/core';
import { CounterCoponent } from './components/counter/couunter.component';

@NgModule({
  declarations: [
    CounterCoponent
  ],
  exports:[
    CounterCoponent
  ]
})
export class CounterModule{

}
