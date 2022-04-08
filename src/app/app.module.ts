import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogRegister, NavbarComponent } from './component/navbar/navbar.component';
import { DisplayComponent } from './component/display/display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon' 
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogContentExampleDialog } from './component/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { LoginformComponent } from './component/loginform/loginform.component';
import { RegformComponent } from './component/regform/regform.component';
import { MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TableComponent } from './component/table/table.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DisplayComponent,
    DialogContentExampleDialog,
    LoginformComponent,
    DialogRegister,
    RegformComponent,
    DashboardComponent,
    TableComponent,
    PageNotFoundComponent
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule ,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,  
    MatNativeDateModule,
    HttpClientModule,
    MatSelectModule,
    MatCardModule,
    MatSlideToggleModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
