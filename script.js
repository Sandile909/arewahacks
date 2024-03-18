const adminContact = document.querySelectorAll('.adminContact');
adminContact.forEach(adminContact =>{
adminContact.onclick = (e) =>{
window.open('https://wa.me/+2349016279383', '_self')
}
});

const em = document.querySelector('em');
em.onclick = (e) =>{
window.open('https://wa.me/+27605683291', '_self')
};

const form = document.querySelector('form');
form.onsubmit = (e) =>{
e.preventDefault();
alert('Thank you for your suggestions.')
}

const dialogOpen = document.querySelector('.dialogOpen');
const dialogClose = document.querySelector('.dialogClose');
const dialog = document.querySelector('dialog');

dialogOpen.onclick = (e) =>{
var input = prompt('Enter identification');
var answer = 'anonymoushackers4150@gmail.com';
if(input == answer){
alert('Welcome Admin, ' + input);
dialog.showModal();
}else{
alert(input + ', Is not admin!');
dialog.close();
}
}

dialogClose.onclick = (e) =>{
dialog.close();
}