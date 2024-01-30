Projet maintenance applicative

Vous avez un projet de parc d'attraction, pour l'instant, on peut uniquement ajouter des attractions (connexion administrateur) et les visualiser (visiteur).
Il vous faut reprendre le projet et le continuer.
Certains éléments du projet sont à reprendre, mais ne sont pas explicites dans le cahier des charges, c'est à vous d'identifier les problèmes et de les corriger.


"Carte blanche", vous pouvez soumettre des propositions de changements à conditions :
- Me dire les avantages/inconvénients de votre solution par rapport à l'existant
- Si vous avez des soucis, c'est votre problème
- Vous devez utiliser docker


Notation :
- Mise en place des fonctionnalités décrites dans le cahier des charges
- Respect des consignes
- Qualité de code
- Commit réguliers et clairs


Quelques pistes sur quoi commencer :
- Faire le bilan de l'existant
- Établir un début de schéma BDD

Mise en place du projet :
- Git clone le projet
- Faire une nouvelle branche avec comme nom : <NOM>-<PRENOM>
- Build le docker compose
- Lancer le docker compose
- Aller dans le container python
  - docker exec -it cours-api-1 sh
  - Lancer les scripts python dans l'ordre : init.py puis create.py
- Le projet est lancé
