import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPage = {};
  cargada = false;
  equipo: any[] = [];

  constructor( private http: HttpClient) { 
    this.cargarInfo();
    this.cargarEquipo();
      
  }

  private cargarInfo() {
    this.http.get('assets/data/data-pages.json')
      .subscribe( (resp: InfoPage) => {
        this.cargada = true;
        this.info = resp;
      });
  }

  private cargarEquipo() {
    this.http.get('https://angular-html-a8b9b-default-rtdb.firebaseio.com/equipo.json')
      .subscribe( (resp: any) => {
        this.equipo = resp;
      });
  }

}
