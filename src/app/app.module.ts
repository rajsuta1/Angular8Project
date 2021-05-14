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
import {}from '@angular/

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
    ExpansionPanelComponent,
    ReactiveFormsModule
  ],
  imports: [
    BrowserModule,    AppRoutingModule,    BrowserAnimationsModule,     
    MaterialModule,

  ],
  

  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
