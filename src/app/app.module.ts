import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { LivresListComponent } from './livres-list/livres-list.component';
import { LivreComponent } from './livre/livre.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LivresListComponent,
    LivreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
