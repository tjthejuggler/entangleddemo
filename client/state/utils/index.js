export function createRadioButton(id,groupName,text){
    var radioInput = document.createElement('input');
    radioInput.setAttribute('type', 'radio');
	radioInput.setAttribute('name', 'radioGroup');
	radioInput.setAttribute('id', id);

	var label = document.createElement('radioLabel');
    label.innerHTML = text;
    document.body.appendChild(label);

    return radioInput
    
}

export function createButton(id,text,size){
    var but = document.createElement('button');
    but.id = id;
    but.innerHTML = text;
    but.style.background = '#4FFF8F';
    but.style.width = size; // setting the width to 200px
    but.style.height = size; // setting the height to 200px
    but.style.zIndex = 1000;
    return but;
}

export function createMessageUnder(elem, html, id, fontSize) {
  // create message element
  let message = document.createElement('div');
  // better to use a css class for the style here
  message.style.cssText = "position:fixed; color: red";
  message.style.fontSize = fontSize;
  message.id = id;


  // assign coordinates, don't forget "px"!
  // let coords = elem.getBoundingClientRect();

  // message.style.left = coords.left + "px";
  // message.style.top = coords.bottom + "px";

  message.innerHTML = html;

  return message;
}