import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterEmpComponent } from './Components/register-emp/register-emp.component';

const routes: Routes = [
  {path:'',redirectTo:'register',pathMatch:'full'},
  {path:'register',component:RegisterEmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
