import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'authentification',
    pathMatch: 'full'
  },
  {
    path: 'sidebar',
    loadChildren: () => import('./sidebar/sidebar.module').then( m => m.SidebarPageModule)
  },
  {
    path: 'admin-accueil',
    loadChildren: () => import('./admin-accueil/admin-accueil.module').then( m => m.AdminAccueilPageModule)
  },
  {
    path: 'activite',
    loadChildren: () => import('./activite/activite.module').then( m => m.ActivitePageModule)
  },
  {
    path: 'liste-utilisateur',
    loadChildren: () => import('./liste-utilisateur/liste-utilisateur.module').then( m => m.ListeUtilisateurPageModule)
  },
  {
    path: 'liste-acteur',
    loadChildren: () => import('./liste-acteur/liste-acteur.module').then( m => m.ListeActeurPageModule)
  },
  {
    path: 'postulant-tire',
    loadChildren: () => import('./postulant-tire/postulant-tire.module').then( m => m.PostulantTirePageModule)
  },
  {
    path: 'tirage',
    loadChildren: () => import('./tirage/tirage.module').then( m => m.TiragePageModule)
  },
  {
    path: 'authentification',
    loadChildren: () => import('./authentification/authentification.module').then( m => m.AuthentificationPageModule)
  },
  {
    path: 'liste-postulant',
    loadChildren: () => import('./liste-postulant/liste-postulant.module').then( m => m.ListePostulantPageModule)
  },
  {
    path: 'liste-salle',
    loadChildren: () => import('./liste-salle/liste-salle.module').then( m => m.ListeSallePageModule)
  },
  {
    path: 'ajouter-postulant',
    loadChildren: () => import('./ajouter-postulant/ajouter-postulant.module').then( m => m.AjouterPostulantPageModule)
  },
  {
    path: 'ajouter-participant',
    loadChildren: () => import('./ajouter-participant/ajouter-participant.module').then( m => m.AjouterParticipantPageModule)
  },
  {
    path: 'detail-activite',
    loadChildren: () => import('./detail-activite/detail-activite.module').then( m => m.DetailActivitePageModule)
  },
  {
    path: 'profile-admin',
    loadChildren: () => import('./profile-admin/profile-admin.module').then( m => m.ProfileAdminPageModule)
  },  {
    path: 'salle',
    loadChildren: () => import('./salle/salle.module').then( m => m.SallePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
