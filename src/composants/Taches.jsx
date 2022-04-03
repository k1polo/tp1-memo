import { useEffect, useState } from 'react';
import Tache from './Tache';
import './Taches.scss';
import * as tacheModele from '../code/tache-modele';

export default function Taches({gererAjoutTache, taches, setTaches, utilisateur}) {
  
  const [tache, setTache] = useState('');

  useEffect(
    () => tacheModele.lireTout(utilisateur.uid).then(
      lesTaches => setTaches(lesTaches)
    )
    ,[utilisateur, setTaches]
  );

  
  function ajoutTache(event) {
    event.preventDefault();
    setTache("");
    gererAjoutTache(tache);
  };

  return (
    <section className="Taches">
      <form onSubmit={ajoutTache}>
        <input 
          type="text"   
          placeholder="Ajoutez une tâche ..." 
          name="texteTache"
          autoComplete="off" 
          onChange={(e) => setTache(e.target.value)}
          id="tache"
          value={tache}
        />
      </form>
      <div className="liste-taches">
        {
          taches.map(
            tache => <Tache key={tache.id} {...tache}/>
          )
        }
      
      </div>
    </section>
  );
}