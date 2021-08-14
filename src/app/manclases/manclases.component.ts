import { Component, OnInit } from '@angular/core';
import { ControlclassstasksService } from '../Services/controlclassstasks.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-manclases',
  templateUrl: './manclases.component.html',
  styleUrls: ['./manclases.component.scss']
})
export class ManclasesComponent implements OnInit {

  public nombre_clas: string = '';
  public color_clas: string = '';
  public codec: string = '';

  constructor( public cClass: ControlclassstasksService ) { }

  ngOnInit(): void {
  }


  public arrTask: any = [];
  pClassTask() {

    this.arrTask = {
      user_token_clas: sessionStorage.getItem('token'),
      nombre_clas: this.nombre_clas,
      color_clas: this.color_clas,
      estate: 0,
      codec: this.codec
    }

    this.cClass.postClassTasks(this.arrTask).subscribe( x => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Clase creada con éxito'
      })

      window.location.reload();

    },() => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'error',
        title: '¡Algo ha salido mal!'
      })
    } )

  }



}
