import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnakecasePipe } from './../snakecase.pipe';

import { PersonagensComponent } from './personagens/personagens.component';
import { PersonagemComponent } from './personagem/personagem.component';
import { HomeComponent } from './home/home.component';
import { PlanetaComponent } from './planeta/planeta.component';
import { PlanetasComponent } from './planetas/planetas.component';


@NgModule({
  declarations: [
    PersonagensComponent,
    PersonagemComponent,
    HomeComponent,
    PlanetaComponent,
    PlanetasComponent,
    SnakecasePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonagensComponent,
    PersonagemComponent,
    HomeComponent,
    PlanetaComponent,
    PlanetasComponent,
  ]
})
export class ComponentesModule { }
