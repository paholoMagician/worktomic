import { Component, OnInit } from '@angular/core';
import { ControllerLoginService } from '../Services/controller-login.service';

import Swal from 'sweetalert2'
@Component({
  selector: 'app-finished-works',
  templateUrl: './finished-works.component.html',
  styleUrls: ['./finished-works.component.scss']
})
export class FinishedWorksComponent implements OnInit {

  constructor(public controlNotes: ControllerLoginService) { }

  ngOnInit(): void {
    this.getNotes(1);
  }

  public arrNotesGetB: any = [];
  public cantNotB: number = 0;
  getNotes(state:number) {
    this.controlNotes.getNotes( sessionStorage.getItem('token'), state ).subscribe( notes => {
      this.arrNotesGetB = notes;
      console.log(this.arrNotesGetB)
      this.cantNotB = this.arrNotesGetB.length;
    })
  }

  dNotes( id:number ) {
    this.controlNotes.delNotes(id, sessionStorage.getItem('token')).subscribe( del => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'info',
        title: 'Nota borrada exitosamente'
      })

      this.getNotes(1);

    })
  }

}
