export class Session {

  constructor(
    public nomSession?: string,
    public nomCentre?: string,
    public nomCertification?: string,
    public nomSalleFormation?: string,
    public nbrJoursFormation?: number,
    public nbrStagiairesFormation?: number,
    public nomSociete?: string,
    public dateDebutSession?: Date,
    public dateFinSession?: Date,
    public totCout_HT?: Float32Array,
    public tot_CA_HT?: Float32Array,
    public margeBrute_HT?: Float32Array,
    public pourcMargeBrute?: number
  ) {
  }
}
