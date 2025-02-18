import { Routes } from '@angular/router';

import { LayoutComponent } from './portal/layout/layout.component';
import { HomeComponent } from './portal/pages/home/home.component';
import { AboutComponent } from './portal/pages/about/about.component';
import { TeamsComponent } from './portal/pages/teams/teams.component';
import { TeamDetailsComponent } from './portal/pages/team-details/team-details.component';
import { PropertiesComponent } from './portal/pages/properties/properties.component';
import { PropertyDetailsComponent } from './portal/pages/property-details/property-details.component';
import { BlogsComponent } from './portal/pages/blogs/blogs.component';
import { BlogDetailsComponent } from './portal/pages/blog-details/blog-details.component';

import { AuthLayoutComponent } from './auth/layout/layout.component';
import { SignInComponent } from './auth/pages/sign-in/sign-in.component';
import { SignUpComponent } from './auth/pages/sign-up/sign-up.component';

const company_name = 'Realer Living Solution';

export const routes: Routes = [

  { path: '', component: LayoutComponent,

    children: [
      { path: '', component: HomeComponent, title: company_name + ' Home' },
      { path: 'about', component: AboutComponent, title: company_name + ' About' },
      { path: 'properties', component: PropertiesComponent, title: company_name + 'Properties' },
      { path: 'property-details/:id', component: PropertyDetailsComponent, title: company_name + 'Property Details' },
      { path: 'teams', component: TeamsComponent, title: company_name + 'Teams' },
      { path: 'team-details/:id', component: TeamDetailsComponent, title: company_name + 'Team Details' },
      { path: 'blogs', component: BlogsComponent, title: company_name + 'Blogs' },
      { path: 'blog-details/:id', component: BlogDetailsComponent, title: company_name + 'Blog Details' },
      { path: 'auth', component: AuthLayoutComponent,
        children: [
          { path: 'sign-in', component: SignInComponent, title: company_name + 'Sign In' },
          { path: 'sign-up', component: SignUpComponent, title: company_name + 'Sign Up' },
        ],
      },
    ]

  },

];
