import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { CustomPipePipe } from './sared/custom-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormcomponentComponent,
    ReactiveformComponent,
    CustomPipePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
