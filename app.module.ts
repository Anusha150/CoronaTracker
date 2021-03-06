import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
  
import { AppComponent } from './app.component';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
  
import { HttpClientModule } from '@angular/common/http';  
import { MatCardModule } from '@angular/material/card';  
import { MatSelectModule } from '@angular/material/select';  
  
@NgModule({  
  declarations: [  
    AppComponent  
  ],  
  imports: [  
    BrowserModule,  
    BrowserAnimationsModule,  
    HttpClientModule,  
    MatCardModule,  
    MatSelectModule  
  ],  
  providers: [],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  