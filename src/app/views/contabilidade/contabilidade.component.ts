import { Component } from '@angular/core';

@Component({
  selector: 'app-contabilidade',
  template: `
  
    <app-nav></app-nav>
    <div class="home-section">
        <div class="container">
            <br><br>
            
            <div class="row">
                <div class="input-field col s12 m4">
                    <label for="txt_datei">Data Inicio</label>
                    <input name="txt_datei" id="txt_datei" type="text" class="datepicker">
                </div>
                <div class="input-field col s12 m4">
                    <label for="txt_datef">Data Final</label>
                    <input name="txt_datef" id="txt_datef" type="text" class="datepicker">
                </div>
                <div class="input-field col s2 m2 center">
                    <button class="btn blue" id="add_produto" onclick="buscar()">Buscar</button>
                </div>
            </div>
            <br><br>
            <div class="row">
                <div class="col s12 m6">
                    <canvas id="ChartPizza"></canvas>
                </div>
                <div class="col s12 m6">
                    <div class="col s12">
                        <input name="txt_normal" id="txt_normal" type="text" disabled>
                    </div>
                    <div class="col s12">
                        <input name="txt_brotinho" id="txt_brotinho" type="text" disabled>
                    </div>
                    <div class="col s12">
                        <input name="txt_gigante" id="txt_gigante" type="text" disabled>
                    </div>
                    <div class="col s12">
                        <input name="txt_calzone" id="txt_calzone" type="text" disabled>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m6">
                    <canvas id="ChartBebidas"></canvas>
                </div>
                <div class="col s12 m6">
                    <div class="col s12">
                        <input name="txt_refri2" id="txt_refri2" type="text" disabled>
                    </div>
                    <div class="col s12">
                        <input name="txt_refri1" id="txt_refri1" type="text" disabled>
                    </div>
                    <div class="col s12">
                        <input name="txtrefri600" id="txtrefri600" type="text" disabled>
                    </div>
                    <div class="col s12">
                        <input name="txt_refrilata" id="txt_refrilata" type="text" disabled>
                    </div>
                    <div class="col s12">
                        <input name="txt_agua" id="txt_agua" type="text" disabled>
                    </div>
                    <div class="col s12">
                        <input name="txt_suco" id="txt_suco" type="text" disabled>
                    </div>
                    <div class="col s12">
                        <input name="txt_cerveja" id="txt_cerveja" type="text" disabled>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12">
                    <canvas id="ChartRecebidos"></canvas>
                </div>
            </div>
            <div class="row">
                <div class="col s12">
                    <input name="txt_total" id="txt_total" type="text" disabled>
                </div>
            </div>
        </div>
        <br>
    </div>
    
  `,
  styles: [
  ]
})
export class ContabilidadeComponent {

}
