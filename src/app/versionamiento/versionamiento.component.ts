import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-versionamiento',
  templateUrl: './versionamiento.component.html',
  styleUrls: ['./versionamiento.component.scss']
})
export class VersionamientoComponent implements OnInit {

  public dateNow = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
