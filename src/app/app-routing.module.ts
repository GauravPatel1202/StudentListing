import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './Component/student-list/student-list.component';
import { StudentFormComponent } from './Component/student-form/student-form.component';

const routes: Routes = [
{ path: '', component: StudentListComponent },
{ path: 'Student', component: StudentFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
