<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
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

## Installation mongodb

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


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

Nicolas Moreira - [Linkedin](https://www.linkedin.com/in/nicolas-o-moreira/) - nicolasmoreira.pro@gmail.com

Lien du projet: [https://github.com/nicolas-moreira/genrequizz](https://github.com/nicolas-moreira/genrequizz)
