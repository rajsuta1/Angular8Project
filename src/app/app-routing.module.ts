import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { FormComponent } from './form/form.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { StepperComponent } from './stepper/stepper.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';



const routes: Routes = [ 
{
  path:"grid-list",
  component:GridListComponent
},
{
  path:"form",
  component:FormComponent
},
{
  path:"expansion-panel",
  component:ExpansionPanelComponent
},
{
  path:"header-bar",
  component:HeaderBarComponent
},
{
  path:"slide-bar",
  component:SlideBarComponent
},
{
  path:"stepper",
  component:StepperComponent
},
{
  path:"table",
  component:TableComponent
},
{
  path:"tabs",
  component:TabsComponent
},

{
  path:"", redirectTo:"/grid-list",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
