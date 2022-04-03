import './Appli.scss';
import logo from '../images/memo-logo.png';
import Controle from './Controle';
import Taches from './Taches';
import Accueil from './Accueil';
import Utilisateur from './Utilisateur';
import { useState, useEffect } from 'react';
import { observerEtatConnexion } from '../code/utilisateur-modele';
import * as tacheModele from '../code/tache-modele';

export default function Appli() {
  // État 'utilisateur'
  const [utilisateur, setUtilisateur] = useState(null);

  const [taches, setTaches] = useState([]); 


  function gererAjoutTache(tache) {
    tacheModele.creer(utilisateur.uid, {
      tache: tache,
    }).then(
      doc => setTaches([{id: doc.id, ...doc.data()}, ...taches])
    );
  }
  //Surveiller l'état de la connexion Firebase Auth
  useEffect(() => observerEtatConnexion(setUtilisateur),[]);
  return (
    utilisateur ?
      <div className="Appli">
        <header className="appli-entete">
        <img src={logo} className="appli-logo" alt="Memo" />
        <Utilisateur utilisateur={utilisateur}/>
         </header>
         <Taches gererAjoutTache={gererAjoutTache} taches={taches} setTaches={setTaches} utilisateur={utilisateur}/>
         <Controle />
     </div>
    :
      <Accueil />
  );
}
