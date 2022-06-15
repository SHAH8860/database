import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddresturantComponent } from './components/addresturant/addresturant.component';
import { ListresturantComponent } from './components/listresturant/listresturant.component';
import { UpdateresturantComponent } from './components/updateresturant/updateresturant.component';

const routes: Routes = [
  {path:'add',component:AddresturantComponent},
  {path:'update',component:UpdateresturantComponent},
  {path:'list',component:ListresturantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
