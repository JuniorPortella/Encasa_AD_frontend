import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  template: `
    
    <app-nav></app-nav>
    <div class="home-section">
        <div class="container">
        <br><br>
        
        <div class="row">
            <div class="input-field col s4 m1">
                <input name="txt_codigo" id="txt_codigo" type="number" onblur="buscar_produto()" onfocus="clear_fields()">
                <label for="txt_codigo">Cod</label>
            </div>
            <div class="input-field col s8 m5">
                <input name="txt_descricao" id="txt_descricao" type="text" >
                <label for="txt_descricao">Descrição</label>
            </div>
            <div class="input-field col s5 m2">
                <input name="txt_valor" id="txt_valor" type="text" >
                <label for="txt_valor">Valor</label>
            </div>
            <div class="input-field col s5 m2">
                <input name="txt_valorprom" id="txt_valorprom" type="text" >
                <label for="txt_valorprom">Valor Promoção</label>
            </div>
            <div class="input-field col s2 m2 center">
                <button class="btn green" id="add_produto" onclick="Salvar()">+</button>
            </div>
        </div>
        <div class="row" style="height: 500px; overflow: scroll;">
            <table class="striped highlight responsive-table" id="table" >
                <thead>
                    <tr>
                        <th onclick="ordenar(1)" style="cursor: pointer;">Cod</th>
                        <th onclick="ordenar(2)"  style="cursor: pointer;">Descricao</th>
                        <th>Valor</th>
                        <th>Valor Promoção</th>
                        <th>Ações</th>
                        <th></th>
                    </tr>
                  </thead>
          
                  <tbody id="tbody">
                  </tbody>
        
                </table>
                    
        </div>


        </div>
        <br>
    </div>
  `,
  styles: [
  ]
})
export class ProdutosComponent {

}
