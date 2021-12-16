# Yombal DOM

![yombal-dom](https://img.shields.io/badge/Js-Yombal%20Dom-red")

A small extension adding methods to Elements and Document Object to write less code and do more.

## Methods

### Document Object
  - **[Document.createElementWithAttributes()]()**<br>
      Crée un nouvel élément avec des attributs.
      - <span style='color:#FD971F;'>params</span> : <br>
          1. tag ex: h1
          2. attributes (sous forme de paire key/value) ex : {'class':'btn', 'value':'send'}
  - **[Document.createElementWithText()]()**<br>
      Crée un nouvel élément avec du text.
      - <span style='color:#FD971F;'>params</span> : <br>
          1. tag ex: p
          2. textContent ex: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, debitis?"
  - **[Document.createElementWithChilds()]()**<br>
      Crée un nouvel élément avec des fils.
      - <span style='color:#FD971F;'>params</span> : <br>
          1. tag ex: form
          2. childs (list of element) ex : [input, button]

  ### Element Object
  Element hérite des méthodes fournit par la classe parente Node et de sa classe parente avant elle : EventTarget.
  - **[Element.setAttributes()]()**<br>
      Définit les valeurs des attribut nommés pour le nœud courant.
      - <span style='color:#FD971F;'>params</span> : <br>
          1. paire key/value des attributs. ex : {'class':'btn', 'value':'send'}
  - **[Element.appendChilds()]()**<br>
      Ajoute les enfants spécifiés en argument comme enfant au noeud actuel.
      - <span style='color:#FD971F;'>params</span> : <br>
          1. childs (list of element) ex : [input, button]
  - **[Element.toggleClass()]()**<br>
      Ajoute ou supprime une classe (basculement)
      - <span style='color:#FD971F;'>params</span> : <br>
          1. value of class

## Module
  - **[yombal]()**<br>
      - <span style='color:#FD971F;'>params</span> : <br>
          1. id of template
          2. objet avec comme clés les valeur entre les curly braces {}

      - usage :
        1. in html file : \<tag id="App">{{ title }}\</tag>
        2. in js file : yombal("App", {title:"The Title"})
        result : \<tag id="App">The Title\</tag>

## Shortcut
- **[_]()** to select element like document.querySelector
- **[__]()** to select element like document.querySelectorAll
- **[$()]()** like **[EventTarget.addEventListener()]()**<br>
    Enregistre un gestionnaire d'événements d'un type d'événement spécifique sur EventTarget.
    - <span style='color:#FD971F;'>params</span> :<br>
        1. target(or element)
        2. l'evenement
        3. L'objet qui recevra un évènement lorsqu'un évènement du type spécifié se produit. ex : callback function
        4. \[option\]

## Guide 📥
### Over a CDN
  > insert `<script src="https://unpkg.com/yombal-dom@1.0.3/utils.js" crossorigin="anonymous"></script>` in head tag

### Via NPM
1. `npm i yombal-dom`
2. insert `<script src="node_modules/yombal-dom/utils.js"></script>` in head tag before any script
### Via GIT
1. `git clone https://github.com/honorableCon/yombal-dom.git`
2. copy `utils.js` to your project directory
3. insert `<script src="utils.js"></script>` in head tag before any script

> eNJOY !
  
## Auteur

> Created by **[Honorable Con](https://github.com/honorableCon)**, M.E.R.N Stack developer

## Contribution

New methods suggestion or more.. You can tell me **[here](https://github.com/honorableCon/yombal-dom/issues)** or pull request.


### License

This project is under the **[GPL V3 License](https://github.com/honorableCon/yombal-dom/blob/main/LICENSE)**

> **Jaajeuf!** 🙏🏾
