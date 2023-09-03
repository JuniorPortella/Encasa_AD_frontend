import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { MotoqueiroComponent } from './views/motoqueiro/motoqueiro.component';
import { BairrosComponent } from './views/bairros/bairros.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { ContabilidadeComponent } from './views/contabilidade/contabilidade.component';
import { FuncionariosComponent } from './views/funcionarios/funcionarios.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { LoginService } from './services/login.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ClientesComponent,
    MotoqueiroComponent,
    BairrosComponent,
    ProdutosComponent,
    ContabilidadeComponent,
    FuncionariosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService,{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
