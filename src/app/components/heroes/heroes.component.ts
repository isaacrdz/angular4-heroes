import { Component, OnInit } from '@angular/core';

//service
import { HeroesService, Heroe } from '../../services/heroes.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];


  constructor(private _hereosService: HeroesService,
              private router:Router) {
    // console.log("constructor");
  }
  ngOnInit() {
    this.heroes = this._hereosService.getHeroes();

    // console.log(this.heroes);
  }
  verHeroe(idx:number){
    this.router.navigate(['/heroe', idx]);
  }
}
