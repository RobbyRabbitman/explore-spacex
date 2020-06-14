import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppService } from './shared/services/app.service';
import { ThemeService } from './shared/services/theme.service';
import { SPACEX_BASE_URL } from './shared/services/tokens/spacex-base-url.token';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AppService,
    ThemeService,
    {
      provide: SPACEX_BASE_URL,
      useValue: 'https://api.spacex.land/rest',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
