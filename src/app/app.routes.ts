import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', component: HomePageComponent},
    {path: 'first', component: FirstPageComponent},
    {path: 'second', component: SecondPageComponent},
];
