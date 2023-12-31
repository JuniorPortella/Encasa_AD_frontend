import { FuncionariosComponent } from './../funcionarios/funcionarios.component';
import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { NavComponent } from 'src/app/components/template/nav/nav.component';
import { LoginService } from 'src/app/services/login.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  template: `
        <app-nav></app-nav>
        <div class="home-section" >
            <div class="container ">
                <br><br>
                <div class="row">
                    <div class="input-field col s5">
                        <input name="txt_fone" id="txt_fone" type="text" >
                        <label for="txt_fone">Telefone</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <label for="txt_nome">Nome</label>
                        <input name="txt_nome" name="txt_nome" id="txt_nome" type="text" disabled>
                    </div>
                    <div class="input-field col s12">
                        <label for="txt_end">Endereço</label>
                        <input name="txt_end" id="txt_end" type="text" disabled>
                    </div>
                    <div class="input-field col s12" name="div_obss" id="div_obss">
                        <input name="txt_obss" id="txt_obss" type="text" disabled>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12 m10">
                        <label for="txt_endentrega">Endereço para entrega</label>
                        <input name="txt_endentrega" id="txt_endentrega" type="text" onblur="busca_cep()" onfocus="limpa()">
                    </div>   
                    <div class="input-field col s12 m2 center">
                        <button class="btn grey" onclick="balcao()" id="balcao">Balcão</button>
                    </div>
                </div>
                <div id="form_entrega">
                    <div class="row">
                        <div class="input-field col s4 m3">
                            <input name="txt_numero" id="txt_numero" type="text" >
                            <label for="txt_numero">Numero</label>
                        </div>
                        <div class="input-field col s6 m4">
                            <input name="txt_comp" id="txt_comp" type="text" >
                            <label for="txt_comp">Complemento</label>
                        </div>
                        <div class="input-field col s8 m5">
                            <textarea name="txt_obs" id="txt_obs" class="materialize-textarea"></textarea>
                            <label for="txt_obs">Observacao</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6 m1">
                        <input name="txt_qtd" id="txt_qtd" type="text" >
                        <label for="txt_qtd">Qtd</label>
                    </div>
                    <div class="input-field col s6 m2">
                        <input name="txt_cod" id="txt_cod" type="text" onblur="buscar_produto(1)" onfocus="lst_produto()">
                        <label for="txt_cod">Cod</label>
                    </div>
                    <div class="input-field col s12 m6">
                        <select class="browser-default" id="produtos" onchange="buscar_produto(2)">
                            <option value="-1" disabled selected>Selecione o produto</option>
                        </select>
                    </div>
                    <div class="input-field col s8 m2">
                        <input name="txt_valor" id="txt_valor" type="text" disabled>
                        <label for="txt_valor">Valor</label>
                    </div>
                    
                    <div class="input-field col s4 m1 center">
                        <button class="btn green" id="btn_produto" onclick="add_produto()">+</button>
                    </div>
                </div>
                <div class="row" style="height: 300px; overflow: scroll;" id="tbl_produto" name="tbl_produto" >
                    <table class="striped highlight responsive-table" >
                        <thead>
                            <tr>
                                <th>Cod</th>
                                <th>Descricao</th>
                            </tr>
                        </thead>
                
                        <tbody>
                        </tbody>
                    </table>   
                </div>
                <div class="row" >
                    <table class="striped highlight responsive-table" id="table" >
                        <thead>
                            <tr>
                                <th>Qtd</th>
                                <th>Cod</th>
                                <th>Descricao</th>
                                <th>Valor</th>
                                <th>Obs</th>
                            </tr>
                        </thead>
                
                        <tbody id="tpedidos">
                            
                        </tbody>
                    </table>     
                </div>
                <div class="row">
                    <div class="input-field col s6 m3 push-m7">
                        <input name="txt_tt" id="txt_tt" type="text" disabled value="0" >
                        <label for="txt_tt"><p style="color: red;">Total</p></label>
                    </div>
                    
                    <div class="input-field col s6 m1 push-m7 center">
                        <button class="btn green" id="fechar" onclick="fechar_pedido()">Fechar</button>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12 m4 center">
                        <button class="btn blue" onclick="receber()" name="receber">Receber</button>
                    </div>
                    <div class="input-field col s12 m4 center">
                        <button class="btn blue" onclick="consultar()" name="consultar">Consultar</button>
                    </div>
                    <div class="input-field col s12 m4 center">
                        <button class="btn blue" onclick="listar()" name="listar">Listar</button>
                    </div>
                </div>   
            
                <br>

                <div id="listar_pedidos">
                    <div  style="height: 300px; overflow: scroll;">
                        <table class="striped highlight responsive-table" id="table_listar_pedidos" >
                            <thead>
                                <tr>
                                    <th>Pedido</th>
                                    <th>Data e Hora</th>
                                    <th>Cliente</th>
                                    <th>Status</th>                      
                                </tr>   
                            </thead>
                    
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div id="recebimentos">
                    <h4>Recebimentos</h4>
                    <div class="row">
                        <div class="input-field col s6 m4">
                            <input name="txt_pedido" id="txt_pedido" type="text" disabled>
                            <label for="txt_pedido">Pedido</label>
                        </div>
                        <div class="input-field col s6 m4">
                            <input name="txt_total" id="txt_total" type="text" disabled>
                            <label for="txt_total">Total</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s6 m4">
                            <input name="txt_dinheiro" id="txt_dinheiro" type="text" onblur="dinheiro()">
                            <label for="txt_dinheiro">Dinheiro</label>
                        </div>
                        <div class="input-field col s6 m4">
                            <input name="txt_credito" id="txt_credito" type="text" >
                            <label for="txt_credito">Crédito</label>
                        </div>
                        <div class="input-field col s6 m4">
                            <input name="txt_debito" id="txt_debito" type="text" >
                            <label for="txt_debito">Débito</label>
                        </div>
                        <div class="input-field col s6 m4">
                            <input name="txt_pix" id="txt_pix" type="text" >
                            <label for="txt_pix">Pix</label>
                        </div>
                        <div class="input-field col s6 m4">
                            <input name="txt_vr" id="txt_vr" type="text" >
                            <label for="txt_vr">VR</label>
                        </div>
                        <div class="input-field col s6 m4">
                            <input name="txt_sodexo" id="txt_sodexo" type="text" >
                            <label for="txt_sodexo">Sodexo</label>
                        </div>
                        <div class="input-field col s6 m4">
                            <input name="txt_alelo" id="txt_alelo" type="text" >
                            <label for="txt_alelo">Alelo</label>
                        </div>
                        <div class="input-field col s6 m4">
                            <input name="txt_gorjeta" id="txt_gorjeta" type="text" >
                            <label for="txt_gorjeta">Gorjeta</label>
                        </div>
                        <div class="input-field col s6 m4">
                            <input name="txt_troco" id="txt_troco" type="text" disabled>
                            <label for="txt_troco">Troco</label>
                        </div>
                    
                        <div class="input-field col s4 m1 center">
                            <button class="btn green" name="btnreceber" onclick="receber_pedido()">Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    constructor(private loginService: LoginService, private router: Router) {}
  
    // Outros métodos e lógica do componente aqui
  
    ngOnInit() {
      // Chame a função de verificação de autenticação quando o componente for iniciado
      
      if(!this.loginService.isAuthenticated()){
        this.router.navigate(['/login']);
      }
    }
  
  }
