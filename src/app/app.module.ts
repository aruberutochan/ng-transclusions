import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardByAttributeComponent } from './cards/card-by-attribute/card-by-attribute.component';
import { CardByClassComponent } from './cards/card-by-class/card-by-class.component';
import { CardByComponentComponent } from './cards/card-by-component/card-by-component.component';
import { CardDefaultTransclusionComponent } from './cards/card-default-transclusion/card-default-transclusion.component';

@NgModule({
  declarations: [
    AppComponent,
    CardByAttributeComponent,
    CardByClassComponent,
    CardByComponentComponent,
    CardDefaultTransclusionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
