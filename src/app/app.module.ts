import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentListComponent } from './Component/student-list/student-list.component';
import { StudentFormComponent } from './Component/student-form/student-form.component';
import { FooterComponent } from './footer/footer.component';
import { CommSeriveService } from './Service/comm-serive.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentListComponent,
    StudentFormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CommSeriveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
