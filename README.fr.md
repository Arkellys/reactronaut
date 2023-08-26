<div align="center">

<picture>
<img alt="Logo" src="src/assets/react.svg?raw=true" width="100px">
</picture>

<br />
  
Mesdames et messieurs, Reactronautes et chers passionnés de codage, bienvenue à bord de l'<b>USS React</b> ! Alors que nous nous préparons pour notre voyage à travers le Système Solaire, veuillez attacher vos ceintures et ranger vos ordinateurs en toute sécurité devant vous. Ce vol est sous votre commandement habile, car <b>vous avez été choisi pour être le pilote de cette mission</b>. Au nom de l'équipage, nous vous souhaitons un codage tout en douceur !

</div>

---

## Prérequis

Node **16+** et `yarn`.

## Règles

1. Le choix des librairies est libre (sauf UI, voir règle n°2).
2. Aucune librairie d'UI ne doit être utilisée, des styles prédéfinies sont déjà disponibles.
3. Les données doivent rester synchronisées sur toute l'application, sans rechargement de page.
4. À la fin de l'exercice, il ne doit y avoir **aucune erreur** dans la console. 😋

## Développement

[Cloner le projet](https://docs.github.com/fr/repositories/creating-and-managing-repositories/cloning-a-repository) puis lancer les commandes :

```shell
yarn install # Installer les dépendances
yarn dev # Lancer le serveur de développement
```

L'application React se lance sur `localhost:5173` et le serveur de l'API sur `localhost:3004`.

> [!NOTE]
> Pour changer la configuration des serveurs, voir les documentations de [Vite](https://vitejs.dev/config/server-options.html) et [JSON Server](https://github.com/typicode/json-server).

## API

Une API REST est à disposition pour récupérer les données nécessaires à l'application. Elle est accessible via l'URL `localhost:3004`.

Deux points d'entrée sont disponibles : `planets` et `sun`. Les routes que nous utiliseront sont les suivantes :

```
GET     /planets
GET     /planets/:id
GET     /sun
POST    /planets
DELETE  /planets/:id
```

Pour ajouter un peu de réalisme, un délai de réponse de **500 ms** est configuré par défaut pour chaque requête vers l'API.

> [!NOTE]
> Pour plus d'information, voir la documentation de [JSON Server](https://github.com/typicode/json-server).

#### Formats de données

```js
planets: [
  {
    id: string,
    name: string,
    image: string,
    description: string,
    characteristics: {
      diameter: string
      population: string
      type: string
    }
  }
]
```

```js
sun: {
  name: string,
  description: string,
  images: {
    default: string,
    ultraviolet: string
  }
}
```

## Composants UI

Les composants d'interface utiles à l'exercice sont disponibles dans le dossier `src/components` :

| Composant | Description |
| --- | --- |
| [`<Spinner>`](src/components/Spinner.jsx) | Affiche un indicateur de chargement |
| [`<Image>`](src/components/Image.jsx) | Affiche une image |
| [`<Icon>`](src/components/Icon.jsx) | Affiche une icône |
| [`<Button>`](src/components/Button.jsx) |  Affiche un bouton |
| [`<ToggleSwitch>`](src/components/ToggleSwitch.jsx) | Affiche un bouton d'activation/désactivation |

La documentation pour chaque composant est disponible dans la [JSDoc](https://jsdoc.app/) de leur fichier respectif.

## Instructions

🚀 *C'est parti pour le décollage...*

### 1. Le système solaire 🌌

Le système solaire correspond au composant `<SolarSystem>` situé dans le dossier `src/pages`. **Ta première mission est d'afficher ce composant lorsqu'on navigue l'URL `/`.**

> 💡 Pour rappel, pour le routing tu peux utiliser la librairie [React Router](https://reactrouter.com/en/main).

#### Ton composant est visible ?

Maintenant, modifie le code afin d'afficher une liste des planètes de notre système :

1. Récupère les données des planètes en effectuant un appel à l'API
2. Affiche la liste des planètes en respectant le modèle ci-dessous

En HTML, une liste utilise généralement les balises sémantiques `<ul>` et `<li>`. Pour que l'interface s'affiche correctement, le modèle à respecter est le suivant :

```html
<ul>
  <li>
    <a>
      <img />
      <span><!-- Nom planète n°1 --></span>
    </a>
  </li>
  <li>
    <a>
      <img />
      <span><!-- Nom planète n°2 --></span>
    </a>
  </li>
  [...]
</ul>
```

Bien entendu, il faut retranscrire ce code en pensant *React* : utilise les composants à ta disposition et n'oublie pas que tu dois être capable d'afficher un nombre indéterminé de planètes.

> Un petit conseil : c'est généralement plus joli si tu affiches un un indicateur de chargement pendant que les données se chargent. 😉

### 2. Une planète 🪐

Maintenant que le système solaire est en place, il est temps de créer des pages pour les planètes. Le composant correspondant est `<Planet>`, il doit s'afficher lorsqu'on navigue sur l'URL `/planets/:id`.

1. Ajoute la route permettant d'accéder accéder à la page d'une planète
2. Récupère les données de la planète correspondante au paramètre `id` de l'URL
3. Modifie le composant `<Planet>` afin d'y afficher les données
4. Modifie `<SolarSystem>` afin que lorsqu'on clique sur une planète, on soit redirigé vers sa page (**Attention:** il ne doit y avoir aucun rechargement de page !)

Le modèle d'une page planète est le suivant :

```html
<h1><!-- Nom --></h1>

<img />

<p>
  <!-- Description -->
</p>

<ul>
  <li>
    <h6>Type</h6>
    <!-- Type -->
  </li>
  <li>
    <h6>Population</h6>
    <!-- Population -->
  </li>
  <li>
    <h6>Diameter</h6>
    <!-- Diamètre -->
  </li>
</ul>
```

### 3. La navigation 🧭

**Bravo, nous avons maintenant un système solaire et des planètes !** Essayons de naviguer un peu au milieu de tout ça.

Dans le dossier `src/components` se trouve le composant `<Navigation>`. La navigation doit être accessible depuis **toutes les pages de l'application** et permettre de naviguer entre ces dernières.

1. Ajoute la navigation à l'application
2. Affiche une liste de liens cliquables permettant de naviguer entre les planètes
3. Modifie l'élément de navigation contenant l'icône de la fusée (le premier), afin que lorsqu'on clique dessus on soit redirigé vers le système solaire

> ⭐ **En bonus :** un lien actif doit s'afficher en bleu, **sans modifier** les styles.

Le modèle d'un élément de navigation est le suivant :

```html
<li>
  <a>
    <!-- Nom de la planète -->
  </a>
</li>
```

### 4. Le soleil ☀️

Ajoutons un peu de lumière dans notre système. Le composant `<Sun>` est là pour ça, il doit être accessible via l'URL `/sun`.

1. Ajoute la route permettant d'accéder à la page du soleil
2. Récupère les données du soleil
3. Modifie le composant `<Sun>` afin d'y afficher les données
4. Modifie `<SolarSystem>` afin d'ajouter le soleil comme premier élément de la liste

La modèle de la page soleil est le suivant :

```html
<h1><!-- Nom --></h1>

<img />

<p>
  <!-- Description -->
</p>
```

#### C'est trop facile ?

Très bien, comme ici on ne fait pas les choses à moitié, tu dois faire en sorte que l'on puisse changer l'image du soleil afin de passer de la vu `default` à la vu `ultraviolet` (et vice-versa).

En dessous du `<p>` de la description, ajoute un bouton d'activation/désactivation permettant de naviguer entre les deux vues :

![Toggle Switch Demo](public/toggle_switch_demo.gif)

Maintenant, développe la fonctionnalité permettant de changer l'image du soleil lorsqu'on clique sur ce bouton. **Aucun appel à l'API n'est nécessaire.**

---

**Toutes mes félicitations, la mission est un succès ! Nous avons maintenant un système solaire complet disposant de son soleil et de ses planètes.** Mais si on allait encore plus loin...

---

### 5. Détruire une planète 💥

Maintenant que les données sont affichées, essayons de les manipuler un peu. Sur le composant `<Planet>`, ajoute un bouton en dessous de la liste de caractéristiques :

![Destroy Button Demo](public/destroy_button_demo.png)

#### Tes objectifs :

1. Ajouter le code permettant de supprimer une planète au clic du bouton
2. Rediriger l'utilisateur sur le système solaire lorsque la suppression est réussie

> [!WARNING]
> Les actions CRUD vont directement modifier le fichier `db.json`. Une sauvegarde des données initiales est disponible sur le fichier `db_backup.json`.

### 6. Créer une planète 🌱

**Super !** Maintenant que tu as détruit toutes les planètes du système, ça serait bien de pouvoir en créer des nouvelles.

Tu as à ta disposition un composant `<CreatePlanetForm>` contenant un modèle de formulaire simple. Pour commencer, tu dois faire en sorte qu'on puisse accéder au formulaire depuis l'URL `/planets/create` :

1. Créer la route permettant d'accéder au formulaire
2. Sur le composant `<SolarSystem>`, ajoute le bouton suivant à la fin de la liste des planètes :

```html
<li id="newPlanet">
  <a>
    <div id="create">
      <span>
        <Icon name="plus" />
      </span>
    </div>

    <span>New planet</span>
  </a>
</li>
```

3. Ajoute le code permettant d'accéder au formulaire de création au clic du bouton

Parfait, maintenant que le formulaire est accessible, il faut le rendre fonctionnel. Le format de données attendu pour la création d'une planète est le suivant :

```js
{
  name: string,
  image: string,
  description: string,
  characteristics: {
    diameter: string
    population: string
    type: string
  }
}
```

En dehors du champ `image`, toutes ces valeurs peuvent être récupérées via les `<input>` et `<textarea>` du formulaire. Il existe plusieurs façon de faire, à toi de choisir la méthode qui te convient.

#### Et pour l'image alors ?

La liste des images disponibles peut être récupérée via le fichier `src/config/images.js`. L'utilisateur doit pouvoir sélectionner l'image de sont choix parmi les éléments de cette liste.

En dessous du titre du formulaire, ajoute la liste des images en utilisant le modèle suivant :

```html
<ul>
  <li class="selected">
    <img />
  </li>
  <li>
    <img />
  </li>
  [...]
</ul>
```

La *class* CSS `selected` doit être appliquée **uniquement sur l'image sélectionnée**. Pour rappel, le modèle ci-dessus est écrit en HTML, tu dois le retranscrire façon React.

> ⭐ **En bonus :** deux images du Soleil se sont également glissées dans cette liste, essaye de les enlever des images proposées à l'utilisateur **sans modifier** le fichier `images.js`.

#### Ça manque un peu d'action...

C'est bien beau d'avoir un formulaire, mais il faudrait pouvoir interagir avec ! Ajoute les boutons d'actions suivants dans la section correspondante :

![Form Buttons Demo](public/form_buttons_demo.png)

#### Le défi final :

1. Envoie les données du formulaire à la base de données au clic du bouton "Create"
2. Redirige l'utilisateur sur la page de la nouvelle planète lorsque la création est réussie
3. Redirige sur le système solaire au clic du bouton "Cancel"

---

<div align="center">

<h4>Mission accomplie, Reactronaut ! Tu as complété avec succès cette aventure reactiale. Maintenant, détends-toi et profite de la vue imprenable sur l'univers que tu as créé. 🌟<h4>
</div>