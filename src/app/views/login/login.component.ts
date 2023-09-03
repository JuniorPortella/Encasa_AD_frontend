import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, Form } from '@angular/forms';
import { LoginService } from './../../services/login.service';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  template: `
      <form [formGroup]="formLogin" (ngSubmit)="login()" class="form">
        <br><br>
        <div class="row">
          <div class="input-field col s8 offset-s2 m4 offset-m4">
              <input name="txt_user" formControlName="txt_user" type="text" >
              <label for="txt_user">Usuário</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s8 offset-s2 m4 offset-m4">
              <input name="txt_password" formControlName="txt_password" type="password" >
              <label for="txt_password">Senha</label>
          </div>
        </div>
        <div class="row center">
            <button class="btn blue" type="submit" [disabled]="!formLogin.valid">Entrar</button>
        </div>   
      </form>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  token!: string;
  refresh_token!: string;

  formLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder, private LoginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      txt_user: ['', Validators.required],
      txt_password: ['', Validators.required]
    });
  }

  async login(): Promise<void> {
    
    const username = this.formLogin.value.txt_user;
    const password = this.formLogin.value.txt_password;    
    this.LoginService.login(username, password)    
  }

}
