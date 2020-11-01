import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaveGuard } from './guards/leave.guard';
import { SignedGuard } from './guards/signed.guard';
import { AuthComponent } from './pages/auth/auth.component';
import { CatsComponent } from './pages/cats/cats.component';
import { FormComponent } from './pages/form/form.component';



const routes: Routes = [
  {
    path: "form/add", 
    component: FormComponent,
    canActivate: [ 
      SignedGuard
    ],
    
  },
  {
    path: "cats", 
    component: CatsComponent
  },
  {
    path: "form/edit/:id", 
    component: FormComponent
  },
  {
    path: "auth", 
    component: AuthComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
