import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { LoginComponent } from './dominio/login/login.component';



const appRoutes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full'},
    { path: 'categoria', loadChildren: './dominio/categoria/categoria.module#CategoriaModule'},
    { path: 'modalidade', loadChildren: './dominio/modalidade/modalidade.module#ModalidadeModule'},
    { path: 'login', loadChildren: './dominio/login/login.module#LoginModule'}
];


@NgModule({
    imports: [RouterModule.forRoot(
        appRoutes,
        { enableTracing: false }
    )],
    exports: [RouterModule]
  })

  export class AppRouting {}