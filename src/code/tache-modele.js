import { bdFirestore } from "./init";
import { getDocs, collection, addDoc, Timestamp, getDoc } from "firebase/firestore";

export async function lireTout(idUser) {
    return getDocs(collection(bdFirestore, 'memo', idUser, 'taches')).then(
        res => res.docs.map(doc =>({id: doc.id, ...doc.data()}))
    );
}

export async function creer(idUser, tache) {
    tache.dateModif = Timestamp.now();

    let coll = collection(bdFirestore, 'memo', idUser, 'taches');
    let refDoc = await addDoc(coll, tache);

    return await getDoc(refDoc);
}