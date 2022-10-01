import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tirage } from '../modeles/tirage/tirage';
import { TirageService } from '../Services/tirage/tirage.service';
import { AjouterPostulantService } from '../Services/ajouter-postulant/ajouter-postulant.service';
import { ActiviteService } from '../Services/activite/activite.service';
import { Fichier } from '../modeles/Fichier';



@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.page.html',
  styleUrls: ['./tirage.page.scss'],
})
export class TiragePage implements OnInit {

  constructor(
    private serviceTirage: TirageService,
    private ajoutPostulantService: AjouterPostulantService,
    private activiteService: ActiviteService,
    private formB: FormBuilder) { }


  tirageObjet: Tirage = {
    libelleTirage: '',
    nombrePostulantTire: 0
  }

  file!:any;
  fichier!:Fichier;

  liste$!: any;
  listeActivites$!: any
  bool_erreur: boolean = false;

  erreurImport!: any;
  libelleActivite$!:any;


    libelleTirage: ''
    nombrePostulantTire: 0
    libelleActivite:""
    libelleListe:""

    libelleActFfile:''
    libelleListeFile:''

    erreurTirage: any;

    formmodule!: FormGroup;

    fileChange(event:any){
      this.file = event.target["files"]
    }


    importerliste(){

      //on met le formulaire de l'import du fichier dans l'objet
      this.fichier = this.formmodule.value
    
      //verifie si tous les fichier sont renseigner ou pas
      if(this.fichier.libelleListe == "" || this.fichier.libelleAct == "" || this.fichier.file == null){
        //l'erreur lorsqu'il ya des champs vide
        this.erreurImport = "Veuillez renseigner tous les champs";
       
        console.log("fichier vide")
      }else{   

        

        //enregistre le fichier avec son libelle
        this.serviceTirage.addListe(this.fichier.libelleListe, this.fichier.libelleAct, this.fichier.file).subscribe(data=>{
    
          //recuperation de l'erreur lors de l'enregistrement
          this.erreurImport = data.contenuErreur;

          console.log("je passe .ts")
       console.log("retour" + data.contenu)
        

         
          this.formmodule.reset()
        })     
      }
      }

  

   

  

    
    getListePostulant(){
      this.ajoutPostulantService.recupererListePostulant().subscribe((data) =>{
        this.liste$ = data;
      })
    }

    getListeActivite(){
      this.activiteService.recupererListeActivite().subscribe((data) =>{
        this.listeActivites$ = data;
        this.libelleActivite$ = data;
      })
    }

    resetTirageForm(){
      this.libelleTirage,
      this.libelleListe = "",
      this.libelleActivite = "",
      this.nombrePostulantTire = 0
    }

    postTirage(){

      this.bool_erreur = true;
      
      this.tirageObjet.libelleTirage = this.libelleTirage;
      this.tirageObjet.nombrePostulantTire = this.nombrePostulantTire;

      if(this.libelleTirage == "" || this.libelleActivite == "" || this.nombrePostulantTire == 0){
        this.erreurTirage = "Veuillez tous champs";
      }else{
        
        this.serviceTirage.postTirage(this.libelleListe, this.libelleActivite, this.tirageObjet).subscribe((data) =>{
          this.erreurTirage = data.contenu
          console.log("Donnée envoyé avec succes");
        });

        this.resetTirageForm()
        
      }
    }







  ngOnInit() {
    this.getListePostulant();
    this.getListeActivite();

    this.formmodule=this.formB.group({
      libelleListe:["", Validators.required],
      libelleAct:["", Validators.required],
      file:["", Validators.required]
    })  

  }



}
