import {authFirebase, authGoogle, bdFirestore} from './init';
import {signInWithPopup, onAuthStateChanged} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
/**
 * Ouvre une connexion Firebase(avec google)
 */
export function connexion() {
    signInWithPopup(authFirebase, authGoogle);
}
/**
 * Ferme la connexion Firebase Auth
 */
export function deconnexion() {
    authFirebase.signOut()
}
/**
 * 
 */

export function observerEtatConnexion(mutateurEtatUtilisateur) {
    onAuthStateChanged(authFirebase,
        user => {
            if(user){
                //Sauvegarder le profil dans firestore
                setDoc(doc(bdFirestore, "memo", user.uid), {nom: user.displayName, courriel: user.email}, {merge: true});
            }
            mutateurEtatUtilisateur(user)
        }
    )
}