import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

//cuando trabajamos con modulos este solo estara visible en su scope
//es decir su carpte madre counter/components/counter
@NgModule({
  declarations:[
    CounterComponent
  ],
  exports:[
    CounterComponent
  ]
})

export class CounterModule {}
