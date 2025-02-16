import { Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import {TeamComponent} from './pages/team/team.component';
import {TeamDetailsComponent} from './pages/team-details/team-details.component';
import {PropertiesComponent} from './pages/properties/properties.component';
import {PropertyDetailsComponent} from './pages/property-details/property-details.component';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';

const company_name = 'Realer Living Solution';

export const routes: Routes = [

  { path: '', component: LayoutComponent,

    children: [
      { path: '', component: HomeComponent, title: company_name + ' Home' },
      { path: 'about', component: AboutComponent, title: company_name + ' About' },
      { path: 'properties', component: PropertiesComponent, title: company_name + 'Properties' },
      { path: 'property-details', component: PropertyDetailsComponent, title: company_name + 'Property Details' },
      { path: 'teams', component: TeamComponent, title: company_name + 'Teams' },
      { path: 'team-details', component: TeamDetailsComponent, title: company_name + 'Team Details' },
      { path: 'sign-in', component: SignInComponent, title: company_name + 'Sign In' },
      { path: 'Sign-up', component: SignUpComponent, title: company_name + 'Sign Up' },
    ]

  },

];
