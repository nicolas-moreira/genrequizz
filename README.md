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

Pour pouvoir utiliser correctement ce projet sur votre machine , suivez ces etapes **IMPORTANT**.

1. Rendez-vous sur sur https://account.mongodb.com/account/login et créer vous un compte
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
7. Lancez la commande suivante pour ajouter les prenoms a votre collection
  ```sh
  npm populateDB
  ```
  
## Usage

* Console
  ```sh
  npm start
  ```
## Fonctionnement technique

### Organisation

Les fichiers sont organises de façon a pouvoir implimenter de nouvelles fonctionalites sans problemes.
#### Config
Le fichier config est utilisé pour stoquer les cles d'api ou autres configurations comme le port utiliser pour express.

#### public
Le repertoire public comporte tout les fichiers 'css,js,images' qui sont envoyées au client.
Ce repertoire est un chemin static, les fichiers a l'interieur sont consultés depuis la racine du site
pour acceder a "public/css/main.css" on utilise "/css/main.css", vous trouverez cette implementation dans le fichier app.js

* app.js
 ```js
11 - app.use(express.static(path.join(__dirname, "public")));
 ```

#### views
Le repertoire views contient les pages qui seront envoyées au client, les fichiers a l'interieur sont des fichiers pug.
Pug est un outil de templatage qui permet de générer du code HTML, sont utilisation simpifie l'ecriture et la lisibilité du code html.

#### routes
Le repertoire routes contient le fichier newName.js, cette route permet au client de recuperer des données du serveur.

* newName.js

Ce script va choisir aleatoirement un prenom dans la base de données, ensuite avec ce prenom on fait appel a l'api GENDERAPI pour recuperer des informations sur ce prenom.
On ne garde que le genre, et on envois le prenom et le genre sous forme de JSON au client lorsqu'il fait une demande de nouveau prenom.

#### schemas
Ce repertoire stoque les differents schemas pour la base de données. il est necessaire pour ajouter de nouvelles données a une collection ou de les recuperer.


#### source 
Dans ce repertoire on trouve les fichiers utilisés par le serveur, ici il n'existe qu'un seul names.txt. Ce fichier comporte des noms prenoms.

### Logique du jeux

La logique du jeux est stocké dans "public/js/main.js". Le script est codé de façon a reagir lorsque l'utilisateur appuie sur les boutons visibles sur la page.
Une variable points stoque les points du joueur. lorsqu'il a une bonne ou une mauvaise réponse, les points sont recalcules a l'aide de la fonction checkAnswer()

Pour savoir si la réponse est bonne, une verification est faite lorsque le joueur appuie sur l'un des boutons la fonction checkAnwser() va effectuer une comparaison entre le choix du joueuer et la réponse reçu par le serveur.

A chaque clique sur l'un des boutons (masculin,feminin) une fonction est appelé: checkGameStatus().
Cette fonctiona pour but de verifier si le joueur a 20 points (gagne), 0 points (perdu). Si aucune des deux est valide un nouveau prenom est demandé avec la fonction newName().

La fonction newName fait appel a la fonction fetchData() qui vas faire un appel au serveur sur la route /newName, les données reçues sont ensuite placés sur le site a l'aide de la fonction replaceData() qui vas changer les données de la variable globale data (utilisé un peu partout sur le script).

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Nicolas Moreira - [Linkedin](https://www.linkedin.com/in/nicolas-o-moreira/) - nicolasmoreira.pro@gmail.com

Lien du projet: [https://github.com/nicolas-moreira/genrequizz](https://github.com/nicolas-moreira/genrequizz)
