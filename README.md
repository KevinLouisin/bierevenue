# bierevenue

---

L'application **Bierevenue** permet de gérer des bières. Cette première version permet l'ajout et la suppression de bières par un utilisateur lambda.

###Composants

L'application est construite sur les éléments suivants : 

- *NodeJS*,
- *tingoDB*,
- *AngularJS*,
- *Bootstrap*

###Installation

Cloner le projet : 
```
git clone https://github.com/KevinLouisin/bierevenue.git
```

Installer les dépendances : 
```
npm install
```

###Routes

L'application fournie contient les routes suivantes : 

- `/home` : Liste des bières
- `/new`: Ajout d'une nouvelle bière.


###API

`GET` */api/beers* : Retourne la liste des bières au format *JSON*,

`POST` */api/beers* : Ajoute une nouvelle bière,

`DELETE` */api/beers/:name* : Supprime la bière avec le nom *name*.

###Issues

- Gestion des erreurs,
- Contrôle des dépendances relationnelles (appréciations)

###A faire

- Modifier une bière,
- Connexion des utilisateurs (*titi*, *toto* et *foo*),
- Gestion des droits d'utilisateur,
- Ajout, modification et suppression d'apréciations.
