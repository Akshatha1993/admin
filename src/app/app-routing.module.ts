import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { OopsComponent } from '../app/oops/oops.component';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {path:'', redirectTo:'login', pathMatch:'full'},
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'oops',
    component:OopsComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
