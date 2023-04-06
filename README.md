# workshop5 distanciel CRM Open Source-back

Lancé par NK Informatique le but de ce projet de workshop est la conception d'un CRM open source, ne comprenant que les fonctionnalités primaires et le plus facile à utiliser possible.
Cette décision vient du constat que les nombreux CRM open source déjà disponible sur le marché souffrent de leur complexité et de leurs trop nombreuses fonctionnalités inutiles dans leur usage le plus courant.

Vous trouverez dans ce document la présentation de la partie back de notre projet ainsi que son installation.

## Liens utiles

Les différents liens vers les autres éléments du projet sont listés [ici](https://linktr.ee/workshopteam6).

## Technologies

Pour la partie Back-end du projet, nous avons choisir de faire une API REST avec Node JS Express et une base de données NoSQL MongoDB. L'ORM utilisé est Mongoose.

## Installation

### Prérequis

Le projet nécessite l'instalation de Node JS. S'il n'est pas déjà installé sur votre environnement de développement, vous trouverez la dernière version sur le site [nodejs](https://nodejs.org).

### Base de données

- Se connecter ou créer un compte gratuit MongoDB : [MongoDB](https://www.mongodb.com/atlas/database).
- Créer un "Cluster" puis le configurer avec l'option AWS et uniquement les options gratuites.
- Accéder à l'onglet "Database Access" et créer un utilisateur ayant les accès de lecture et d'écriture.
- Choisisser le nom d'utilisateur ainsi que le mot de passe et les noter.

### Serveur Node

- Cloner ce repository.
- Dans votre IDE favori, ouvrir le terminal.
- Taper "npm i" pour installer les dépendences lors de l'installation.
- Taper "nodemon server" pour lancer le serveur.

Le server sera accessible sur `http://localhost:3000/`. Pour changer de port, aller sur le fichier server.js, ligne 16.

### Connexion de la base de données à l'API

Depuis MongoDB Atlas, cliquez sur le bouton Connect et choisissez Connect your application. Sélectionnez bien la version la plus récente du driver Node.js, puis Connection String Only, et faites une copie de la chaîne de caractères retournée.
Dans le fichier App.js ligne 13, coller (et remplacer) la chaîne de caractères.

### Création d'un utilisateur Admin

Grâce à la route GET /api/user/register, vous pouvez uniquement créer un compte utilisateur ayant des droits restreints.
Afin d'avoir un compte ayant les droits admins, créez un compte utilisateur. Puis modifier la valeur "isAdmin" à "true" dans votre base de données MongoDB.

## Déploiement de l'API

Dans le cadre de ce projet, nous avons déployer notre API avec la version gratuite de Render.com. La version gratuite ayant des fonctionnalités limitées, le temps de réponse de l'API peut parfois être de plusieurs secondes.

- Créer un compte sur [render.com](https://render.com/).
- Choisisser “New Web Service”.
- Copier / coller votre Public Git Repository dans le champ prévu et cliquer sur “continue”.
- Donner un nom à votre projet, mettre “npm install” au lieu de “yarn” dans build command et renseigner “node server” dans start command.

Le serveur se déploiera.
Si vous faites un nouveau commit sur votre repository, il vous faudra cliquer sur "manual deploy".

## Auteurs

- CHARPENTIER Guillaume : M2 DEV
- LOCQUET Pierre : M2 DEV
- ROUSSEAU Claire : B3 DEV
- THOUVENEL Vincent : B3 OPS
