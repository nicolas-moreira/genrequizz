<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://images-eu.ssl-images-amazon.com/images/I/71k5kfdB9KL.png">
    <img src="https://images-eu.ssl-images-amazon.com/images/I/71k5kfdB9KL.png" alt="Logo" width="1024" height="500">
  </a>

  <h3 align="center">Genre Quizz</h3>

  <p align="center">
    Un jeux ou tu dois choisir le genre d'un prenom
</p>


<!-- ABOUT THE PROJECT -->
## A propos
### Concu avec

* [nodeJs](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [Pug](https://pugjs.org/)
* [Bootstrap](https://getbootstrap.com)

## Mise en place


### Prérequis

* npm
```sh
npm install npm@6.14.13
```

* mongodb (cloud)
```sh
https://account.mongodb.com/account/login
```

### Installation

1. Obtenez une clé API gratuite à l'adresse suivante [https://gender-api.com/](https://gender-api.com/)
2. Cloner le repo
```sh
git clone https://github.com/nicolas-moreira/genrequizz.git
```
3. Installer les paquets NPM
```sh
npm install
```
4. Entrez votre cle API dans `config/default.json`
```json
"genderAPI": {
"API_KEY": "Entrez votre clé ici'"
}
```

### Installation mongodb

Pour pouvoir utiliser correctement ce projet sur votre machine, suivez ces etapes **IMPORTANT**.

1. Rendez-vous sur https://account.mongodb.com/account/login et créer vous un compte
2. Créer un nouveau projet intitulez le comme vous le souhaitez.
3. Puis créer un cluster (tier gratuit disponible)
4. Rendez-vous sur vos collections et créez une nouvelle base de données, utiliser names pour le nom de la collection
5. Créer un lien de connexion, utiliser se connecter à une application.
6. Entrez votre cle API dans `config/default.json`
```json
"mongodb":{
"connectionString": "Entrez le lien de l'etape 5 ici"
}
```
7. Lancez la commande suivante pour ajouter les prénoms a votre collection.
```sh
npm test
```

## Usage

* Console
```sh
npm start
```
* Ajouter des données dans la base de donnés 
```sh
npm test
```

## Fonctionnement technique

### Organisation

Les fichiers sont organisés de façon à pouvoir implémente de nouvelles fonctionnalités sans problèmes.
#### Config
Le fichier config est utilisé pour stoker les clés d'api ou autres configurations comme le port utiliser pour express.

#### public
Le répertoire public comporte tout les fichiers 'css,js,images' qui sont envoyées au client.
Ce répertoire est un chemin static, les fichiers a l'intérieur sont consultés depuis la racine du site
Pour accéder a "public/css/main.css" on utilise "/css/main.css", vous trouverez cette implémentation dans le fichier app.js

* app.js
```js
11 - app.use(express.static(path.join(__dirname, "public")));
```

#### views
Le répertoire views contient les pages qui seront envoyées au client, les fichiers a l'interieur sont des fichiers pug.
Pug est un outil de templatage qui permet de générer du code HTML, son utilisation simplifie l'écriture et la lisibilité du code html.

#### routes
Le répertoire routes contient le fichier newName.js, cette route permet au client de récupérer des données du serveur.

* newName.js

Ce script va choisir aléatoirement un prénom dans la base de données, ensuite avec ce prénom, on fait appel à l'api GENDERAPI pour récupérer des informations sur ce prénom.
On ne garde que le genre, et on envoie le prénom et le genre sous forme de JSON au client lorsqu'il fait une demande de nouveau prénom.

#### schémas
Ce répertoire stock les différents schémas pour la base de données. Il est nécessaire pour ajouter de nouvelles données à une collection ou de les récupérer.


#### source
Dans ce répertoire, on trouve les fichiers utilisés par le serveur, ici, il n'existe qu'un seul fichier names.txt. Ce fichier comporte des noms prénoms.

### Logique du jeux

La logique du jeu est stockée dans "public/js/main.js". Le script est codé de façon a réagir lorsque l'utilisateur appuie sur les boutons visibles sur la page. Un variable points stock les points du joueur. Lorsqu'il a une bonne ou une mauvaise réponse, les points sont recalcules a l'aide de la fonction checkAnswer()

Pour savoir si la réponse est bonne, une vérification est faite lorsque le joueur appuie sur l'un des boutons la fonction checkAnwser() va effectuer une comparaison entre le choix du joueur et la réponse reçue par le serveur.

À chaque clique sur l'un des boutons (masculin, féminin) une fonction est appelée: checkGameStatus(). Cette fonction a pour but de vérifier si le joueur a 20 points (gagne.), 0 points (perdu). Si aucune des deux n'est pas valide un nouveau prénom est demandé avec la fonction newName().

La fonction newName fait appel a la fonction fetchData() qui vas faire un appel au serveur sur la route/newName, les données reçues sont ensuite placés sur le site a l'aide de la fonction replaceData() qui vas changer les données de la variable globale data (utilisé un peu partout sur le script).

## Points a améliorer

#### [ ] Sauvegarde de l'état de la partie

Il serait bien d'ajouter un système de sauvegarde. Avec le localstorage on peut stocker des données sur le navigateur du client.
Une bonne façon de le faire serait de sauvegarder le nombre de points en mémoire a chaque actualisation de le variable point.

#### [ ] Vérifier la réponse en backend

Il est très facile de tricher en modifiant ces points, une bonne amélioration serait de vérifier si la réponse est correcte directement depuis le serveur puis de renvoyer une réponse au client. Celle-ci comporte une réponse positive ou négative.

Un plus serait de stocker les points du joueur dans une nouvelle collection de données (mongodb) pour éviter toute triche.

####  [x] Ajouter de nouveaux prénoms 
Une nouvelle page permettant d'importer une liste de prénoms


## License


Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Nicolas Moreira - [Linkedin](https://www.linkedin.com/in/nicolas-o-moreira/) - nicolasmoreira.pro@gmail.com

Lien du projet: [https://github.com/nicolas-moreira/genrequizz](https://github.com/nicolas-moreira/genrequizz)
