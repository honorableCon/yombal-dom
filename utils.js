function isItemInList(list, item){
	for (let i in list)
        if (list[i] == item)
            return true;
    return false;
}

Element.prototype.setAttributes = function (attributes) {
    for(let key in attributes) {
    	this.setAttribute(key, attributes[key]);
    }
}


Element.prototype.appendChilds = function(...childs){
  	for(let child of childs){
		this.appendChild(child);
  	}
	return this;
}


Element.prototype.toggleClass = function(item){
	let classIn = isItemInList(this.classList, item);
	if (classIn == false)
		this.setAttribute('class',`${this.classList.value} ${item}`);
	else
		this.setAttribute('class', this.classList.value.replace(item, ""));
	return this;
}


Element.prototype.replaceMustachWithObjectValues = function(dataObject) {
    const pattern = /{{\s*(\S+)\s*}}/gm
    let template = element.innerHTML;
    let found = template.matchAll(pattern);

    Array.from(found, match => {
        let mustached = match[0];
        let key = match[1];
        let value = dataObject[key];
        
        template = template.replace(mustached, value);
    })
    element.innerHTML = template;
}
const replaceMustachWithObjectValues = Element.prototype.replaceMustachWithObjectValues;


Document.prototype.createElementWithAttributes = function(element, attributes){
	element = document.createElement(element);
	element.setAttributes(attributes);
	return element;
}
const createElementWithAttributes = Document.prototype.createElementWithAttributes;


Document.prototype.createElementWithChilds = function(element, childs){
	element = document.createElement(element);
	element.appendChilds(childs);
	return element;
}
const createElementWithChilds = Document.prototype.createElementWithChilds;


Document.prototype.createElementWithText = function(element, text){
	element = document.createElement(element);
	element.textContent = text;
	return element;
}
const createElementWithText = Document.prototype.createElementWithText;


Document.prototype.createElementFromTemplate = function(idTemplate, dataObject) {
    let template = document.getElementById(idTemplate);
    let element = template.content.firstElementChild.cloneNode(true);
    element.replaceMustachWithObjectValues(dataObject);
    return element;
} 
const createElementFromTemplate = Document.prototype.createElementFromTemplate;


let $ = function(element, event, callback, option=true){
	element.addEventListener(event, callback, option);
}

let _ = query => document.querySelector(query);


let __ = query => document.querySelectorAll(query);