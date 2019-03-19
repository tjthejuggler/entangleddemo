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