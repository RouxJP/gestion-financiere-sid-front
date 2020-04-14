import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { Session } from '../models/Session';

/** Url d'acces aux services web du back */
const urlRechercherSession = environment.baseUrl + environment.RechercherSessionUrl;


@Injectable({
  providedIn: 'root'
})

export class DataService {

  sessionSelectionnee: String;

  constructor(private httpClient: HttpClient) { }


  /** Rechercher la liste des sessions filtrées par : 
   *    - libellé : établissement / formation / salle / certification / entreprise
   *    - période : date de début, date de fin
   * Chaque filtre est optionnel et pour les libellés on peut saisir un sous libelle
   */
  rechercherSession(etablissement: string, formation: string, salle: string,
    certification: string, entreprise: string,
    dateDebutSession: Date, dateFinSession: Date): Observable<Session[]> {
    let ObsSession: Observable<Session[]>;
    let urlGet: string;

    urlGet = urlRechercherSession + '?etablissement=' + etablissement + '&formation=' + formation
      + '&salle=' + salle + '&certification=' + certification + '&entreprise=' + entreprise
      + '&dateDebutSession=' + dateDebutSession + '&dateFinSession=' + dateFinSession;
    console.log(urlGet);
    ObsSession = this.httpClient.get<Session[]>(urlGet);

    /* Attention c'est asynchrone 
        ObsSession.forEach(element => {
          for (let i = 0; i < element.length; i++) {
             if (i % 2 == 0) {
              element[i].valeurAttributClasseLigne = "divider";
            } else {
              element[i].valeurAttributClasseLigne = "";
            }
            console.log("element " + i + " : " + element[i].valeurAttributClasseLigne);
          }
        });
    
        
        ObsSession.subscribe({
          next(value) { console.log( value ) },
          complete() { console.log("C'est fini!1"); }
         });
    
        ObsSession.pipe(
          tap((value) => console.log('Avant : ' + value)),
          map( listSession => listSession.forEach( session => { console.log( session)} )),
          //map( dataArray => dataArray.join(",*** ")),
          tap((value) => console.log('Après : ' + value)),
                       ).subscribe((value) => {
                          console.log(value); 
                        });
    */

    ObsSession.forEach(element => {
      for (let i = 0; i < element.length; i++) {
        console.log("element " + i + " : " + element[i].valeurAttributClasseLigne);
      }
    });

    return ObsSession;

  }

  /** Sauver la session sélectionnée 
   * 
   */
  setSessionSelectionnee( nomSession: String) {
    this.sessionSelectionnee = nomSession;
  }


}

