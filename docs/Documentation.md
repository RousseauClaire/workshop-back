## DOCUMENTATION
Le présent document présente les fonctionnalités de notre CRM avec pour exemple des cas concrets d’utilisation.

## Authentification
L'accès à l'application requiert une autenthification de la part de l'utilisateur.
Lorsque l'on ouvre l'application, la page de connexion apparait. L'application ne permet pas à un utilisateur de s'enregistrer. Seul l'administrateur peut créer un nouveu compte utilisateur.

### Connexion
La page de connexion permet à l'utilisateur de s'authentifier grâce à son e-mail et un mot de passe.
Une fois connecté, l'utilisateur est redirigé vers le tableau de bord, et peut accéder à toutes les fonctionnalités proposées par le CRM.

### Profil
L'utilisateur a accès à sa page de profil, où il a la possibilité de modifier les informations le concernant.
Il peut ainsi ajouter ou modifier son nom et son prénom, changer d'adresse e-mail ou de mot de passe.

## Tableau de bord (Dashboard)
Notre dashboard comporte les éléments suivants : 

### Liste des actions à mener (TO DO List)
La To Do List contient toutes les actions non terminées sous forme d'un tableau. En cliquant sur une des actions de la liste, on accède à la page de détails de l'action (décrite plus bas). 
Ce tableau permet de voir l'intitulé de chaque tâche et sa date d'échéance.
Il comporte également des boutons d'action rapide permettant d'effectuer les actions suivantes pour la tâche ciblée :
- Terminer l'action : permet de clore l'action et la passer en statut "Terminée".
- Ajouter un rappel.
- Supprimer l'action.

### Actions rapides: Export et import de contacts
Afin de faciliter la gestion des contacts, l'application permet d'importer et d'exporter les contacts (Leads, Prospects et Clients) sous format CSN.
- Export : vous pouvez choisir d'exporter la totalité des contacts, ou seulement une des catégories : Leads, Prospects ou Clients.
- Import : grâce à cette fonctionnalité, vous pouvez ajouter de nombreux contacts simplement. Cela évite d'avoir à créer manuellement et 1 par 1 les contacts au sein du CRM. 

Fonctionnalités à venir :
Nous avons également penser à la possibilité d'automatiser la création des leads, en la reliant par exemple à un formulaire de contact présent sur votre site. 
Cette fonctionnalité sera proposée pour une prochaine version du CRM.

### Statistiques
Afin d'avoir une vision rapide de l'efficacité des actions menées, nous avons choisi d'ajouté des statistiques utiles : 
- Les nombre de nouveaux leads de la semaine
- Le taux de conversion de leads en prospects
- Le taux de conversion de prospects en clients

## Listing et gestion des contacts

### Leads
Cette page nous liste les leads et indiquent leurs informations de contact ainsi que des rappels sur les actions en cours les concernant et leur date de création. Il est possible de trier les inactifs.

### Prospects
Cette page est identique à celle des leads dans son fonctionnement. Elle comporte aussi la possibilité de trier les inactifs.

### Clients
La page de listing des clients est identique à celle des lead et des prospects.

### Page de détail d'un contact
Il est possible d'avoir plus de détails sur un client en cliquant dessus. Voici un exemple :
Dans cette page on note la présence des informations de contact, du type de client (B2B/B2C) mais aussi de l'historique des actions le concernant et des boutons d'action rapide pour ajouter des actions. Un espace commentaire est aussi disponible. 

## Listing et gestion des actions
Le listing des actions apporte une vision sur les tâches et permet d'y ajouter des actions, il est possible d'avoir une vue détaillée sur une action et obtenir plus d'information notamment son texte et le média par lequel l'action a été faite.  


## Partie Admin

### Gestion des comptes utilisateurs
Cette page est accessible uniquement par le compte administrateur créé par défaut.
Elle nous apporte les informations concernant les utilisateurs du CRM : les prénoms et noms, l'email (qui sert d'identifiant) ainsi que l'intitulé du poste occupé.
Des boutons d'actions rapides permettent de modifier ou de supprimer chaque utilisateur.
En cliquant sur la ligne d'un contact, on peut accéder une page de détails sur l'utilisateur. 

### Gestion des types de média
Fonctionnalités à venir :
L'administrateur aura la possibilité de gérer (ajout, modification et suppression) la liste des types de médias pour les actions.
Cette fonctionnalité sera proposée pour une prochaine version du CRM.