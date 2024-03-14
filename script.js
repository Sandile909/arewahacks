const btns = document.querySelectorAll('button');
btns.forEach(btns =>{
btns.onclick = (e) =>{
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