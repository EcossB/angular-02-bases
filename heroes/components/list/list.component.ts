import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  
  heroNames: string[] = ['SpiderMan', 'Thor', 'Hulk', 'she Hulk', 'IronMan'];
  deletedHero?: string | undefined;

  deleteLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }

}
