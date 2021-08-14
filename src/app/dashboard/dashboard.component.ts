import { Component, OnInit } from '@angular/core';
import { ControllerLoginService } from '../Services/controller-login.service';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
import * as moment from 'moment';
import { ControlclassstasksService } from '../Services/controlclassstasks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public titulo_mod:  string = '';
  public descrip_mod: string = '';
  public date_mod:    string = '';
  public date_mod_fin:string = '';
  public estate_user: any;
  public userSession: any;
  public boolTime: boolean = false;
  public arrSum: any = [];

  constructor(public controlNotes: ControllerLoginService, public cClassCont: ControlclassstasksService) { }

  ngOnInit(): void {
    this.getNotes(0);
    this.userSession = sessionStorage.getItem('user');
    this.getClases();
  }

    public arrclassj: any = [];
    public codec: any;
    getClases() {
      const a = <HTMLElement> document.getElementById('sumsSec');
      this.cClassCont.getClassTasks(sessionStorage.getItem('token')).subscribe( j => {
        this.arrclassj = j;
      })
    }

  sumClass(state: number, classtype: string) {
    this.cClassCont.sumClassTasks(sessionStorage.getItem('token'), state, classtype).subscribe( sum => {
      this.arrSum = sum;
      // this.codec = this.arrSum[0].codec;
      console.log(this.arrSum);
    })
  }

  public arrNotes: any = [];
  public rec_fin: number = 0.00;
  saveNotes() {

    if( this.date_mod_fin == undefined || this.date_mod == undefined )
    {
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
        title: 'Las fechas no pueden ir vacías'
      })
    }

    else {
      this.arrNotes = {
        user_token_ds: sessionStorage.getItem('token'),
        name_notes: this.titulo_mod,
        des_notes: this.descrip_mod,
        date_notes: this.date_mod,
        date_notes_final: this.date_mod_fin,
        date_notes_real: new Date(),
        estate: 0,
        tag_class: '',
        codec_task: '',
        rec_fin: this.rec_fin
      }

      this.getDateCalc(this.date_mod_fin);

     //console.log(this.arrNotes);

     this.controlNotes.saveNotes(this.arrNotes).subscribe( x => {
       console.log(x);
       const Toast = Swal.mixin({
         toast: true,
         position: 'bottom-start',
         showConfirmButton: false,
         timer: 2000,
         timerProgressBar: true,
         didOpen: (toast) => {
           toast.addEventListener('mouseenter', Swal.stopTimer)
           toast.addEventListener('mouseleave', Swal.resumeTimer)
         }
       })

       Toast.fire({
         icon: 'success',
         title: 'Tarea añadida exitosamente'
       })

      this.getNotes(0);
    }, () => {
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
        title: 'Algo ha salido mal'
      })
    })
  }
  }

  public arrNotesGet: any = [];
  public dateA: any;
  public dateB: any;
  getNotes(state:number) {
    this.controlNotes.getNotes( sessionStorage.getItem('token'), state ).subscribe( notes => {
      this.arrNotesGet = notes;
      console.log(this.arrNotesGet);
    })
  }

  public Task: string = '-No seleccionado-'
  getDataTask(a: string) {
    this.Task = a;
  }


  public timelapse: any;
  getDateCalc(a: any) {
    let date = a;
    this.timelapse = moment(date, "YYYYMMDD").fromNow();
    console.log(this.timelapse);
  }
  public asign: any;
  public asignCodec: any;
  getClassAsign( a: any, b: any ) {
    this.asign = a;
    this.asignCodec = b;
    localStorage.setItem('tag_class', this.asign);
    localStorage.setItem('codek_task', this.asignCodec);

    console.log(this.asign);
    //return this.asign;
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

      this.getNotes(0);

    })
  }

  /*
  Breve descripcion de los estados:
  1: Tarea terminada
  2: Tarea descartada
  0: Tarea comenzada
  */

  public pnotesArr: any = [];
  pNotes( id: number, titulo: string, descrip: string, dateA: any, dateB: any, estate: number, rec_fins: number ) {

    this.pnotesArr = {
      user_token_ds:    sessionStorage.getItem('token'),
      name_notes:       titulo,
      des_notes:        descrip,
      date_notes:       dateA,
      date_notes_final: dateB,
      date_notes_real:  new Date(),
      estate: estate,
      id: id,
      tag_class: '',
      codek_task: '',
      rec_fin: rec_fins
    }

    //console.log(this.pnotesArr);

    this.controlNotes.putNotes(id, this.pnotesArr).subscribe(  update => {
      //console.log(update);
      this.getNotes(0);
      window.location.reload();
    })

  }

  public editWordsDes: any;
  public editWordsTitle: any;
  public date_init: any;
  public date_fin: any;
  saveLocalData( id: number, titulo: string, descrip: string, dateA: any, dateB: any, estate: number, rec_fins: number, tag_class: string, codek_task: string ) {

    localStorage.setItem('id', id.toString());
    localStorage.setItem('name_notes', titulo);
    localStorage.setItem('des_notes', descrip);
    localStorage.setItem('date_notes', dateA);
    localStorage.setItem('date_notes_final', dateB);
    localStorage.setItem('estate', estate.toString());
    localStorage.setItem('estate', estate.toString());
    localStorage.setItem('tag_class', tag_class);
    localStorage.setItem('codek_task', codek_task);
    localStorage.setItem('rec_fin', rec_fins.toString());

    this.rec_fin        = Number(localStorage.getItem('rec_fin'));
    this.editWordsDes   = localStorage.getItem('des_notes');
    this.editWordsTitle = localStorage.getItem('name_notes');

    this.date_init = localStorage.getItem('date_notes');
    this.date_fin  = localStorage.getItem('date_notes_final');

  }

  pNotesEdit(dA: any, dB: any, ctask: string) {

    if(dA == undefined && dB == undefined) {
      dA = localStorage.getItem('date_notes');
      dB = localStorage.getItem('date_notes_final');
    }

    this.pnotesArr = {
      user_token_ds:    sessionStorage.getItem('token'),
      name_notes:       localStorage.getItem('name_notes'),
      des_notes:        this.editWordsDes,
      date_notes:       dA,
      date_notes_final: dB,
      date_notes_real:  new Date(),
      estate: 0,
      id: localStorage.getItem('id'),
      tag_class: localStorage.getItem('tag_class'),
      codek_task: ctask,
      rec_fin: this.rec_fin
    }

    console.log('REULTADO');
    console.log(this.pnotesArr);

    this.controlNotes.putNotes(Number(localStorage.getItem('id')), this.pnotesArr).subscribe(  update => {
      //console.log(update);
      this.getNotes(0);
      //window.location.reload();

      Swal.fire(
        `Tarea: ${ localStorage.getItem('name_notes') }`,
        'Editada con éxito',
        'success'
      )

    })

  }

}
