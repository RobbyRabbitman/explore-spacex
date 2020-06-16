import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppService } from './shared/services/app.service';
import { ThemeService } from './shared/services/theme.service';
import { SPACEX_BASE_URL } from './shared/services/tokens/spacex-base-url.token';
import { AssetsService } from './shared/services/assets.service';
import { LaunchesService } from './shared/services/launches.service';
import { RocketService } from './shared/services/rocket.service';
import { RoutingService } from './shared/routes/routing.service';

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
    LaunchesService,
    RocketService,
    {
      provide: SPACEX_BASE_URL,
      useValue: 'https://api.spacex.land/rest',
    },
    AssetsService,
    RoutingService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
