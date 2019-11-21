import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About Page' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home Page' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
