import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseTableComponent } from './course-table/course-table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:"login", component:LoginComponent},
  {path:"course-form/:name", component: CourseFormComponent},
  {path:"course-form", component: CourseFormComponent},
  {path:"course-table", component:CourseTableComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
