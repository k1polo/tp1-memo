import './Appli.scss';
import logo from '../images/memo-logo.png';
import Controle from './Controle';
import Taches from './Taches';
import Accueil from './Accueil';
import Utilisateur from './Utilisateur';
import { useState, useEffect } from 'react';
import { observerEtatConnexion } from '../code/utilisateur-modele';

export default function Appli() {
  // État 'utilisateur'
  const [utilisateur, setUtilisateur] = useState(null);

   //Surveiller l'état de la connexion Firebase Auth
   useEffect(() => observerEtatConnexion(setUtilisateur),[]);
  return (
    utilisateur ?
      <div className="Appli">
        <header className="appli-entete">
        <img src={logo} className="appli-logo" alt="Memo" />
        <Utilisateur utilisateur={utilisateur}/>
         </header>
         <Taches />
         <Controle />
     </div>
    :
      <Accueil />
  );
}
