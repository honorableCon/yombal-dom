![hf10_logo_wall_1920x1080](https://github.com/MedouneSGB/Impact-Wall/assets/40875400/46c28d0e-c595-437d-9bad-f70bbbc74ed9)

# Yombal DOM

![yombal-dom](https://img.shields.io/badge/Js-Yombal%20Dom-red")

A small extension adding methods to Elements and Document Object to write less code and do more.

## Methods

### Document Object
  - **[Document.createElementWithAttributes()]()**<br>
      Creates a new element with attributes.
      - <span style='color:#FD971F;'>params</span> : <br>
          1. tag ex: h1
          2. attributes (as a key/value pair) ex : {'class':'btn', 'value':'send'}
  - **[Document.createElementWithText()]()**<br>
      Creates a new element with text.
      - <span style='color:#FD971F;'>params</span> : <br>
          1. tag ex: p
          2. textContent ex: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, debitis?"
  - **[Document.createElementWithChilds()]()**<br>
      Creates a new element with childs.
      - <span style='color:#FD971F;'>params</span> : <br>
          1. tag ex: form
          2. childs (list of element) ex : [input, button]
  - **[Document.createElementFromTemplate()]()**<br>
      Create a new element from a template
      - <span style='color:#FD971F;'>params</span> : <br>
          1. idTemplate
          2. data as object
        - usage
          1. in html file : 
            ```html
            <template id="cardTemplate">
                <div class="card">
                    <h1> {{ title }} </h1>
                    <p> {{ content }} </p>
                </div>
            </template>
            ```
          2. in javascript file:
            ```javascript
             let element = document.createElementFromTemplate("cardTemplate", {
                title: "the title",
                content: "the content"
            })
            ```
          - the returning element : 
          ```html
              <div class="card">
                  <h1> the title </h1>
                  <p> the content </p>
              </div>
          ```
          

  ### Element Object
  Element inherits the methods provided by the Node parent class and its parent class before it : EventTarget.
  - **[Element.setAttributes()]()**<br>
      Sets the named attribute values ​​for the current node.
      - <span style='color:#FD971F;'>params</span> : <br>
          1. key/value pair of attributes.  ex : {'class':'btn', 'value':'send'}
  - **[Element.appendChilds()]()**<br>
      Adds the childs specified in argument as child to the current node.
      - <span style='color:#FD971F;'>params</span> : <br>
          1. childs (list of element) ex : [input, button]
  - **[Element.toggleClass()]()**<br>
      Adds or removes a class (toggle)
      - <span style='color:#FD971F;'>params</span> : <br>
          1. value of class
  - **[Element.replaceMustachWithObjectValues()]()**<br>
      Adds or removes a class (replace)
      - <span style='color:#FD971F;'>params</span> : <br>
        - usage
          1. in html file : 
            ```html
            <div id="card">
                <h1> {{ title }} </h1>
                <p> {{ content }} </p>
            </div>
            ```
          2. in javascript file:
            ```javascript
             let card = _("#card");
             card.replaceMustachWithObjectValues({
                title: "a title",
                content: "A content of.."
            })
            ```
          - result : 
          ```html
          <div class="card">
              <h1> a title </h1>
              <p> A content of.. </p>
          </div>


## Shortcut
- **[_]()** to select element like document.querySelector
- **[__]()** to select element like document.querySelectorAll
- **[$()]()** like **[EventTarget.addEventListener()]()**<br>
    Registers an event handler of a specific event type to EventTarget.
    - <span style='color:#FD971F;'>params</span> :<br>
        1. target(or element)
        2. the event
        3. The object that will receive an event when an event of the specified type occurs.  ex: callback function
        4. \[option\]

## Guide 📥
### Over a CDN
  > insert `<script src="https://unpkg.com/yombal-dom@1.0.5/utils.js" crossorigin="anonymous"></script>` in head tag

### Via NPM
1. `npm i yombal-dom`
2. insert `<script src="node_modules/yombal-dom/utils.js"></script>` in head tag before any script
### Via GIT
1. `git clone https://github.com/honorableCon/yombal-dom.git`
2. copy `utils.js` to your project directory
3. insert `<script src="utils.js"></script>` in head tag before any script

> eNJOY !
  
## Author

> Created by **[Honorable Con](https://github.com/honorableCon)**, M.E.R.N Stack developer

## Contribution

New methods suggestion or more.. You can tell me **[here](https://github.com/honorableCon/yombal-dom/issues)** or pull request.


### License

This project is under the **[GPL V3 License](https://github.com/honorableCon/yombal-dom/blob/main/LICENSE)**

> **Jaajeuf!** 🙏🏾
