import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FirstComponent } from './pages/first/first.component';
import { SecondComponent } from './pages/second/second.component';
import { ThirdComponent } from './pages/third/third.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
     {
        path: 'home',
        component: HomeComponent,
      },
     {
        path: 'first',
        component: FirstComponent,
      },
     {
        path: 'second',
        component: SecondComponent,
      },
     {
        path: 'third',
        component: ThirdComponent,
      },

];
