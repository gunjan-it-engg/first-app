import { NgModule } from '@angular/core';
import { BrowserModule , Title} from '@angular/platform-browser';

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
import {HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginformComponent } from './component/loginform/loginform.component';
import { RegformComponent } from './component/regform/regform.component';
import { MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TableComponent } from './component/table/table.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { FooterComponent } from './component/footer/footer.component';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import { TabsComponent } from './component/tabs/tabs.component';
import { LogdialogService } from './services/logdialog.service';
import { CrudComponent } from './component/crud/crud.component';
import { CrudDialogComponent } from './component/crud-dialog/crud-dialog.component';
import { CrudTableComponent } from './component/crud-table/crud-table.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { WarningDialog } from './component/crud-table/crud-table.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { EmployeService } from './services/employe.service';
import { NoInternetComponent } from './component/no-internet/no-internet.component';
import {MatTooltipModule} from '@angular/material/tooltip';




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
    PageNotFoundComponent,
    FooterComponent,
    TabsComponent,
    CrudComponent,
    CrudDialogComponent,
    CrudTableComponent,
    WarningDialog,
    NoInternetComponent
    

    
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
    MatSlideToggleModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatSortModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatProgressBarModule , 
    MatTooltipModule
    



  ],
  providers: [Title , { provide: HTTP_INTERCEPTORS, useClass: EmployeService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
