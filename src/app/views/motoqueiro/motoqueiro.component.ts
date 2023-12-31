import { Component } from '@angular/core';

@Component({
  selector: 'app-motoqueiro',
  template: `
  
    <app-nav></app-nav>
    <div class="home-section">
        <div class="container">
            <br><br>
            <br>
            <div class="row">
                
            <button class="btn gray small" onclick="exibir_form()" name="add_motoqueiro">Gerenciar Motoqueiro</button>
            </div>
            <br>
            <div id="cadastrar_motoqueiro">
                <div class="row">
                    <div class="input-field col s12 m6">
                        <input name="txt_nome" id="txt_nome" type="text">
                        <label for="txt_nome">Nome</label>
                    </div>
                    <div class="input-field col s5 m4 center">
                        <button class="btn green" onclick="salvar_motoqueiro()" name="action">Adicionar</button>
                    </div>
                </div>
            </div>
            <div id="despache_motoqueiro">
                <div class="row">
                    
                    <div class="input-field col s12 m4">
                        <select class="browser-default" onchange="buscar_motoqueiro()" id="motoqueiro_select">
                    
                            <option disabled selected>Selecione um motoqueiro</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6 m4">
                        <input name="txt_pedido" id="txt_pedido" type="text" onblur="buscar_pedido()">
                        <label for="txt_pedido">Pedido</label>
                    </div>
                    <div class="input-field col s6 m4">
                        <input name="txt_valor" id="txt_valor" type="text" disabled>
                        <label for="txt_valor">Valor</label>
                    </div>
                    
                    <div class="input-field col s5 m4 center">
                        <button class="btn green" onclick="add_motoqueiro()" name="action">+</button>
                    </div>
                </div>  
                <div class="row">
                    <table class="striped highlight responsive-table" id="table" >
                        <thead>
                        <tr>
                            <th>Pedido</th>
                            <th>Valor</th>
                            <th>Data e Hora</th>
                        </tr>
                        </thead>
                
                        <tbody id="tbody">
                        
                        </tbody>
                    </table>
                </div>
                
                
            </div>
            
            
            <br>
        </div>
    </div>
    
  `,
  styles: [
  ]
})
export class MotoqueiroComponent {

}
