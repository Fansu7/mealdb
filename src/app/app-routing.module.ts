import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MealHomeComponent } from './meals/meal-home/meal-home.component';
import { MealsListComponent } from './meals/meals-list/meals-list.component';
import { MealDetailComponent } from './meals/meal-detail/meal-detail.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: MealHomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  { path: 'meals', component: MealsListComponent },
  { path: 'meals/detail/:id', component: MealDetailComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
