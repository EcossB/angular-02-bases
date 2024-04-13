import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";


@NgModule({
  declarations:[ //aqui decimos los componentes declarados de este modulo
    HeroComponent,
    ListComponent
  ],
  exports:[ // aqui decimos cuales componentes se van a exportar
    HeroComponent,
    ListComponent
  ],
  imports:[
    CommonModule
  ]
})
export class HeroesModule {}
