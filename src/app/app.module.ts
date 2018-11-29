import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiPrefix } from './core/interceptors/api-prefix.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { ClientModule } from './modules/client/client.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    ClientModule
  ],
  providers: [
    AppComponent,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefix,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
