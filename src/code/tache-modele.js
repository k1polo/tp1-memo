import { bdFirestore } from "./init";
import { getDocs, collection, addDoc, Timestamp, getDoc } from "firebase/firestore";

/**
 * Obtenir toutes les taches d'un utilisateur
 * @param {string} idUser Identifiant Firebase de l'utilisateur connecté
 * @returns {Promise<any[]>} Promesse avec le tableau des taches lorsque complétée
 */
export async function lireTout(idUser) {
    return getDocs(collection(bdFirestore, 'memo', idUser, 'taches')).then(
        res => res.docs.map(doc =>({id: doc.id, ...doc.data()}))
    );
}

/**
 * Ajouter une tache pour un utilisateur
 * @param {string} idUser Identifiant Firebase de l'utilisateur connecté
 * @param {object} tache Objet représentant la tache à ajouter 
 * @returns 
 */
export async function creer(idUser, tache) {
    //On ajoute dateModif à l'objet tache
    //En utilisant Timestamp, on obtient une date contenant le temps au serveur
    tache.dateModif = Timestamp.now();

    //Référence à la collection 
    let coll = collection(bdFirestore, 'memo', idUser, 'taches');
    //Ajout de la tache dans la reference
    let refDoc = await addDoc(coll, tache);
    //Obtenir l'objet dans la référence
    return await getDoc(refDoc);
}