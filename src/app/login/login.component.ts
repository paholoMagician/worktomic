import { Component, OnInit } from '@angular/core';
import { ControllerLoginService } from '../Services/controller-login.service';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { LogotipoService } from '../Services/logotipo.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public name_user: string = '';
  public pass_user: string = '';
  public token_user: string = '';
  public dateNow: any = new Date();

  constructor( private logs: ControllerLoginService, public router: Router, public logo: LogotipoService) { }

  ngOnInit(): void {
    this.setLogo();
  }

  setLogo() {
    const logo = <HTMLElement> document.getElementById('logo');
    logo.innerHTML = this.logo.logo;
  }

  public arrTokens: any = [];
  getTok(token: string, username: string, option: number) {
    this.logs.controlLog(token, username, option).subscribe( m => {

      this.arrTokens = m;

      Swal.fire({
        title: 'Hemos encontrado tu usuario',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: `autocompletar`,
        denyButtonText: `No completar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Completado automático!', '', 'success')
          this.pass_user = this.arrTokens[0].pass_user;
        } else if (result.isDenied) {
          Swal.fire('Ingrese su password manualmente', '', 'info')
        }
      })
      this.token_user = this.arrTokens[0].user_token;
      //console.log(m)
    })

  }

  public user: any = [];
  logeo() {

    this.arrTokens = {
      user_notes: this.name_user,
      user_token: this.token_user,
      pass_user:  this.pass_user
    }

    // console.log(this.arrTokens);

    this.logs.login(this.arrTokens).subscribe( log => {
      this.user = log;

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Has ingresado con éxito',
        showConfirmButton: false,
        timer: 1500
      })

      sessionStorage.setItem( 'user', this.user.user_notes);
      sessionStorage.setItem( 'token', this.user.user_token);
      this.router.navigate(['/dashboard']);

    }, ()=>{
      Swal.fire(
        'Credenciales incorrectas?',
        'Si no dispones de una cuenta consulta con el administrador.',
        'question'
      )
      this.router.navigate(['/login']);
    })
  }


}
