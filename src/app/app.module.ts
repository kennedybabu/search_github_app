import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserReposComponent } from './user-repos/user-repos.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    UserProfileComponent,
    UserReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
