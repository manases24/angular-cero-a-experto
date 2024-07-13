import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from '../app/heroes/heroes.module';
import { AfaModule } from '../app/afa/afa.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    AfaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
