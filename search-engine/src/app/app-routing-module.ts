import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Upload } from './upload/upload';

const routes: Routes = [
  {path:"", component:Home, pathMatch: 'full'},
  {path:"upload", component: Upload}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
