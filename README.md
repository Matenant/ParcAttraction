**Projet maintenance applicative**

INFORMATIONS TECHNIQUES : 
Version angular  : 17
Version material : 17 (composant pré-fabriqué pour les formulaires)
Version python   : 3.10 

Vous avez un projet de parc d'attraction, pour l'instant, on peut uniquement ajouter des attractions (connexion administrateur) et les visualiser (visiteur).
Il vous faut reprendre le projet et le continuer.
Certains éléments du projet sont à reprendre, mais ne sont pas explicites dans le cahier des charges, c'est à vous d'identifier les problèmes et de les corriger.

Si vous avez des questions n'hésitez pas

Merci de faire (cela compte dans la notation):
- Un code de qualité (indentation !)
- Des commits réguliers et clairs

Quelques pistes sur quoi commencer :
- Faire le bilan de l'existant (ce qui fonctionne ou non)
- Explorer le projet (parcourir les fichiers, les urls, les apis)
- Établir un début de schéma BDD

**Si vous avez des soucis lors de l'installation du projet, vous m'appelez**

Mise en place du projet :
- **Faite une copie du projet** (à récupérer sur : https://github.com/Matenant/ParcAttraction), il y a deux versions une sur master et une sur macOs, **les élèves ayant un mac doivent prendre le projet sur la branche macOs**
- **Faite un nouveau repository** et me **l'envoyer à** l'adresse **faivrem22@gmail.com** avec **<NOM>** et **<PRENOM>**

Lancement du projet :
- **Build le docker compose** (dans le dossier du projet dans un terminal : docker compose build) **A FAIRE UNE SEULE FOIS**
- **Lancer le docker compose** (dans le dossier du projet dans un terminal : docker compose up)
Une fois que tout est fini :
- Le projet est lancé
Pour tester : 
Adresse angular :
https://parcattraction/accueil
Adresse api :
https://api/

Si vous voulez **relancer les scripts de base de données** (pour les ajouts et modification de données) faites :
docker compose exec api sh
puis :
python3 init.py
Si vous n'avez pas de message d'erreur c'est que ça a fonctionné !