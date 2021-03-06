import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Collegue } from './auth/auth.domains';
import { DataService } from './services/data.service';

/**
 * Composant principal de l'application.
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  collegueConnecte: Observable<Collegue>;


  /** Gérer la navigation en dynamique */
  chemin1:    string[] = [];
  chemin2:    string[] = [];
  headMenu1:  string[] = [];
  headMenu2:  string[] = [];


  constructor(private _authSrv: AuthService, private _router: Router, private dataService: DataService) {

  }

  /**
 * A l'initialisation, le composant s'abonne au flux du collègue courant connecté.
 *
 * Celui lui permet de rester à jour en fonction des connexions et déconnexions.
 */
  ngOnInit(): void {

    this.collegueConnecte = this._authSrv.collegueConnecteObs;
    this.dataService.sessionSelectionnee = null;

    this.chemin1       = [ 'sessions/detail/syntheseSession', 'sessions'];
    this.headMenu1      = [ 'Synthèse des sessions', 'Recherche sessions'];
 
    this.chemin2       = [  'sessions',                               'sessions/detail/revenusSession',
                            'sessions/detail/detailCoutsFormateurs',  'sessions/detail/detailAutreCouts'];
    this.headMenu2      = [ 'Liste des sessions',                     'Détail revenu de séssion',
                            'Détail des couts formatteurs',           'Détail des autres couts'];

  }

  /**
   * Action déconnecter collègue.
   */
  seDeconnecter() {
    this.dataService.setSessionSelectionnee(null);
    this._authSrv.seDeconnecter().subscribe(
      value => this._router.navigate(['/auth'])
    );
  }


 
}
