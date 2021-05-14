import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { GridListComponent } from './grid-list/grid-list.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabsComponent } from './tabs/tabs.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { ReactiveFormsModule } from '@angular/forms';


import { FormsModule } from '@angular/forms'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,  
    GridListComponent,
    StepperComponent,
    TabsComponent,    
    TableComponent,
    FormComponent,
    SlideBarComponent,
    HeaderBarComponent ,
    ExpansionPanelComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,    
    BrowserAnimationsModule,     
    MaterialModule,
    ReactiveFormsModule, 
    FormsModule,   
MatFormFieldModule, 
MatStepperModule,MatButtonModule,MatSidenavModule,
MatToolbarModule,MatListModule,MatGridListModule,MatCardModule,MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
