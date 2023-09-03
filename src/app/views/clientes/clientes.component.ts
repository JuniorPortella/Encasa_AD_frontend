import { FormGroup, FormControl, Validators, FormBuilder } 
    from '@angular/forms';
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-clientes',
  template: `
  
    <app-nav></app-nav>
    <div class="home-section">
        <div class="container">
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
            <br><br>
            <div class="row">
                <div class="input-field col s5">
                    <input name="txt_fone" formControlName="txt_fone" type="text" >
                    <label for="txt_fone">Telefone</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input name="txt_nome" formControlName="txt_nome" type="text"  >
                    <label for="txt_nome">Nome</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12 m4">
                    <label for="txt_date">Aniversario</label>
                    <input name="txt_date" formControlName="txt_date" type="text" class="datepicker">
                </div>
                <div class="input-field col s12 m8">
                    <label for="txt_email">E-mail</label>
                    <input name="txt_email" formControlName="txt_email" type="text" >
                </div>
            </div>
            <div class="row" >
                <div class="input-field col s4 m3">
                    <input name="txt_cep" formControlName="txt_cep" type="text">
                    <label for="txt_cep">CEP</label>
                </div>
                <div class="input-field col s8 m6">
                    <input name="txt_rua" formControlName="txt_rua" type="text" >
                    <label for="txt_rua">Rua</label>
                </div>
                <div class="input-field col s4 m3">
                    <input name="txt_numero" formControlName="txt_numero" type="text" >
                    <label for="txt_numero">Numero</label>
                </div>
                <div class="input-field col s8 m6">
                    <input name="txt_bairro" formControlName="txt_bairro" type="text" >
                    <label for="txt_bairro">Bairro</label>
                </div>
                <div class="input-field col s6 m6">
                    <input name="txt_cidade" formControlName="txt_cidade" type="text" >
                    <label for="txt_cidade">Cidade</label>
                </div>
                <div class="input-field col s6 m4">
                    <input name="txt_comp" formControlName="txt_comp" type="text" >
                    <label for="txt_comp">Complemento</label>
                </div>
                <div class="input-field col s8 m5">
                    <textarea name="txt_obs" formControlName="txt_obs" class="materialize-textarea"></textarea>
                    <label for="txt_obs">Observacao</label>
                </div>
                <div class="input-field col s4 m3">
                    <input name="txt_entrega" formControlName="txt_entrega" type="text" >
                    <label for="txt_entrega">Taxa entrega</label>
                </div>
            </div>
            <div class="row center">
                <button class="btn green" type="submit" [disabled]="form.valid">Salvar</button>
            </div>   
            
            <br>
            
            </form>
        </div>
    </div>
  `,
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
    form = new FormGroup({
        "txt_fone": new FormControl("", Validators.required),
        "txt_nome": new FormControl("", Validators.required),
        "txt_date": new FormControl(""),
        "txt_email": new FormControl(""),
        "txt_cep": new FormControl("", Validators.required),
        "txt_rua": new FormControl("", Validators.required),
        "txt_numero": new FormControl("", Validators.required),
        "txt_bairro": new FormControl("", Validators.required),
        "txt_cidade": new FormControl("", Validators.required),
        "txt_comp": new FormControl(""),
        "txt_obs": new FormControl(""),
        "txt_entrega": new FormControl("", Validators.required),
    });

    constructor(private http: HttpClient, private login : LoginService){

    }
    // this.form.value
    onSubmit() {
        console.log("reactive form submitted");
        console.log(this.form.value);
        firstValueFrom(this.http.post('http://127.0.0.1:8000/cliente/', this.form.value)).then(
            res => console.log(res)
        ).catch(err => { console.log('Error: ', err)})        
    }

}
