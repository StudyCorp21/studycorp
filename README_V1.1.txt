STUDYCORP V1.1 — ACTIVER LA RÉCEPTION DES PROPOSITIONS
=======================================================

Le formulaire est prêt, mais il faut le relier UNE FOIS à une boîte e-mail.
L'adresse e-mail n'est pas écrite dans le code public du site.

OPTION RETENUE POUR CETTE V1.1 : FORMSPREE

1. Créez un compte sur https://formspree.io/
2. Dans Formspree, créez un nouveau formulaire (New Form).
3. Choisissez comme adresse de destination l'adresse e-mail sur laquelle vous voulez recevoir les propositions StudyCorp.
4. Formspree vous donnera un endpoint ressemblant à :
   https://formspree.io/f/abcdefgh
5. Ouvrez : js/proposer.js
6. En haut du fichier, trouvez :
   const STUDYCORP_FORM_ENDPOINT = "FORM_ENDPOINT_A_CONFIGURER";
7. Remplacez uniquement FORM_ENDPOINT_A_CONFIGURER par l'URL complète fournie par Formspree.
8. Enregistrez le fichier.
9. Dans VS Code : Source Control > Stage > Commit (ex. "Activate proposal form") > Sync/Push.
10. Une fois GitHub Pages mis à jour, faites une soumission test depuis StudyCorp.

IMPORTANT
---------
- L'e-mail du contributeur est obligatoire mais n'est pas destiné à être publié.
- Une proposition reçue n'est jamais publiée automatiquement dans cette V1.1.
- Vous vérifiez l'information puis ajoutez manuellement l'annonce à js/annonces.js.
- Le lien institutionnel est facultatif pour le contributeur, mais StudyCorp devrait le vérifier/ajouter avant publication.
- Ne mettez jamais un mot de passe, une clé privée ou un secret dans les fichiers GitHub Pages : ils sont publics côté navigateur.
