import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav',
  template: `
    <div class="sidebar" id="sidebar" #sidebar>
        <div class="logo-details">
            <div class="logo_name">ENCASA</div>
            <i class='bx bx-menu' id="btn" (click)="toggleSidebar()" #btn></i>
        </div>
        <ul class="nav-list">
            <li>
                <a routerLink="/home">
                    <i class='bx bx-grid-alt'></i>
                    <span class="links_name">Página inicial</span>
                </a>
                <span class="tooltip">Página inicial</span>
            </li>
            <li>
                <a routerLink="/clientes">
                <i class='bx bx-user' ></i>
                <span class="links_name">Clientes</span>
                </a>
                <span class="tooltip">Clientes</span>
            </li>
            <li>
                <a routerLink="/motoqueiro">
                <i class='bx bx-cycling' ></i>
                <span class="links_name">Motoqueiro</span>
                </a>
                <span class="tooltip">Motoqueiro</span>
            </li>
            <li>
                <a routerLink="/bairros">
                <i class='bx bx-map' ></i>
                <span class="links_name">Bairros</span>
                </a>
                <span class="tooltip">Bairros</span>
            </li>
            <li>
                <a routerLink="/produtos">
                <i class='bx bxs-pizza' ></i>
                <span class="links_name">Produtos</span>
                </a>
                <span class="tooltip">Produtos</span>
            </li>
            <li>
                <a routerLink="/contabilidade">
                <i class='bx bx-money' ></i>
                <span class="links_name">Contabilidade</span>
                </a>
                <span class="tooltip">Contabilidade</span>
            </li>
            <li>
                <a routerLink="/funcionarios">
                <i class='bx bx-user-check' ></i>
                <span class="links_name">Funcionários</span>
                </a>
                <span class="tooltip">Funcionários</span>
            </li>
            <li>
                <a (click)="logout()">
                <i class='bx bx-exit' ></i>
                <span class="links_name">Sair</span>
                </a>
                <span class="tooltip">Sair</span>
            </li>
        </ul>
    </div>
  `,
  styleUrls: ['./nav.component.css']
})  
export class NavComponent {
    @ViewChild('sidebar') sidebar!: ElementRef;
    @ViewChild('btn') closeBtn!: ElementRef;
  
    constructor(private renderer: Renderer2, private router : Router, private loginService: LoginService) {}

    toggleSidebar() {
        this.sidebar.nativeElement.classList.toggle('open');
        this.menuBtnChange();
      }
    
      menuBtnChange() {
        if (this.sidebar.nativeElement.classList.contains('open')) {
          this.renderer.removeClass(this.closeBtn.nativeElement, 'bx-menu');
          this.renderer.addClass(this.closeBtn.nativeElement, 'bx-menu-alt-right');
        } else {
          this.renderer.removeClass(this.closeBtn.nativeElement, 'bx-menu-alt-right');
          this.renderer.addClass(this.closeBtn.nativeElement, 'bx-menu');
        }
      }

    logout(){
        Swal.fire({
            title: 'Sair do Sistema?',
            showCancelButton: true,
            confirmButtonText: 'Sair',
            denyButtonText: `Cancelar`,
            }).then((result) => {
            if (result.isConfirmed) {
                this.loginService.logout();
            }
            })
    }
}
