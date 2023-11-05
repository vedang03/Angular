import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const routes: Routes = [
  {path:'',redirectTo:'test/home',pathMatch:'full'},
  {path:'test/home',component:HomePageComponent},
  {path:'test/userForm',component:UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
