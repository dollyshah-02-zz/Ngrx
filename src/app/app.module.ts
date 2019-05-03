import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user.effect';
import { UsersComponent } from './users/users.component';
import { StoreModule } from '@ngrx/store';
import { displayUsers } from './reducers/users.reducers';
import { MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({ userData: displayUsers }),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [EffectsModule, StoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
