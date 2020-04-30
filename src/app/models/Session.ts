export class Session {

  constructor(
    public nomSession?: string,
    public nomCentre?: string,
    public nomFormation?: string,
    public nomCertification?: string,
    public nomSalleFormation?: string,
    public nbrJoursFormation?: number,
    public nbrStagiairesFormation?: number,
    public nomSociete?: string,
    public dateDebutSession?: Date,
    public dateFinSession?: Date,
    public totCout_HT?: number,
    public libTotCout_HT?: string,
    public tot_CA_HT?: number,
    public libTot_CA_HT?: string,
    public margeBrute_HT?: Number,
    public libMargeBrute_HT?: String,
    public pourcMargeBrute?: number,
    public valeurAttributClasseLigne?: String,
    public valeurAttributTd?:String
    ) {
  }

  //  get valeurAttributClasseLigne(){
  //   return this.valeurAttributClasseLigne;
  // }
  
  // set valeurAttributClasseLigne(valeurAttributClasseLigne) {
  //   this.valeurAttributClasseLigne = valeurAttributClasseLigne;
  // }
}
