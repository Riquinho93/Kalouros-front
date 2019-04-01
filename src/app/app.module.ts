import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AuthService, AuthServiceConfig} from 'ng4-social-login';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { AppRouting } from './app.routing';
import { ModalidadeService } from './dominio/modalidade/modalidade.service';
import { HomeComponent } from './dominio/home/home.component';
//import { LoginComponent } from './dominio/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  //  LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AlertModule.forRoot(),

    // app
    AppRouting
  ],
  providers: [
    ModalidadeService,
    AuthService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
