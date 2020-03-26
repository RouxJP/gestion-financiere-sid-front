import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { Session } from '../models/Session';

/** Url d'acces aux services web du back */
const urlRechercherSession = environment.baseUrl + environment.RechercherSessionUrl;

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor( private httpClient: HttpClient) { }


  /** Rechercher la liste des sessions filtrées par : 
   *    - libellé : établissement / formation / salle / certification / entreprise
   *    - période : date de début, date de fin
   * Chaque filtre est optionnel et pour les libellés on peut saisir un sous libelle
   */
  rechercherSession(  etablissement: string,  formation: string,  salle: string, 
                      certification: string,  entreprise: string, 
                      dateDebutSession: Date, dateFinSession: Date): Observable<string[]> {
    let Session: Observable<string[]>;
    let urlGet: string;

    urlGet = urlRechercherSession + '?etablissement='    + etablissement     + '&formation='      + formation 
                                  + '&salle=' + salle    + '&certification=' + certification      + '&entreprise='    + entreprise 
                                  + '&dateDebutSession=' + dateDebutSession  + '&dateFinSession=' + dateFinSession;
    console.log( urlGet);
    Session = this.httpClient.get<string[]>(urlGet);
    /**
     * Session.forEach(element => {
      console.log(element);
    });
    */

    return Session;

  }

  
}

