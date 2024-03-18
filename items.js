const confirm = document.querySelector('.confirm');
const file = document.querySelector('.file');
const itemName = document.querySelector('.itemName');
const initialiseItem = document.querySelector('.initialiseItem');
const shop = document.querySelector('.shop');

confirm.onsubmit = (e) =>{
e.preventDefault();

var div = document.createElement('div');
var img = document.createElement('img');
var p = document.createElement('p');
var button = document.createElement('button');

div.className = 'item';
img.setAttribute('src', file.value);
img.setAttribute('preload', 'auto');
p.textContent = itemName.value;
button.textContent = 'Buy Item';
button.className = 'adminContact';
button.setAttribute('type', 'submit');

shop.appendChild(div);
div.appendChild(img);
div.appendChild(p);
div.appendChild(button);
}