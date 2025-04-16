import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SettingsComponent } from './settings/settings.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path:"about", component: AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'settings',component:SettingsComponent},

    {path:'**', component:NotFoundComponent}
    
];
