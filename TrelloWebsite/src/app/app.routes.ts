import { Routes } from '@angular/router';
import { DropDownComponent } from './drop-down-component/drop-down-component';
import { NavBarComponent } from './nav-bar-component/nav-bar-component';
import { HomePageComponent } from './home-page-component/home-page-component';
import { PricingComponent } from './pricing-component/pricing-component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'home',
        component: HomePageComponent
    },

    {
        path: 'pricing',
        component: PricingComponent
    }
];
