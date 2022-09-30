import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-admin-accueil',
  templateUrl: './admin-accueil.page.html',
  styleUrls: ['./admin-accueil.page.scss'],
})
export class AdminAccueilPage implements OnInit {
  totalSalleLibre:any;
  totalApprrenant:any;
  apprenantsTotal: any;
  participantTotal: any;

    nom:any;
    prenom:any;
  

      constructor(private service:ServicesService) { }

      ngOnInit() {

    //    Chargement du nombre de salle disponoble
        this.service.totalSallesDisponible().subscribe(data=>{
          this.totalSalleLibre = data
        })
    // Ici on charge le nombre total des Apprenants
        this.service.apprenantOUParticipant("apprenant").subscribe(data=>{
          this.apprenantsTotal = data
        })
    // Ici on charge le nombre total des Participants
    this.service.apprenantOUParticipant("participant").subscribe(data=>{
      this.participantTotal = data

      // Ici on charge les sessions

      this.prenom = sessionStorage.getItem("prenom_users");
      this.nom = sessionStorage.getItem("nom_users")

})

  }

}
