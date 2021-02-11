import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
    { path: 'pages', 
    children: [
        { path: 'about', component: AboutComponent },
        { path: 'dashboradr', component: DashboardComponent },
        { path: 'home', component: HomeComponent },
        { path: '', pathMatch: 'full', redirectTo: '/pages/home' }
    ]
   },
   { path: '**', component: NotfoundComponent }
   ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
