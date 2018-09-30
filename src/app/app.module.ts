// External
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './/app-routing.module';

// Internal 
import { AppComponent } from './app.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterService } from './services/character.service';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacterDetailComponent,
    CharactersComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    AppRoutingModule,
    HttpModule,

  ],
  providers: [
    CharacterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
