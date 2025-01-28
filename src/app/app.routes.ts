import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = 
[
    { path: '', component: HomeComponent },
    { path: 'project/:id', component: ProjectDetailsComponent }
];
