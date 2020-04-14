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
  
  listeSessions: Observable<Session[]>;
   
 
  constructor( private dataService: DataService) { }

  /**
   * 
   * @param etablissement Récupérer la liste des sessions
   * @param formation 
   * @param salle 
   * @param certification 
   * @param entreprise 
   * @param dateDebutSession 
   * @param dateFinSession 
   */
  rechercherSession(  etablissement: string,  formation: string,    salle: string, 
                      certification: string,  entreprise: string, 
                      dateDebutSession: Date, dateFinSession: Date) {
    this.listeSessions = this.dataService.rechercherSession(  etablissement,    formation,    salle, 
                                                              certification,    entreprise, 
                                                              dateDebutSession, dateFinSession);
   

  }

  ngOnInit() {
    this.memoriserSession( null);
  }

   /** 
   * Sauvegarder le nom de la session sélectionnée dans la liste de session pour consulter ses données financières
   * 
   */
  memoriserSession( nomSession : String){
    console.log( 'Mémorisation session : ' + nomSession);
    this.dataService.setSessionSelectionnee( nomSession);
  }

}
