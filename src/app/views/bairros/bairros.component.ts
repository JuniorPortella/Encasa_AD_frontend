import { Component } from '@angular/core';

@Component({
  selector: 'app-bairros',
  template: `
  
    <app-nav></app-nav>
    <div class="home-section">
      <div class="container">
          <br><br>
          <div class="row">
              <table class="striped highlight responsive-table" id="table" >
                  <thead>
                    <tr>
                        <th onclick="ordenar(1)" style="cursor: pointer;">Bairro</th>
                        <th onclick="ordenar(2)"  style="cursor: pointer;">Valor</th>
                        <th>Alterar</th>
                    </tr>
                  </thead>
          
                  <tbody id="tbody">
                  </tbody>
                </table>
          </div>
          <br>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class BairrosComponent {

}
