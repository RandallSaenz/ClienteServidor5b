import { NgModule } from '@angular/core';
import { RouterModule, Routes } from'@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { PagesComponent } from './pages/pages.component';
import { FeatureRoutingModule } from './pages/pages.routing';

const routes: Routes = [
{ 
path: '', 
component: PagesComponent,
children:[
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home'}
]
},
{ path: '**', component: NotfoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    FeatureRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
