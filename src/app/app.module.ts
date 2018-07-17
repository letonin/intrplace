import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CountryselectComponent } from './countryselect/countryselect.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryselectComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCZsassL68RezQtk2b6VpIm7ZAJpRu9CvU'
    }),
    AgmSnazzyInfoWindowModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
