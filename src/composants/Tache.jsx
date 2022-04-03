import './Tache.scss';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import IconButton from '@mui/material/IconButton';

export default function Tache({tache, dateModif}) {
  //Variable contenant la date de l'objet
  const jour = dateModif.toDate().toLocaleDateString('fr-CA', {day:"2-digit", month: "long", year:"numeric"});
  //Variable contenant l'heure de l'objete
  const heure = dateModif.toDate().toLocaleTimeString('en-GB');
  //Concat des strings dans jour et heure
  dateModif = jour + " à " + heure;

  return (
    <div className="Tache">
      <IconButton color='success'>
        <CheckCircleIcon/>
      </IconButton>
      <span className="texte">{tache}</span>
      <span className="date">({dateModif})</span>
      <IconButton color='error'>
        <DoDisturbOnIcon/>
      </IconButton>
    </div>
  );
}