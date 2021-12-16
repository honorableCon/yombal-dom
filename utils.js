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

Document.prototype.createElementWithAttributes = function(element, attributes){
	element = document.createElement(element);
	element.setAttributes(attributes);
	return element;
}; const createElementWithAttributes = Document.prototype.createElementWithAttributes;


Document.prototype.createElementWithChilds = function(element, childs){
	element = document.createElement(element);
	element.appendChilds(childs);
	return element;
}; const createElementWithChilds = Document.prototype.createElementWithChilds;


Document.prototype.createElementWithText = function(element, text){
	element = document.createElement(element);
	element.textContent = text;
	return element;
}; const createElementWithText = Document.prototype.createElementWithText;

let $ = function(element, event, callback, option=true){
	element.addEventListener(event, callback, option);
}


function yombal(idElement, dataObject) {
    let element = document.getElementById(idElement);
    const patternRegex = /{{ (.*) }}/g
    let template = element.innerHTML;
    let match;

    while ( match = patternRegex.exec(template) ) {
        let mustached = match[0];
        let key = match[1];
        let value = dataObject[key];
        
        if(value == undefined){
            console.error("key", key, 'inexistante')
            value = "";
        }
        template = template.replace(mustached, value);
    }
    element.innerHTML = template;
}


let _ = query => document.querySelector(query);


let __ = query => document.querySelectorAll(query);