Projet maintenance applicative

Vous avez un projet de parc d'attraction, pour l'instant, on peut uniquement ajouter des attractions (connexion administrateur) et les visualiser (visiteur).
Il vous faut reprendre le projet et le continuer.
Certains éléments du projet sont à reprendre, mais ne sont pas explicites dans le cahier des charges, c'est à vous d'identifier les problèmes et de les corriger.

Si vous avez des questions n'hésitez pas

Notation :
- Mise en place des fonctionnalités décrites dans le cahier des charges
- Respect des consignes
- Qualité de code
- Commit réguliers et clairs

Quelques pistes sur quoi commencer :
- Faire le bilan de l'existant
- Explorer le projet
- Établir un début de schéma BDD

Si vous avez des soucis lors de l'installation du projet, vous m'appelez
Mise en place du projet :
- Faite un clone du projet
- Faite un nouveau repository et me l'envoyer à l'adresse faivrem22@gmail.com avec <NOM> et <PRENOM>
Lancement du projet :
- Build le docker compose (dans le dossier du projet dans un terminal : docker compose build)
- Lancer le docker compose (dans le dossier du projet dans un terminal : docker compose up)
Une fois que tout est fini :
- Aller dans le container python (en console : docker compose exec api sh)
  - Lancer le script python : init.py (python3 init.py)
- Le projet est lancé
Pour tester : 
Adresse angular :
http://localhost:4200/accueil
Adresse api :
http://127.0.0.1:5000/