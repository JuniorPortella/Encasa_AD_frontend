import { Component } from '@angular/core';
import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
interface User {
    id: any;
    nome: string;
    login: string;
    // Outros campos, se houver
  }
  declare var M: any;
@Component({
  selector: 'app-funcionarios',
  template: `
  <app-nav></app-nav>
<div class="home-section">
  <div class="container">
    <br /><br />

    <form [formGroup]="formFuncionario" (ngSubmit)="salvar()" class="form">
      <div class="row">
        <div class="input-field col s4 m5">
          <input
            name="txt_nome"
            formControlName="txt_nome"
            type="text"
          />
          <label for="txt_nome">Nome</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6 m4">
          <input
            name="txt_login"
            formControlName="txt_login"
            type="text"
          />
          <label for="txt_login">Login</label>
        </div>
        <div class="input-field col s6 m4">
          <input
            name="txt_senha"
            formControlName="txt_senha"
            type="password"
          />
          <label for="txt_senha">Senha</label>
        </div>

        <div class="input-field col s6 m4 center">
          <div class="switch">
            <label>Administrador</label><br />

            <label>
              Off
              <input
                type="checkbox"
                formControlName="txt_adm"
              />
              <span class="lever"></span>
              On
            </label>
          </div>
        </div>
      </div>
      <div class="row center">
        <button
          class="btn green"
          type="submit"
          [disabled]="!formFuncionario.valid"
        >
          Salvar
        </button>
      </div>
    </form>

    <div class="row" id="tbl_func" name="tbl_func">
      <table class="striped highlight responsive-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Login</th>
            <th>Ações</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
        <tr *ngFor="let user of users">
            <td>{{ user.nome }}</td>
            <td>{{ user.login }}</td>
            <td>
                <button id="alterar_func" class="btn blue" (click)="editarUsuario(user)">
                    <i class='bx bx-edit'></i>
                </button>
            </td>
            <td>
                <button id="deletar_func" class="btn red" (click)="excluirUsuario(user)"> 
                    <i class='bx bx-trash' ></i>
                </button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <br />
</div>

  `,
  styleUrls: ['./funcionarios.component.css'],
})
export class FuncionariosComponent {
    
    constructor(
        private formBuilder: FormBuilder,
        private loginService: LoginService,
        private router: Router
    ) {}

    formFuncionario!: FormGroup;
    
    users: User[] = []; // Inicialize como um array vazio
    x: any;
    usuarioSelecionado: User | null = null;

    ngOnInit() {
        if(!this.loginService.isAuthenticated()){
          this.router.navigate(['/login']);
        } else {
            this.loadUsers(); // Carrega os usuários ao iniciar o componente
        }
        this.formFuncionario = this.formBuilder.group({
            txt_nome: ['', Validators.required],
            txt_login: ['', Validators.required],
            txt_senha: ['', Validators.required],
            txt_adm: [false],
        });
        
    }

    async salvar(): Promise<void> {
        if (this.formFuncionario.valid) {
            const nome = this.formFuncionario.value.txt_nome;
            const login = this.formFuncionario.value.txt_login;
            const senha = this.formFuncionario.value.txt_senha;
            const adm = this.formFuncionario.value.txt_adm;
        
            try {
                await this.loginService.createUser(nome, login, senha, adm);
                await this.limparCampos(); // Aguarde a limpeza dos campos
                await this.loadUsers();
                this.x++;
            } catch (error) {
                Swal.fire('Erro', 'Ocorreu um erro ao criar o usuário.', 'error');
            }
        } else {
            Swal.fire('Erro', 'Preencha todos os campos corretamente.', 'error');
        }
    }

    limparCampos(): void {
        
        this.formFuncionario.reset({
          txt_nome: '',
          txt_login: '',
          txt_senha: '',
          txt_adm: false,
        });
        
        M.updateTextFields();
    }
    
    async loadUsers(): Promise<void> {

      try {
          let usersData: User[] | undefined = await this.loginService.getAllUsers().toPromise();

          if (usersData !== undefined) {
              if (this.x === undefined) {
                  this.x = usersData.length;
                  this.users = usersData;
              } else {
                
                  do {
                      usersData = await this.loginService.getAllUsers().toPromise();

                  } while (this.x != usersData?.length);
                  
                  this.users = usersData || [];
                  this.x = usersData?.length;
              }
          }
      } catch (error) {
          Swal.fire('Erro', 'Ocorreu um erro ao buscar os usuários.', 'error');
      }
  }
    
    

    editarUsuario(user: User): void {
        // Preencha os campos de nome e login com os dados do usuário selecionado
        this.formFuncionario.patchValue({
          txt_nome: user.nome,
          txt_login: user.login,
        });
        M.updateTextFields();
    }
    
    async excluirUsuario(user: User): Promise<void> {
        const userId = user.id; // Obtém o id do usuário
        Swal.fire({
            text: "Deseja deletar usuário?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'sim'
          }).then((result) => {
            if (result.isConfirmed) {
                try {
                    // Chame o serviço para excluir o usuário pelo ID
                    this.loginService.excluirUser(userId);
                    this.limparCampos();
                    this.x--;
                    this.loadUsers(); // Atualize a lista de usuários após a exclusão
                  } catch (error) {
                    Swal.fire('Erro', 'Ocorreu um erro ao excluir o usuário.', 'error');
                  }
              
            }
          })
        
      }
      
}
