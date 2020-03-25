import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { NgForm } from '@angular/forms';
import { Session } from '../models/Session';

@Component({
  selector: 'app-listesessions5',
  templateUrl: './listesessions5.component.html',
  styles: []
})

export class Listesessions5Component implements OnInit {
  
  listeSessions: Observable<string[]>;

  constructor( private dataService: DataService) { }

  rechercherSession(  etablissement: string,  formation: string,  salle: string, 
                      certification: string,  entreprise: string, 
                      dateDebutSession: Date, dateFinSession: Date) {
    this.listeSessions = this.dataService.rechercherSession(  etablissement,  formation,  salle, 
                                                              certification,  entreprise, 
                                                              dateDebutSession, dateFinSession);

  }

  ngOnInit() {

  }

}
